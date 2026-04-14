(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Se={},Kr=[],Wt=()=>{},Td=()=>!1,Zo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ea=n=>n.startsWith("onUpdate:"),Ze=Object.assign,rl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},x_=Object.prototype.hasOwnProperty,Ee=(n,e)=>x_.call(n,e),re=Array.isArray,Gr=n=>vi(n)==="[object Map]",Id=n=>vi(n)==="[object Set]",oh=n=>vi(n)==="[object Date]",le=n=>typeof n=="function",He=n=>typeof n=="string",wt=n=>typeof n=="symbol",Ae=n=>n!==null&&typeof n=="object",wd=n=>(Ae(n)||le(n))&&le(n.then)&&le(n.catch),Ad=Object.prototype.toString,vi=n=>Ad.call(n),M_=n=>vi(n).slice(8,-1),bd=n=>vi(n)==="[object Object]",ta=n=>He(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,zs=nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},L_=/-\w/g,Ot=na(n=>n.replace(L_,e=>e.slice(1).toUpperCase())),F_=/\B([A-Z])/g,Sr=na(n=>n.replace(F_,"-$1").toLowerCase()),Sd=na(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wa=na(n=>n?`on${Sd(n)}`:""),zt=(n,e)=>!Object.is(n,e),co=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Rd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},sl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ah;const ra=()=>ah||(ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fs(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=He(r)?$_(r):fs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(He(n)||Ae(n))return n}const U_=/;(?![^(]*\))/g,B_=/:([^]+)/,j_=/\/\*[^]*?\*\//g;function $_(n){const e={};return n.replace(j_,"").split(U_).forEach(t=>{if(t){const r=t.split(B_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function il(n){let e="";if(He(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=il(n[t]);r&&(e+=r+" ")}else if(Ae(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const q_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",H_=nl(q_);function Cd(n){return!!n||n===""}function z_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=ii(n[r],e[r]);return t}function ii(n,e){if(n===e)return!0;let t=oh(n),r=oh(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=wt(n),r=wt(e),t||r)return n===e;if(t=re(n),r=re(e),t||r)return t&&r?z_(n,e):!1;if(t=Ae(n),r=Ae(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const c=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!ii(n[a],e[a]))return!1}}return String(n)===String(e)}const Pd=n=>!!(n&&n.__v_isRef===!0),Nn=n=>He(n)?n:n==null?"":re(n)||Ae(n)&&(n.toString===Ad||!le(n.toString))?Pd(n)?Nn(n.value):JSON.stringify(n,Vd,2):String(n),Vd=(n,e)=>Pd(e)?Vd(n,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Ka(r,i)+" =>"]=s,t),{})}:Id(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ka(t))}:wt(e)?Ka(e):Ae(e)&&!re(e)&&!bd(e)?String(e):e,Ka=(n,e="")=>{var t;return wt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class kd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=it;try{return it=this,e()}finally{it=t}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Dd(n){return new kd(n)}function Od(){return it}function W_(n,e=!1){it&&it.cleanups.push(n)}let Re;const Ga=new WeakSet;class Nd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ga.has(this)&&(Ga.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Md(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ch(this),Ld(this);const e=Re,t=Nt;Re=this,Nt=!0;try{return this.fn()}finally{Fd(this),Re=e,Nt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cl(e);this.deps=this.depsTail=void 0,ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ga.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yc(this)&&this.run()}get dirty(){return yc(this)}}let xd=0,Ws,Ks;function Md(n,e=!1){if(n.flags|=8,e){n.next=Ks,Ks=n;return}n.next=Ws,Ws=n}function ol(){xd++}function al(){if(--xd>0)return;if(Ks){let e=Ks;for(Ks=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ws;){let e=Ws;for(Ws=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Ld(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Fd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),cl(r),K_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function yc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ud(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ud(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===oi)||(n.globalVersion=oi,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!yc(n))))return;n.flags|=2;const e=n.dep,t=Re,r=Nt;Re=n,Nt=!0;try{Ld(n);const s=n.fn(n._value);(e.version===0||zt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Re=t,Nt=r,Fd(n),n.flags&=-3}}function cl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)cl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function K_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nt=!0;const Bd=[];function yn(){Bd.push(Nt),Nt=!1}function vn(){const n=Bd.pop();Nt=n===void 0?!0:n}function ch(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Re;Re=void 0;try{e()}finally{Re=t}}}let oi=0;class G_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ll{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Re||!Nt||Re===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Re)t=this.activeLink=new G_(Re,this),Re.deps?(t.prevDep=Re.depsTail,Re.depsTail.nextDep=t,Re.depsTail=t):Re.deps=Re.depsTail=t,jd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Re.depsTail,t.nextDep=void 0,Re.depsTail.nextDep=t,Re.depsTail=t,Re.deps===t&&(Re.deps=r)}return t}trigger(e){this.version++,oi++,this.notify(e)}notify(e){ol();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{al()}}}function jd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)jd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ao=new WeakMap,mr=Symbol(""),vc=Symbol(""),ai=Symbol("");function at(n,e,t){if(Nt&&Re){let r=Ao.get(n);r||Ao.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new ll),s.map=r,s.key=t),s.track()}}function hn(n,e,t,r,s,i){const a=Ao.get(n);if(!a){oi++;return}const c=l=>{l&&l.trigger()};if(ol(),e==="clear")a.forEach(c);else{const l=re(n),h=l&&ta(t);if(l&&t==="length"){const d=Number(r);a.forEach((p,_)=>{(_==="length"||_===ai||!wt(_)&&_>=d)&&c(p)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(ai)),e){case"add":l?h&&c(a.get("length")):(c(a.get(mr)),Gr(n)&&c(a.get(vc)));break;case"delete":l||(c(a.get(mr)),Gr(n)&&c(a.get(vc)));break;case"set":Gr(n)&&c(a.get(mr));break}}al()}function Q_(n,e){const t=Ao.get(n);return t&&t.get(e)}function Fr(n){const e=_e(n);return e===n?e:(at(e,"iterate",ai),Tt(n)?e:e.map(Mt))}function sa(n){return at(n=_e(n),"iterate",ai),n}function qt(n,e){return En(n)?ns(mn(n)?Mt(e):e):Mt(e)}const J_={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,n=>qt(this,n))},concat(...n){return Fr(this).concat(...n.map(e=>re(e)?Fr(e):e))},entries(){return Qa(this,"entries",n=>(n[1]=qt(this,n[1]),n))},every(n,e){return an(this,"every",n,e,void 0,arguments)},filter(n,e){return an(this,"filter",n,e,t=>t.map(r=>qt(this,r)),arguments)},find(n,e){return an(this,"find",n,e,t=>qt(this,t),arguments)},findIndex(n,e){return an(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return an(this,"findLast",n,e,t=>qt(this,t),arguments)},findLastIndex(n,e){return an(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return an(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ja(this,"includes",n)},indexOf(...n){return Ja(this,"indexOf",n)},join(n){return Fr(this).join(n)},lastIndexOf(...n){return Ja(this,"lastIndexOf",n)},map(n,e){return an(this,"map",n,e,void 0,arguments)},pop(){return Ms(this,"pop")},push(...n){return Ms(this,"push",n)},reduce(n,...e){return lh(this,"reduce",n,e)},reduceRight(n,...e){return lh(this,"reduceRight",n,e)},shift(){return Ms(this,"shift")},some(n,e){return an(this,"some",n,e,void 0,arguments)},splice(...n){return Ms(this,"splice",n)},toReversed(){return Fr(this).toReversed()},toSorted(n){return Fr(this).toSorted(n)},toSpliced(...n){return Fr(this).toSpliced(...n)},unshift(...n){return Ms(this,"unshift",n)},values(){return Qa(this,"values",n=>qt(this,n))}};function Qa(n,e,t){const r=sa(n),s=r[e]();return r!==n&&!Tt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const X_=Array.prototype;function an(n,e,t,r,s,i){const a=sa(n),c=a!==n&&!Tt(n),l=a[e];if(l!==X_[e]){const p=l.apply(n,i);return c?Mt(p):p}let h=t;a!==n&&(c?h=function(p,_){return t.call(this,qt(n,p),_,n)}:t.length>2&&(h=function(p,_){return t.call(this,p,_,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function lh(n,e,t,r){const s=sa(n),i=s!==n&&!Tt(n);let a=t,c=!1;s!==n&&(i?(c=r.length===0,a=function(h,d,p){return c&&(c=!1,h=qt(n,h)),t.call(this,h,qt(n,d),p,n)}):t.length>3&&(a=function(h,d,p){return t.call(this,h,d,p,n)}));const l=s[e](a,...r);return c?qt(n,l):l}function Ja(n,e,t){const r=_e(n);at(r,"iterate",ai);const s=r[e](...t);return(s===-1||s===!1)&&oa(t[0])?(t[0]=_e(t[0]),r[e](...t)):s}function Ms(n,e,t=[]){yn(),ol();const r=_e(n)[e].apply(n,t);return al(),vn(),r}const Y_=nl("__proto__,__v_isRef,__isVue"),$d=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(wt));function Z_(n){wt(n)||(n=String(n));const e=_e(this);return at(e,"has",n),e.hasOwnProperty(n)}class qd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?ly:Kd:i?Wd:zd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=J_[t]))return l;if(t==="hasOwnProperty")return Z_}const c=Reflect.get(e,t,Me(e)?e:r);if((wt(t)?$d.has(t):Y_(t))||(s||at(e,"get",t),i))return c;if(Me(c)){const l=a&&ta(t)?c:c.value;return s&&Ae(l)?Tc(l):l}return Ae(c)?s?Tc(c):ia(c):c}}class Hd extends qd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=re(e)&&ta(t);if(!this._isShallow){const h=En(i);if(!Tt(r)&&!En(r)&&(i=_e(i),r=_e(r)),!a&&Me(i)&&!Me(r))return h||(i.value=r),!0}const c=a?Number(t)<e.length:Ee(e,t),l=Reflect.set(e,t,r,Me(e)?e:s);return e===_e(s)&&(c?zt(r,i)&&hn(e,"set",t,r):hn(e,"add",t,r)),l}deleteProperty(e,t){const r=Ee(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&hn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!wt(t)||!$d.has(t))&&at(e,"has",t),r}ownKeys(e){return at(e,"iterate",re(e)?"length":mr),Reflect.ownKeys(e)}}class ey extends qd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ty=new Hd,ny=new ey,ry=new Hd(!0);const Ec=n=>n,Xi=n=>Reflect.getPrototypeOf(n);function sy(n,e,t){return function(...r){const s=this.__v_raw,i=_e(s),a=Gr(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?Ec:e?ns:Mt;return!e&&at(i,"iterate",l?vc:mr),Ze(Object.create(h),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:c?[d(p[0]),d(p[1])]:d(p),done:_}}})}}function Yi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function iy(n,e){const t={get(s){const i=this.__v_raw,a=_e(i),c=_e(s);n||(zt(s,c)&&at(a,"get",s),at(a,"get",c));const{has:l}=Xi(a),h=e?Ec:n?ns:Mt;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&at(_e(s),"iterate",mr),s.size},has(s){const i=this.__v_raw,a=_e(i),c=_e(s);return n||(zt(s,c)&&at(a,"has",s),at(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=_e(c),h=e?Ec:n?ns:Mt;return!n&&at(l,"iterate",mr),c.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return Ze(t,n?{add:Yi("add"),set:Yi("set"),delete:Yi("delete"),clear:Yi("clear")}:{add(s){const i=_e(this),a=Xi(i),c=_e(s),l=!e&&!Tt(s)&&!En(s)?c:s;return a.has.call(i,l)||zt(s,l)&&a.has.call(i,s)||zt(c,l)&&a.has.call(i,c)||(i.add(l),hn(i,"add",l,l)),this},set(s,i){!e&&!Tt(i)&&!En(i)&&(i=_e(i));const a=_e(this),{has:c,get:l}=Xi(a);let h=c.call(a,s);h||(s=_e(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?zt(i,d)&&hn(a,"set",s,i):hn(a,"add",s,i),this},delete(s){const i=_e(this),{has:a,get:c}=Xi(i);let l=a.call(i,s);l||(s=_e(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&hn(i,"delete",s,void 0),h},clear(){const s=_e(this),i=s.size!==0,a=s.clear();return i&&hn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=sy(s,n,e)}),t}function ul(n,e){const t=iy(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ee(t,s)&&s in r?t:r,s,i)}const oy={get:ul(!1,!1)},ay={get:ul(!1,!0)},cy={get:ul(!0,!1)};const zd=new WeakMap,Wd=new WeakMap,Kd=new WeakMap,ly=new WeakMap;function uy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hy(n){return n.__v_skip||!Object.isExtensible(n)?0:uy(M_(n))}function ia(n){return En(n)?n:hl(n,!1,ty,oy,zd)}function fy(n){return hl(n,!1,ry,ay,Wd)}function Tc(n){return hl(n,!0,ny,cy,Kd)}function hl(n,e,t,r,s){if(!Ae(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=hy(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function mn(n){return En(n)?mn(n.__v_raw):!!(n&&n.__v_isReactive)}function En(n){return!!(n&&n.__v_isReadonly)}function Tt(n){return!!(n&&n.__v_isShallow)}function oa(n){return n?!!n.__v_raw:!1}function _e(n){const e=n&&n.__v_raw;return e?_e(e):n}function fl(n){return!Ee(n,"__v_skip")&&Object.isExtensible(n)&&Rd(n,"__v_skip",!0),n}const Mt=n=>Ae(n)?ia(n):n,ns=n=>Ae(n)?Tc(n):n;function Me(n){return n?n.__v_isRef===!0:!1}function Gd(n){return dy(n,!1)}function dy(n,e){return Me(n)?n:new py(n,e)}class py{constructor(e,t){this.dep=new ll,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:_e(e),this._value=t?e:Mt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Tt(e)||En(e);e=r?e:_e(e),zt(e,t)&&(this._rawValue=e,this._value=r?e:Mt(e),this.dep.trigger())}}function we(n){return Me(n)?n.value:n}const gy={get:(n,e,t)=>e==="__v_raw"?n:we(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Me(s)&&!Me(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Qd(n){return mn(n)?n:new Proxy(n,gy)}function my(n){const e=re(n)?new Array(n.length):{};for(const t in n)e[t]=yy(n,t);return e}class _y{constructor(e,t,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=wt(t)?t:String(t),this._raw=_e(e);let s=!0,i=e;if(!re(e)||wt(this._key)||!ta(this._key))do s=!oa(i)||Tt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=we(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Me(this._raw[this._key])){const t=this._object[this._key];if(Me(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return Q_(this._raw,this._key)}}function yy(n,e,t){return new _y(n,e,t)}class vy{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ll(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Md(this,!0),!0}get value(){const e=this.dep.track();return Ud(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ey(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new vy(r,s,t)}const Zi={},bo=new WeakMap;let hr;function Ty(n,e=!1,t=hr){if(t){let r=bo.get(t);r||bo.set(t,r=[]),r.push(n)}}function Iy(n,e,t=Se){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=z=>s?z:Tt(z)||s===!1||s===0?fn(z,1):fn(z);let d,p,_,b,V=!1,O=!1;if(Me(n)?(p=()=>n.value,V=Tt(n)):mn(n)?(p=()=>h(n),V=!0):re(n)?(O=!0,V=n.some(z=>mn(z)||Tt(z)),p=()=>n.map(z=>{if(Me(z))return z.value;if(mn(z))return h(z);if(le(z))return l?l(z,2):z()})):le(n)?e?p=l?()=>l(n,2):n:p=()=>{if(_){yn();try{_()}finally{vn()}}const z=hr;hr=d;try{return l?l(n,3,[b]):n(b)}finally{hr=z}}:p=Wt,e&&s){const z=p,oe=s===!0?1/0:s;p=()=>fn(z(),oe)}const x=Od(),Q=()=>{d.stop(),x&&x.active&&rl(x.effects,d)};if(i&&e){const z=e;e=(...oe)=>{z(...oe),Q()}}let $=O?new Array(n.length).fill(Zi):Zi;const G=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const oe=d.run();if(s||V||(O?oe.some((ye,I)=>zt(ye,$[I])):zt(oe,$))){_&&_();const ye=hr;hr=d;try{const I=[oe,$===Zi?void 0:O&&$[0]===Zi?[]:$,b];$=oe,l?l(e,3,I):e(...I)}finally{hr=ye}}}else d.run()};return c&&c(G),d=new Nd(p),d.scheduler=a?()=>a(G,!1):G,b=z=>Ty(z,!1,d),_=d.onStop=()=>{const z=bo.get(d);if(z){if(l)l(z,4);else for(const oe of z)oe();bo.delete(d)}},e?r?G(!0):$=d.run():a?a(G.bind(null,!0),!0):d.run(),Q.pause=d.pause.bind(d),Q.resume=d.resume.bind(d),Q.stop=Q,Q}function fn(n,e=1/0,t){if(e<=0||!Ae(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Me(n))fn(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)fn(n[r],e,t);else if(Id(n)||Gr(n))n.forEach(r=>{fn(r,e,t)});else if(bd(n)){for(const r in n)fn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&fn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ei(n,e,t,r){try{return r?n(...r):n()}catch(s){aa(s,e,t)}}function Zt(n,e,t,r){if(le(n)){const s=Ei(n,e,t,r);return s&&wd(s)&&s.catch(i=>{aa(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Zt(n[i],e,t,r));return s}}function aa(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Se;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,h)===!1)return}c=c.parent}if(i){yn(),Ei(i,null,10,[n,l,h]),vn();return}}wy(n,t,s,r,a)}function wy(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const pt=[];let jt=-1;const Qr=[];let Mn=null,jr=0;const Jd=Promise.resolve();let So=null;function Xd(n){const e=So||Jd;return n?e.then(this?n.bind(this):n):e}function Ay(n){let e=jt+1,t=pt.length;for(;e<t;){const r=e+t>>>1,s=pt[r],i=ci(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function dl(n){if(!(n.flags&1)){const e=ci(n),t=pt[pt.length-1];!t||!(n.flags&2)&&e>=ci(t)?pt.push(n):pt.splice(Ay(e),0,n),n.flags|=1,Yd()}}function Yd(){So||(So=Jd.then(ep))}function by(n){re(n)?Qr.push(...n):Mn&&n.id===-1?Mn.splice(jr+1,0,n):n.flags&1||(Qr.push(n),n.flags|=1),Yd()}function uh(n,e,t=jt+1){for(;t<pt.length;t++){const r=pt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;pt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Zd(n){if(Qr.length){const e=[...new Set(Qr)].sort((t,r)=>ci(t)-ci(r));if(Qr.length=0,Mn){Mn.push(...e);return}for(Mn=e,jr=0;jr<Mn.length;jr++){const t=Mn[jr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Mn=null,jr=0}}const ci=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ep(n){try{for(jt=0;jt<pt.length;jt++){const e=pt[jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ei(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jt<pt.length;jt++){const e=pt[jt];e&&(e.flags&=-2)}jt=-1,pt.length=0,Zd(),So=null,(pt.length||Qr.length)&&ep()}}let lt=null,tp=null;function Ro(n){const e=lt;return lt=n,tp=n&&n.type.__scopeId||null,e}function Us(n,e=lt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Th(-1);const i=Ro(e);let a;try{a=n(...s)}finally{Ro(i),r._d&&Th(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ls(n,e){if(lt===null)return n;const t=ha(lt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Se]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&fn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function lr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(yn(),Zt(l,t,8,[n.el,c,n,e]),vn())}}function Sy(n,e){if(gt){let t=gt.provides;const r=gt.parent&&gt.parent.provides;r===t&&(t=gt.provides=Object.create(r)),t[n]=e}}function Gs(n,e,t=!1){const r=Cp();if(r||_r){let s=_r?_r._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}function Ry(){return!!(Cp()||_r)}const Cy=Symbol.for("v-scx"),Py=()=>Gs(Cy);function lo(n,e,t){return np(n,e,t)}function np(n,e,t=Se){const{immediate:r,deep:s,flush:i,once:a}=t,c=Ze({},t),l=e&&r||!e&&i!=="post";let h;if(ui){if(i==="sync"){const b=Py();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=Wt,b.resume=Wt,b.pause=Wt,b}}const d=gt;c.call=(b,V,O)=>Zt(b,d,V,O);let p=!1;i==="post"?c.scheduler=b=>{_t(b,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(b,V)=>{V?b():dl(b)}),c.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const _=Iy(n,e,c);return ui&&(h?h.push(_):l&&_()),_}function Vy(n,e,t){const r=this.proxy,s=He(n)?n.includes(".")?rp(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=Ii(this),c=np(s,i.bind(r),t);return a(),c}function rp(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const ky=Symbol("_vte"),Dy=n=>n.__isTeleport,Oy=Symbol("_leaveCb");function pl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,pl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ti(n,e){return le(n)?Ze({name:n.name},e,{setup:n}):n}function sp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function hh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Co=new WeakMap;function Qs(n,e,t,r,s=!1){if(re(n)){n.forEach((O,x)=>Qs(O,e&&(re(e)?e[x]:e),t,r,s));return}if(Jr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Qs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ha(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===Se?c.refs={}:c.refs,p=c.setupState,_=_e(p),b=p===Se?Td:O=>hh(d,O)?!1:Ee(_,O),V=(O,x)=>!(x&&hh(d,x));if(h!=null&&h!==l){if(fh(e),He(h))d[h]=null,b(h)&&(p[h]=null);else if(Me(h)){const O=e;V(h,O.k)&&(h.value=null),O.k&&(d[O.k]=null)}}if(le(l))Ei(l,c,12,[a,d]);else{const O=He(l),x=Me(l);if(O||x){const Q=()=>{if(n.f){const $=O?b(l)?p[l]:d[l]:V()||!n.k?l.value:d[n.k];if(s)re($)&&rl($,i);else if(re($))$.includes(i)||$.push(i);else if(O)d[l]=[i],b(l)&&(p[l]=d[l]);else{const G=[i];V(l,n.k)&&(l.value=G),n.k&&(d[n.k]=G)}}else O?(d[l]=a,b(l)&&(p[l]=a)):x&&(V(l,n.k)&&(l.value=a),n.k&&(d[n.k]=a))};if(a){const $=()=>{Q(),Co.delete(n)};$.id=-1,Co.set(n,$),_t($,t)}else fh(n),Q()}}}function fh(n){const e=Co.get(n);e&&(e.flags|=8,Co.delete(n))}ra().requestIdleCallback;ra().cancelIdleCallback;const Jr=n=>!!n.type.__asyncLoader,ip=n=>n.type.__isKeepAlive;function Ny(n,e){op(n,"a",e)}function xy(n,e){op(n,"da",e)}function op(n,e,t=gt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ca(e,r,t),t){let s=t.parent;for(;s&&s.parent;)ip(s.parent.vnode)&&My(r,e,t,s),s=s.parent}}function My(n,e,t,r){const s=ca(e,n,r,!0);ap(()=>{rl(r[e],s)},t)}function ca(n,e,t=gt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{yn();const c=Ii(t),l=Zt(e,t,n,a);return c(),vn(),l});return r?s.unshift(i):s.push(i),i}}const Sn=n=>(e,t=gt)=>{(!ui||n==="sp")&&ca(n,(...r)=>e(...r),t)},Ly=Sn("bm"),Fy=Sn("m"),Uy=Sn("bu"),By=Sn("u"),jy=Sn("bum"),ap=Sn("um"),$y=Sn("sp"),qy=Sn("rtg"),Hy=Sn("rtc");function zy(n,e=gt){ca("ec",n,e)}const Wy=Symbol.for("v-ndc");function Ln(n,e,t,r){let s;const i=t,a=re(n);if(a||He(n)){const c=a&&mn(n);let l=!1,h=!1;c&&(l=!Tt(n),h=En(n),n=sa(n)),s=new Array(n.length);for(let d=0,p=n.length;d<p;d++)s[d]=e(l?h?ns(Mt(n[d])):Mt(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(Ae(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}function uo(n,e,t={},r,s){if(lt.ce||lt.parent&&Jr(lt.parent)&&lt.parent.ce){const h=Object.keys(t).length>0;return e!=="default"&&(t.name=e),pe(),Fn(Fe,null,[It("slot",t,r)],h?-2:64)}let i=n[e];i&&i._c&&(i._d=!1),pe();const a=i&&cp(i(t)),c=t.key||a&&a.key,l=Fn(Fe,{key:(c&&!wt(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&n._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function cp(n){return n.some(e=>_l(e)?!(e.type===Tn||e.type===Fe&&!cp(e.children)):!0)?n:null}const Ic=n=>n?Pp(n)?ha(n):Ic(n.parent):null,Js=Ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ic(n.parent),$root:n=>Ic(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>up(n),$forceUpdate:n=>n.f||(n.f=()=>{dl(n.update)}),$nextTick:n=>n.n||(n.n=Xd.bind(n.proxy)),$watch:n=>Vy.bind(n)}),Xa=(n,e)=>n!==Se&&!n.__isScriptSetup&&Ee(n,e),Ky={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Xa(r,e))return a[e]=1,r[e];if(s!==Se&&Ee(s,e))return a[e]=2,s[e];if(Ee(i,e))return a[e]=3,i[e];if(t!==Se&&Ee(t,e))return a[e]=4,t[e];wc&&(a[e]=0)}}const h=Js[e];let d,p;if(h)return e==="$attrs"&&at(n.attrs,"get",""),h(n);if((d=c.__cssModules)&&(d=d[e]))return d;if(t!==Se&&Ee(t,e))return a[e]=4,t[e];if(p=l.config.globalProperties,Ee(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Xa(s,e)?(s[e]=t,!0):r!==Se&&Ee(r,e)?(r[e]=t,!0):Ee(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(t[c]||n!==Se&&c[0]!=="$"&&Ee(n,c)||Xa(e,c)||Ee(i,c)||Ee(r,c)||Ee(Js,c)||Ee(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ee(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function dh(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let wc=!0;function Gy(n){const e=up(n),t=n.proxy,r=n.ctx;wc=!1,e.beforeCreate&&ph(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:b,updated:V,activated:O,deactivated:x,beforeDestroy:Q,beforeUnmount:$,destroyed:G,unmounted:z,render:oe,renderTracked:ye,renderTriggered:I,errorCaptured:m,serverPrefetch:y,expose:T,inheritAttrs:A,components:S,directives:E,filters:ht}=e;if(h&&Qy(h,r,null),a)for(const ce in a){const ge=a[ce];le(ge)&&(r[ce]=ge.bind(t))}if(s){const ce=s.call(t,t);Ae(ce)&&(n.data=ia(ce))}if(wc=!0,i)for(const ce in i){const ge=i[ce],Ct=le(ge)?ge.bind(t,t):le(ge.get)?ge.get.bind(t,t):Wt,nr=!le(ge)&&le(ge.set)?ge.set.bind(t):Wt,nn=vl({get:Ct,set:nr});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>nn.value,set:ze=>nn.value=ze})}if(c)for(const ce in c)lp(c[ce],r,t,ce);if(l){const ce=le(l)?l.call(t):l;Reflect.ownKeys(ce).forEach(ge=>{Sy(ge,ce[ge])})}d&&ph(d,n,"c");function De(ce,ge){re(ge)?ge.forEach(Ct=>ce(Ct.bind(t))):ge&&ce(ge.bind(t))}if(De(Ly,p),De(Fy,_),De(Uy,b),De(By,V),De(Ny,O),De(xy,x),De(zy,m),De(Hy,ye),De(qy,I),De(jy,$),De(ap,z),De($y,y),re(T))if(T.length){const ce=n.exposed||(n.exposed={});T.forEach(ge=>{Object.defineProperty(ce,ge,{get:()=>t[ge],set:Ct=>t[ge]=Ct,enumerable:!0})})}else n.exposed||(n.exposed={});oe&&n.render===Wt&&(n.render=oe),A!=null&&(n.inheritAttrs=A),S&&(n.components=S),E&&(n.directives=E),y&&sp(n)}function Qy(n,e,t=Wt){re(n)&&(n=Ac(n));for(const r in n){const s=n[r];let i;Ae(s)?"default"in s?i=Gs(s.from||r,s.default,!0):i=Gs(s.from||r):i=Gs(s),Me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ph(n,e,t){Zt(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function lp(n,e,t,r){let s=r.includes(".")?rp(t,r):()=>t[r];if(He(n)){const i=e[n];le(i)&&lo(s,i)}else if(le(n))lo(s,n.bind(t));else if(Ae(n))if(re(n))n.forEach(i=>lp(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&lo(s,i,n)}}function up(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>Po(l,h,a,!0)),Po(l,e,a)),Ae(e)&&i.set(e,l),l}function Po(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Po(n,i,t,!0),s&&s.forEach(a=>Po(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=Jy[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const Jy={data:gh,props:mh,emits:mh,methods:Bs,computed:Bs,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Bs,directives:Bs,watch:Yy,provide:gh,inject:Xy};function gh(n,e){return e?n?function(){return Ze(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function Xy(n,e){return Bs(Ac(n),Ac(e))}function Ac(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Bs(n,e){return n?Ze(Object.create(null),n,e):e}function mh(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:Ze(Object.create(null),dh(n),dh(e??{})):e}function Yy(n,e){if(!n)return e;if(!e)return n;const t=Ze(Object.create(null),n);for(const r in e)t[r]=dt(n[r],e[r]);return t}function hp(){return{app:null,config:{isNativeTag:Td,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zy=0;function ev(n,e){return function(r,s=null){le(r)||(r=Ze({},r)),s!=null&&!Ae(s)&&(s=null);const i=hp(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Zy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:kv,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...p)):le(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,_){if(!l){const b=h._ceVNode||It(r,s);return b.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(b,d,_),l=!0,h._container=d,d.__vue_app__=h,ha(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Zt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=_r;_r=h;try{return d()}finally{_r=p}}};return h}}let _r=null;const tv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ot(e)}Modifiers`]||n[`${Sr(e)}Modifiers`];function nv(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Se;let s=t;const i=e.startsWith("update:"),a=i&&tv(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>He(d)?d.trim():d)),a.number&&(s=t.map(sl)));let c,l=r[c=Wa(e)]||r[c=Wa(Ot(e))];!l&&i&&(l=r[c=Wa(Sr(e))]),l&&Zt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Zt(h,n,6,s)}}const rv=new WeakMap;function fp(n,e,t=!1){const r=t?rv:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!le(n)){const l=h=>{const d=fp(h,e,!0);d&&(c=!0,Ze(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Ae(n)&&r.set(n,null),null):(re(i)?i.forEach(l=>a[l]=null):Ze(a,i),Ae(n)&&r.set(n,a),a)}function la(n,e){return!n||!Zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(n,e[0].toLowerCase()+e.slice(1))||Ee(n,Sr(e))||Ee(n,e))}function _h(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:p,data:_,setupState:b,ctx:V,inheritAttrs:O}=n,x=Ro(n);let Q,$;try{if(t.shapeFlag&4){const z=s||r,oe=z;Q=Ht(h.call(oe,z,d,p,b,_,V)),$=c}else{const z=e;Q=Ht(z.length>1?z(p,{attrs:c,slots:a,emit:l}):z(p,null)),$=e.props?c:sv(c)}}catch(z){Xs.length=0,aa(z,n,1),Q=It(Tn)}let G=Q;if($&&O!==!1){const z=Object.keys($),{shapeFlag:oe}=G;z.length&&oe&7&&(i&&z.some(ea)&&($=iv($,i)),G=rs(G,$,!1,!0))}return t.dirs&&(G=rs(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(t.dirs):t.dirs),t.transition&&pl(G,t.transition),Q=G,Ro(x),Q}const sv=n=>{let e;for(const t in n)(t==="class"||t==="style"||Zo(t))&&((e||(e={}))[t]=n[t]);return e},iv=(n,e)=>{const t={};for(const r in n)(!ea(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function ov(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?yh(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(dp(a,r,_)&&!la(h,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?yh(r,a,h):!0:!!a;return!1}function yh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(dp(e,n,i)&&!la(t,i))return!0}return!1}function dp(n,e,t){const r=n[t],s=e[t];return t==="style"&&Ae(r)&&Ae(s)?!ii(r,s):r!==s}function av({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const pp={},gp=()=>Object.create(pp),mp=n=>Object.getPrototypeOf(n)===pp;function cv(n,e,t,r=!1){const s={},i=gp();n.propsDefaults=Object.create(null),_p(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:fy(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function lv(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=_e(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(la(n.emitsOptions,_))continue;const b=e[_];if(l)if(Ee(i,_))b!==i[_]&&(i[_]=b,h=!0);else{const V=Ot(_);s[V]=bc(l,c,V,b,n,!1)}else b!==i[_]&&(i[_]=b,h=!0)}}}else{_p(n,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Ee(e,p)&&((d=Sr(p))===p||!Ee(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=bc(l,c,p,void 0,n,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ee(e,p))&&(delete i[p],h=!0)}h&&hn(n.attrs,"set","")}function _p(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(zs(l))continue;const h=e[l];let d;s&&Ee(s,d=Ot(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:la(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=_e(t),h=c||Se;for(let d=0;d<i.length;d++){const p=i[d];t[p]=bc(s,l,p,h[p],n,!Ee(h,p))}}return a}function bc(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=Ee(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=Ii(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Sr(t))&&(r=!0))}return r}const uv=new WeakMap;function yp(n,e,t=!1){const r=t?uv:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!le(n)){const d=p=>{l=!0;const[_,b]=yp(p,e,!0);Ze(a,_),b&&c.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Ae(n)&&r.set(n,Kr),Kr;if(re(i))for(let d=0;d<i.length;d++){const p=Ot(i[d]);vh(p)&&(a[p]=Se)}else if(i)for(const d in i){const p=Ot(d);if(vh(p)){const _=i[d],b=a[p]=re(_)||le(_)?{type:_}:Ze({},_),V=b.type;let O=!1,x=!0;if(re(V))for(let Q=0;Q<V.length;++Q){const $=V[Q],G=le($)&&$.name;if(G==="Boolean"){O=!0;break}else G==="String"&&(x=!1)}else O=le(V)&&V.name==="Boolean";b[0]=O,b[1]=x,(O||Ee(b,"default"))&&c.push(p)}}const h=[a,c];return Ae(n)&&r.set(n,h),h}function vh(n){return n[0]!=="$"&&!zs(n)}const gl=n=>n==="_"||n==="_ctx"||n==="$stable",ml=n=>re(n)?n.map(Ht):[Ht(n)],hv=(n,e,t)=>{if(e._n)return e;const r=Us((...s)=>ml(e(...s)),t);return r._c=!1,r},vp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(gl(s))continue;const i=n[s];if(le(i))e[s]=hv(s,i,r);else if(i!=null){const a=ml(i);e[s]=()=>a}}},Ep=(n,e)=>{const t=ml(e);n.slots.default=()=>t},Tp=(n,e,t)=>{for(const r in e)(t||!gl(r))&&(n[r]=e[r])},fv=(n,e,t)=>{const r=n.slots=gp();if(n.vnode.shapeFlag&32){const s=e._;s?(Tp(r,e,t),t&&Rd(r,"_",s,!0)):vp(e,r)}else e&&Ep(n,e)},dv=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Se;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:Tp(s,e,t):(i=!e.$stable,vp(e,s)),a=e}else e&&(Ep(n,e),a={default:1});if(i)for(const c in s)!gl(c)&&a[c]==null&&delete s[c]},_t=yv;function pv(n){return gv(n)}function gv(n,e){const t=ra();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:b=Wt,insertStaticContent:V}=n,O=(v,w,P,F=null,N=null,L=null,q=void 0,j=null,U=!!w.dynamicChildren)=>{if(v===w)return;v&&!Fs(v,w)&&(F=rn(v),ze(v,N,L,!0),v=null),w.patchFlag===-2&&(U=!1,w.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:H}=w;switch(M){case ua:x(v,w,P,F);break;case Tn:Q(v,w,P,F);break;case Za:v==null&&$(w,P,F,q);break;case Fe:S(v,w,P,F,N,L,q,j,U);break;default:H&1?oe(v,w,P,F,N,L,q,j,U):H&6?E(v,w,P,F,N,L,q,j,U):(H&64||H&128)&&M.process(v,w,P,F,N,L,q,j,U,Ut)}Y!=null&&N?Qs(Y,v&&v.ref,L,w||v,!w):Y==null&&v&&v.ref!=null&&Qs(v.ref,null,L,v,!0)},x=(v,w,P,F)=>{if(v==null)r(w.el=c(w.children),P,F);else{const N=w.el=v.el;w.children!==v.children&&h(N,w.children)}},Q=(v,w,P,F)=>{v==null?r(w.el=l(w.children||""),P,F):w.el=v.el},$=(v,w,P,F)=>{[v.el,v.anchor]=V(v.children,w,P,F,v.el,v.anchor)},G=({el:v,anchor:w},P,F)=>{let N;for(;v&&v!==w;)N=_(v),r(v,P,F),v=N;r(w,P,F)},z=({el:v,anchor:w})=>{let P;for(;v&&v!==w;)P=_(v),s(v),v=P;s(w)},oe=(v,w,P,F,N,L,q,j,U)=>{if(w.type==="svg"?q="svg":w.type==="math"&&(q="mathml"),v==null)ye(w,P,F,N,L,q,j,U);else{const M=v.el&&v.el._isVueCE?v.el:null;try{M&&M._beginPatch(),y(v,w,N,L,q,j,U)}finally{M&&M._endPatch()}}},ye=(v,w,P,F,N,L,q,j)=>{let U,M;const{props:Y,shapeFlag:H,transition:J,dirs:Z}=v;if(U=v.el=a(v.type,L,Y&&Y.is,Y),H&8?d(U,v.children):H&16&&m(v.children,U,null,F,N,Ya(v,L),q,j),Z&&lr(v,null,F,"created"),I(U,v,v.scopeId,q,F),Y){for(const ae in Y)ae!=="value"&&!zs(ae)&&i(U,ae,null,Y[ae],L,F);"value"in Y&&i(U,"value",null,Y.value,L),(M=Y.onVnodeBeforeMount)&&Bt(M,F,v)}Z&&lr(v,null,F,"beforeMount");const ee=mv(N,J);ee&&J.beforeEnter(U),r(U,w,P),((M=Y&&Y.onVnodeMounted)||ee||Z)&&_t(()=>{try{M&&Bt(M,F,v),ee&&J.enter(U),Z&&lr(v,null,F,"mounted")}finally{}},N)},I=(v,w,P,F,N)=>{if(P&&b(v,P),F)for(let L=0;L<F.length;L++)b(v,F[L]);if(N){let L=N.subTree;if(w===L||bp(L.type)&&(L.ssContent===w||L.ssFallback===w)){const q=N.vnode;I(v,q,q.scopeId,q.slotScopeIds,N.parent)}}},m=(v,w,P,F,N,L,q,j,U=0)=>{for(let M=U;M<v.length;M++){const Y=v[M]=j?un(v[M]):Ht(v[M]);O(null,Y,w,P,F,N,L,q,j)}},y=(v,w,P,F,N,L,q)=>{const j=w.el=v.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=w;U|=v.patchFlag&16;const H=v.props||Se,J=w.props||Se;let Z;if(P&&ur(P,!1),(Z=J.onVnodeBeforeUpdate)&&Bt(Z,P,w,v),Y&&lr(w,v,P,"beforeUpdate"),P&&ur(P,!0),(H.innerHTML&&J.innerHTML==null||H.textContent&&J.textContent==null)&&d(j,""),M?T(v.dynamicChildren,M,j,P,F,Ya(w,N),L):q||ge(v,w,j,null,P,F,Ya(w,N),L,!1),U>0){if(U&16)A(j,H,J,P,N);else if(U&2&&H.class!==J.class&&i(j,"class",null,J.class,N),U&4&&i(j,"style",H.style,J.style,N),U&8){const ee=w.dynamicProps;for(let ae=0;ae<ee.length;ae++){const ve=ee[ae],Oe=H[ve],Ue=J[ve];(Ue!==Oe||ve==="value")&&i(j,ve,Oe,Ue,N,P)}}U&1&&v.children!==w.children&&d(j,w.children)}else!q&&M==null&&A(j,H,J,P,N);((Z=J.onVnodeUpdated)||Y)&&_t(()=>{Z&&Bt(Z,P,w,v),Y&&lr(w,v,P,"updated")},F)},T=(v,w,P,F,N,L,q)=>{for(let j=0;j<w.length;j++){const U=v[j],M=w[j],Y=U.el&&(U.type===Fe||!Fs(U,M)||U.shapeFlag&198)?p(U.el):P;O(U,M,Y,null,F,N,L,q,!0)}},A=(v,w,P,F,N)=>{if(w!==P){if(w!==Se)for(const L in w)!zs(L)&&!(L in P)&&i(v,L,w[L],null,N,F);for(const L in P){if(zs(L))continue;const q=P[L],j=w[L];q!==j&&L!=="value"&&i(v,L,j,q,N,F)}"value"in P&&i(v,"value",w.value,P.value,N)}},S=(v,w,P,F,N,L,q,j,U)=>{const M=w.el=v?v.el:c(""),Y=w.anchor=v?v.anchor:c("");let{patchFlag:H,dynamicChildren:J,slotScopeIds:Z}=w;Z&&(j=j?j.concat(Z):Z),v==null?(r(M,P,F),r(Y,P,F),m(w.children||[],P,Y,N,L,q,j,U)):H>0&&H&64&&J&&v.dynamicChildren&&v.dynamicChildren.length===J.length?(T(v.dynamicChildren,J,P,N,L,q,j),(w.key!=null||N&&w===N.subTree)&&Ip(v,w,!0)):ge(v,w,P,Y,N,L,q,j,U)},E=(v,w,P,F,N,L,q,j,U)=>{w.slotScopeIds=j,v==null?w.shapeFlag&512?N.ctx.activate(w,P,F,q,U):ht(w,P,F,N,L,q,U):Ft(v,w,U)},ht=(v,w,P,F,N,L,q)=>{const j=v.component=bv(v,F,N);if(ip(v)&&(j.ctx.renderer=Ut),Sv(j,!1,q),j.asyncDep){if(N&&N.registerDep(j,De,q),!v.el){const U=j.subTree=It(Tn);Q(null,U,w,P),v.placeholder=U.el}}else De(j,v,w,P,N,L,q)},Ft=(v,w,P)=>{const F=w.component=v.component;if(ov(v,w,P))if(F.asyncDep&&!F.asyncResolved){ce(F,w,P);return}else F.next=w,F.update();else w.el=v.el,F.vnode=w},De=(v,w,P,F,N,L,q)=>{const j=()=>{if(v.isMounted){let{next:H,bu:J,u:Z,parent:ee,vnode:ae}=v;{const tt=wp(v);if(tt){H&&(H.el=ae.el,ce(v,H,q)),tt.asyncDep.then(()=>{_t(()=>{v.isUnmounted||M()},N)});return}}let ve=H,Oe;ur(v,!1),H?(H.el=ae.el,ce(v,H,q)):H=ae,J&&co(J),(Oe=H.props&&H.props.onVnodeBeforeUpdate)&&Bt(Oe,ee,H,ae),ur(v,!0);const Ue=_h(v),At=v.subTree;v.subTree=Ue,O(At,Ue,p(At.el),rn(At),v,N,L),H.el=Ue.el,ve===null&&av(v,Ue.el),Z&&_t(Z,N),(Oe=H.props&&H.props.onVnodeUpdated)&&_t(()=>Bt(Oe,ee,H,ae),N)}else{let H;const{el:J,props:Z}=w,{bm:ee,m:ae,parent:ve,root:Oe,type:Ue}=v,At=Jr(w);ur(v,!1),ee&&co(ee),!At&&(H=Z&&Z.onVnodeBeforeMount)&&Bt(H,ve,w),ur(v,!0);{Oe.ce&&Oe.ce._hasShadowRoot()&&Oe.ce._injectChildStyle(Ue,v.parent?v.parent.type:void 0);const tt=v.subTree=_h(v);O(null,tt,P,F,v,N,L),w.el=tt.el}if(ae&&_t(ae,N),!At&&(H=Z&&Z.onVnodeMounted)){const tt=w;_t(()=>Bt(H,ve,tt),N)}(w.shapeFlag&256||ve&&Jr(ve.vnode)&&ve.vnode.shapeFlag&256)&&v.a&&_t(v.a,N),v.isMounted=!0,w=P=F=null}};v.scope.on();const U=v.effect=new Nd(j);v.scope.off();const M=v.update=U.run.bind(U),Y=v.job=U.runIfDirty.bind(U);Y.i=v,Y.id=v.uid,U.scheduler=()=>dl(Y),ur(v,!0),M()},ce=(v,w,P)=>{w.component=v;const F=v.vnode.props;v.vnode=w,v.next=null,lv(v,w.props,F,P),dv(v,w.children,P),yn(),uh(v),vn()},ge=(v,w,P,F,N,L,q,j,U=!1)=>{const M=v&&v.children,Y=v?v.shapeFlag:0,H=w.children,{patchFlag:J,shapeFlag:Z}=w;if(J>0){if(J&128){nr(M,H,P,F,N,L,q,j,U);return}else if(J&256){Ct(M,H,P,F,N,L,q,j,U);return}}Z&8?(Y&16&&sr(M,N,L),H!==M&&d(P,H)):Y&16?Z&16?nr(M,H,P,F,N,L,q,j,U):sr(M,N,L,!0):(Y&8&&d(P,""),Z&16&&m(H,P,F,N,L,q,j,U))},Ct=(v,w,P,F,N,L,q,j,U)=>{v=v||Kr,w=w||Kr;const M=v.length,Y=w.length,H=Math.min(M,Y);let J;for(J=0;J<H;J++){const Z=w[J]=U?un(w[J]):Ht(w[J]);O(v[J],Z,P,null,N,L,q,j,U)}M>Y?sr(v,N,L,!0,!1,H):m(w,P,F,N,L,q,j,U,H)},nr=(v,w,P,F,N,L,q,j,U)=>{let M=0;const Y=w.length;let H=v.length-1,J=Y-1;for(;M<=H&&M<=J;){const Z=v[M],ee=w[M]=U?un(w[M]):Ht(w[M]);if(Fs(Z,ee))O(Z,ee,P,null,N,L,q,j,U);else break;M++}for(;M<=H&&M<=J;){const Z=v[H],ee=w[J]=U?un(w[J]):Ht(w[J]);if(Fs(Z,ee))O(Z,ee,P,null,N,L,q,j,U);else break;H--,J--}if(M>H){if(M<=J){const Z=J+1,ee=Z<Y?w[Z].el:F;for(;M<=J;)O(null,w[M]=U?un(w[M]):Ht(w[M]),P,ee,N,L,q,j,U),M++}}else if(M>J)for(;M<=H;)ze(v[M],N,L,!0),M++;else{const Z=M,ee=M,ae=new Map;for(M=ee;M<=J;M++){const Qe=w[M]=U?un(w[M]):Ht(w[M]);Qe.key!=null&&ae.set(Qe.key,M)}let ve,Oe=0;const Ue=J-ee+1;let At=!1,tt=0;const Cn=new Array(Ue);for(M=0;M<Ue;M++)Cn[M]=0;for(M=Z;M<=H;M++){const Qe=v[M];if(Oe>=Ue){ze(Qe,N,L,!0);continue}let bt;if(Qe.key!=null)bt=ae.get(Qe.key);else for(ve=ee;ve<=J;ve++)if(Cn[ve-ee]===0&&Fs(Qe,w[ve])){bt=ve;break}bt===void 0?ze(Qe,N,L,!0):(Cn[bt-ee]=M+1,bt>=tt?tt=bt:At=!0,O(Qe,w[bt],P,null,N,L,q,j,U),Oe++)}const ws=At?_v(Cn):Kr;for(ve=ws.length-1,M=Ue-1;M>=0;M--){const Qe=ee+M,bt=w[Qe],xi=w[Qe+1],Or=Qe+1<Y?xi.el||Ap(xi):F;Cn[M]===0?O(null,bt,P,Or,N,L,q,j,U):At&&(ve<0||M!==ws[ve]?nn(bt,P,Or,2):ve--)}}},nn=(v,w,P,F,N=null)=>{const{el:L,type:q,transition:j,children:U,shapeFlag:M}=v;if(M&6){nn(v.component.subTree,w,P,F);return}if(M&128){v.suspense.move(w,P,F);return}if(M&64){q.move(v,w,P,Ut);return}if(q===Fe){r(L,w,P);for(let H=0;H<U.length;H++)nn(U[H],w,P,F);r(v.anchor,w,P);return}if(q===Za){G(v,w,P);return}if(F!==2&&M&1&&j)if(F===0)j.beforeEnter(L),r(L,w,P),_t(()=>j.enter(L),N);else{const{leave:H,delayLeave:J,afterLeave:Z}=j,ee=()=>{v.ctx.isUnmounted?s(L):r(L,w,P)},ae=()=>{L._isLeaving&&L[Oy](!0),H(L,()=>{ee(),Z&&Z()})};J?J(L,ee,ae):ae()}else r(L,w,P)},ze=(v,w,P,F=!1,N=!1)=>{const{type:L,props:q,ref:j,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:H,dirs:J,cacheIndex:Z,memo:ee}=v;if(H===-2&&(N=!1),j!=null&&(yn(),Qs(j,null,P,v,!0),vn()),Z!=null&&(w.renderCache[Z]=void 0),Y&256){w.ctx.deactivate(v);return}const ae=Y&1&&J,ve=!Jr(v);let Oe;if(ve&&(Oe=q&&q.onVnodeBeforeUnmount)&&Bt(Oe,w,v),Y&6)rr(v.component,P,F);else{if(Y&128){v.suspense.unmount(P,F);return}ae&&lr(v,null,w,"beforeUnmount"),Y&64?v.type.remove(v,w,P,Ut,F):M&&!M.hasOnce&&(L!==Fe||H>0&&H&64)?sr(M,w,P,!1,!0):(L===Fe&&H&384||!N&&Y&16)&&sr(U,w,P),F&&We(v)}const Ue=ee!=null&&Z==null;(ve&&(Oe=q&&q.onVnodeUnmounted)||ae||Ue)&&_t(()=>{Oe&&Bt(Oe,w,v),ae&&lr(v,null,w,"unmounted"),Ue&&(v.el=null)},P)},We=v=>{const{type:w,el:P,anchor:F,transition:N}=v;if(w===Fe){ka(P,F);return}if(w===Za){z(v);return}const L=()=>{s(P),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(v.shapeFlag&1&&N&&!N.persisted){const{leave:q,delayLeave:j}=N,U=()=>q(P,L);j?j(v.el,L,U):U()}else L()},ka=(v,w)=>{let P;for(;v!==w;)P=_(v),s(v),v=P;s(w)},rr=(v,w,P)=>{const{bum:F,scope:N,job:L,subTree:q,um:j,m:U,a:M}=v;Eh(U),Eh(M),F&&co(F),N.stop(),L&&(L.flags|=8,ze(q,v,w,P)),j&&_t(j,w),_t(()=>{v.isUnmounted=!0},w)},sr=(v,w,P,F=!1,N=!1,L=0)=>{for(let q=L;q<v.length;q++)ze(v[q],w,P,F,N)},rn=v=>{if(v.shapeFlag&6)return rn(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=_(v.anchor||v.el),P=w&&w[ky];return P?_(P):w};let Ts=!1;const Ni=(v,w,P)=>{let F;v==null?w._vnode&&(ze(w._vnode,null,null,!0),F=w._vnode.component):O(w._vnode||null,v,w,null,null,null,P),w._vnode=v,Ts||(Ts=!0,uh(F),Zd(),Ts=!1)},Ut={p:O,um:ze,m:nn,r:We,mt:ht,mc:m,pc:ge,pbc:T,n:rn,o:n};return{render:Ni,hydrate:void 0,createApp:ev(Ni)}}function Ya({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ur({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function mv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ip(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=un(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&Ip(a,c)),c.type===ua&&(c.patchFlag===-1&&(c=s[i]=un(c)),c.el=a.el),c.type===Tn&&!c.el&&(c.el=a.el)}}function _v(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function wp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:wp(e)}function Eh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ap(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ap(e.subTree):null}const bp=n=>n.__isSuspense;function yv(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):by(n)}const Fe=Symbol.for("v-fgt"),ua=Symbol.for("v-txt"),Tn=Symbol.for("v-cmt"),Za=Symbol.for("v-stc"),Xs=[];let Et=null;function pe(n=!1){Xs.push(Et=n?null:[])}function vv(){Xs.pop(),Et=Xs[Xs.length-1]||null}let li=1;function Th(n,e=!1){li+=n,n<0&&Et&&e&&(Et.hasOnce=!0)}function Sp(n){return n.dynamicChildren=li>0?Et||Kr:null,vv(),li>0&&Et&&Et.push(n),n}function Ve(n,e,t,r,s,i){return Sp(Ie(n,e,t,r,s,i,!0))}function Fn(n,e,t,r,s){return Sp(It(n,e,t,r,s,!0))}function _l(n){return n?n.__v_isVNode===!0:!1}function Fs(n,e){return n.type===e.type&&n.key===e.key}const Rp=({key:n})=>n??null,ho=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?He(n)||Me(n)||le(n)?{i:lt,r:n,k:e,f:!!t}:n:null);function Ie(n,e=null,t=null,r=0,s=null,i=n===Fe?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Rp(e),ref:e&&ho(e),scopeId:tp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return c?(yl(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=He(t)?8:16),li>0&&!a&&Et&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Et.push(l),l}const It=Ev;function Ev(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===Wy)&&(n=Tn),_l(n)){const c=rs(n,e,!0);return t&&yl(c,t),li>0&&!i&&Et&&(c.shapeFlag&6?Et[Et.indexOf(n)]=c:Et.push(c)),c.patchFlag=-2,c}if(Vv(n)&&(n=n.__vccOpts),e){e=Tv(e);let{class:c,style:l}=e;c&&!He(c)&&(e.class=il(c)),Ae(l)&&(oa(l)&&!re(l)&&(l=Ze({},l)),e.style=fs(l))}const a=He(n)?1:bp(n)?128:Dy(n)?64:Ae(n)?4:le(n)?2:0;return Ie(n,e,t,r,s,a,i,!0)}function Tv(n){return n?oa(n)||mp(n)?Ze({},n):n:null}function rs(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?Iv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Rp(h),ref:e&&e.ref?t&&i?re(i)?i.concat(ho(e)):[i,ho(e)]:ho(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Fe?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&rs(n.ssContent),ssFallback:n.ssFallback&&rs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&pl(d,l.clone(d)),d}function $r(n=" ",e=0){return It(ua,null,n,e)}function Vo(n="",e=!1){return e?(pe(),Fn(Tn,null,n)):It(Tn,null,n)}function Ht(n){return n==null||typeof n=="boolean"?It(Tn):re(n)?It(Fe,null,n.slice()):_l(n)?un(n):It(ua,null,String(n))}function un(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:rs(n)}function yl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),yl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!mp(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:lt},t=32):(e=String(e),r&64?(t=16,e=[$r(e)]):t=8);n.children=e,n.shapeFlag|=t}function Iv(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=il([e.class,r.class]));else if(s==="style")e.style=fs([e.style,r.style]);else if(Zo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!ea(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Bt(n,e,t,r=null){Zt(n,e,7,[t,r])}const wv=hp();let Av=0;function bv(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||wv,i={uid:Av++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yp(r,s),emitsOptions:fp(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nv.bind(null,i),n.ce&&n.ce(i),i}let gt=null;const Cp=()=>gt||lt;let ko,Sc;{const n=ra(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ko=e("__VUE_INSTANCE_SETTERS__",t=>gt=t),Sc=e("__VUE_SSR_SETTERS__",t=>ui=t)}const Ii=n=>{const e=gt;return ko(n),n.scope.on(),()=>{n.scope.off(),ko(e)}},Ih=()=>{gt&&gt.scope.off(),ko(null)};function Pp(n){return n.vnode.shapeFlag&4}let ui=!1;function Sv(n,e=!1,t=!1){e&&Sc(e);const{props:r,children:s}=n.vnode,i=Pp(n);cv(n,r,i,e),fv(n,s,t||e);const a=i?Rv(n,e):void 0;return e&&Sc(!1),a}function Rv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ky);const{setup:r}=t;if(r){yn();const s=n.setupContext=r.length>1?Pv(n):null,i=Ii(n),a=Ei(r,n,0,[n.props,s]),c=wd(a);if(vn(),i(),(c||n.sp)&&!Jr(n)&&sp(n),c){if(a.then(Ih,Ih),e)return a.then(l=>{wh(n,l)}).catch(l=>{aa(l,n,0)});n.asyncDep=a}else wh(n,a)}else Vp(n)}function wh(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ae(e)&&(n.setupState=Qd(e)),Vp(n)}function Vp(n,e,t){const r=n.type;n.render||(n.render=r.render||Wt);{const s=Ii(n);yn();try{Gy(n)}finally{vn(),s()}}}const Cv={get(n,e){return at(n,"get",""),n[e]}};function Pv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Cv),slots:n.slots,emit:n.emit,expose:e}}function ha(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Qd(fl(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Js)return Js[t](n)},has(e,t){return t in e||t in Js}})):n.proxy}function Vv(n){return le(n)&&"__vccOpts"in n}const vl=(n,e)=>Ey(n,e,ui),kv="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rc;const Ah=typeof window<"u"&&window.trustedTypes;if(Ah)try{Rc=Ah.createPolicy("vue",{createHTML:n=>n})}catch{}const kp=Rc?n=>Rc.createHTML(n):n=>n,Dv="http://www.w3.org/2000/svg",Ov="http://www.w3.org/1998/Math/MathML",ln=typeof document<"u"?document:null,bh=ln&&ln.createElement("template"),Nv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?ln.createElementNS(Dv,n):e==="mathml"?ln.createElementNS(Ov,n):t?ln.createElement(n,{is:t}):ln.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>ln.createTextNode(n),createComment:n=>ln.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ln.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{bh.innerHTML=kp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=bh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},xv=Symbol("_vtc");function Mv(n,e,t){const r=n[xv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Sh=Symbol("_vod"),Lv=Symbol("_vsh"),Fv=Symbol(""),Uv=/(?:^|;)\s*display\s*:/;function Bv(n,e,t){const r=n.style,s=He(t);let i=!1;if(t&&!s){if(e)if(He(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&fo(r,c,"")}else for(const a in e)t[a]==null&&fo(r,a,"");for(const a in t)a==="display"&&(i=!0),fo(r,a,t[a])}else if(s){if(e!==t){const a=r[Fv];a&&(t+=";"+a),r.cssText=t,i=Uv.test(t)}}else e&&n.removeAttribute("style");Sh in n&&(n[Sh]=i?r.display:"",n[Lv]&&(r.display="none"))}const Rh=/\s*!important$/;function fo(n,e,t){if(re(t))t.forEach(r=>fo(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=jv(n,e);Rh.test(t)?n.setProperty(Sr(r),t.replace(Rh,""),"important"):n[r]=t}}const Ch=["Webkit","Moz","ms"],ec={};function jv(n,e){const t=ec[e];if(t)return t;let r=Ot(e);if(r!=="filter"&&r in n)return ec[e]=r;r=Sd(r);for(let s=0;s<Ch.length;s++){const i=Ch[s]+r;if(i in n)return ec[e]=i}return e}const Ph="http://www.w3.org/1999/xlink";function Vh(n,e,t,r,s,i=H_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ph,e.slice(6,e.length)):n.setAttributeNS(Ph,e,t):t==null||i&&!Cd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":wt(t)?String(t):t)}function kh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?kp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Cd(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function dr(n,e,t,r){n.addEventListener(e,t,r)}function $v(n,e,t,r){n.removeEventListener(e,t,r)}const Dh=Symbol("_vei");function qv(n,e,t,r,s=null){const i=n[Dh]||(n[Dh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Hv(e);if(r){const h=i[e]=Kv(r,s);dr(n,c,h,l)}else a&&($v(n,c,a,l),i[e]=void 0)}}const Oh=/(?:Once|Passive|Capture)$/;function Hv(n){let e;if(Oh.test(n)){e={};let r;for(;r=n.match(Oh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Sr(n.slice(2)),e]}let tc=0;const zv=Promise.resolve(),Wv=()=>tc||(zv.then(()=>tc=0),tc=Date.now());function Kv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Zt(Gv(r,t.value),e,5,[r])};return t.value=n,t.attached=Wv(),t}function Gv(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Nh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Qv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Mv(n,r,a):e==="style"?Bv(n,t,r):Zo(e)?ea(e)||qv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jv(n,e,r,a))?(kh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vh(n,e,r,a,i,e!=="value")):n._isVueCE&&(Xv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!He(r)))?kh(n,Ot(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Vh(n,e,r,a))};function Jv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Nh(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Nh(e)&&He(t)?!1:e in n}function Xv(n,e){const t=n._def.props;if(!t)return!1;const r=Ot(e);return Array.isArray(t)?t.some(s=>Ot(s)===r):Object.keys(t).some(s=>Ot(s)===r)}const Do=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>co(e,t):e};function Yv(n){n.target.composing=!0}function xh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xr=Symbol("_assign");function Mh(n,e,t){return e&&(n=n.trim()),t&&(n=sl(n)),n}const Zv={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Xr]=Do(s);const i=r||s.props&&s.props.type==="number";dr(n,e?"change":"input",a=>{a.target.composing||n[Xr](Mh(n.value,t,i))}),(t||i)&&dr(n,"change",()=>{n.value=Mh(n.value,t,i)}),e||(dr(n,"compositionstart",Yv),dr(n,"compositionend",xh),dr(n,"change",xh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Xr]=Do(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?sl(n.value):n.value,l=e??"";if(c===l)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l)}},eo={created(n,{value:e},t){n.checked=ii(e,t.props.value),n[Xr]=Do(t),dr(n,"change",()=>{n[Xr](eE(n))})},beforeUpdate(n,{value:e,oldValue:t},r){n[Xr]=Do(r),e!==t&&(n.checked=ii(e,r.props.value))}};function eE(n){return"_value"in n?n._value:n.value}const tE=Ze({patchProp:Qv},Nv);let Lh;function nE(){return Lh||(Lh=pv(tE))}const rE=((...n)=>{const e=nE().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=iE(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,sE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function sE(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function iE(n){return He(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Dp;const fa=n=>Dp=n,Op=Symbol();function Cc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Ys;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Ys||(Ys={}));function oE(){const n=Dd(!0),e=n.run(()=>Gd({}));let t=[],r=[];const s=fl({install(i){fa(s),s._a=i,i.provide(Op,s),i.config.globalProperties.$pinia=s,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const Np=()=>{};function Fh(n,e,t,r=Np){n.add(e);const s=()=>{n.delete(e)&&r()};return!t&&Od()&&W_(s),s}function Ur(n,...e){n.forEach(t=>{t(...e)})}const aE=n=>n(),Uh=Symbol(),nc=Symbol();function Pc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];Cc(s)&&Cc(r)&&n.hasOwnProperty(t)&&!Me(r)&&!mn(r)?n[t]=Pc(s,r):n[t]=r}return n}const cE=Symbol();function lE(n){return!Cc(n)||!Object.prototype.hasOwnProperty.call(n,cE)}const{assign:xn}=Object;function uE(n){return!!(Me(n)&&n.effect)}function hE(n,e,t,r){const{state:s,actions:i,getters:a}=e,c=t.state.value[n];let l;function h(){c||(t.state.value[n]=s?s():{});const d=my(t.state.value[n]);return xn(d,i,Object.keys(a||{}).reduce((p,_)=>(p[_]=fl(vl(()=>{fa(t);const b=t._s.get(n);return a[_].call(b,b)})),p),{}))}return l=xp(n,h,e,t,r,!0),l}function xp(n,e,t={},r,s,i){let a;const c=xn({actions:{}},t),l={deep:!0};let h,d,p=new Set,_=new Set,b;const V=r.state.value[n];!i&&!V&&(r.state.value[n]={});let O;function x(m){let y;h=d=!1,typeof m=="function"?(m(r.state.value[n]),y={type:Ys.patchFunction,storeId:n,events:b}):(Pc(r.state.value[n],m),y={type:Ys.patchObject,payload:m,storeId:n,events:b});const T=O=Symbol();Xd().then(()=>{O===T&&(h=!0)}),d=!0,Ur(p,y,r.state.value[n])}const Q=i?function(){const{state:y}=t,T=y?y():{};this.$patch(A=>{xn(A,T)})}:Np;function $(){a.stop(),p.clear(),_.clear(),r._s.delete(n)}const G=(m,y="")=>{if(Uh in m)return m[nc]=y,m;const T=function(){fa(r);const A=Array.from(arguments),S=new Set,E=new Set;function ht(ce){S.add(ce)}function Ft(ce){E.add(ce)}Ur(_,{args:A,name:T[nc],store:oe,after:ht,onError:Ft});let De;try{De=m.apply(this&&this.$id===n?this:oe,A)}catch(ce){throw Ur(E,ce),ce}return De instanceof Promise?De.then(ce=>(Ur(S,ce),ce)).catch(ce=>(Ur(E,ce),Promise.reject(ce))):(Ur(S,De),De)};return T[Uh]=!0,T[nc]=y,T},z={_p:r,$id:n,$onAction:Fh.bind(null,_),$patch:x,$reset:Q,$subscribe(m,y={}){const T=Fh(p,m,y.detached,()=>A()),A=a.run(()=>lo(()=>r.state.value[n],S=>{(y.flush==="sync"?d:h)&&m({storeId:n,type:Ys.direct,events:b},S)},xn({},l,y)));return T},$dispose:$},oe=ia(z);r._s.set(n,oe);const I=(r._a&&r._a.runWithContext||aE)(()=>r._e.run(()=>(a=Dd()).run(()=>e({action:G}))));for(const m in I){const y=I[m];if(Me(y)&&!uE(y)||mn(y))i||(V&&lE(y)&&(Me(y)?y.value=V[m]:Pc(y,V[m])),r.state.value[n][m]=y);else if(typeof y=="function"){const T=G(y,m);I[m]=T,c.actions[m]=y}}return xn(oe,I),xn(_e(oe),I),Object.defineProperty(oe,"$state",{get:()=>r.state.value[n],set:m=>{x(y=>{xn(y,m)})}}),r._p.forEach(m=>{xn(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:c})))}),V&&i&&t.hydrate&&t.hydrate(oe.$state,V),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function fE(n,e,t){let r;const s=typeof e=="function";r=s?t:e;function i(a,c){const l=Ry();return a=a||(l?Gs(Op,null):null),a&&fa(a),a=Dp,a._s.has(n)||(s?xp(n,e,r,a):hE(n,r,a)),a._s.get(n)}return i.$id=n,i}function dE(n,e){if(n==null)return;let t=n;for(let r=0;r<e.length;r++){if(t===void 0||t[e[r]]===void 0)return;if(t===null||t[e[r]]===null)return null;t=t[e[r]]}return t}function El(n,e,t){if(t.length===0)return e;const r=t[0];return t.length>1&&(e=El(typeof n!="object"||n===null||!Object.prototype.hasOwnProperty.call(n,r)?Number.isInteger(Number(t[1]))?[]:{}:n[r],e,Array.prototype.slice.call(t,1))),Number.isInteger(Number(r))&&Array.isArray(n)?n.slice()[r]:Object.assign({},n,{[r]:e})}function Mp(n,e){if(n==null||e.length===0)return n;if(e.length===1){if(n==null)return n;if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.slice.call(n,0).splice(e[0],1);const t={};for(const r in n)t[r]=n[r];return delete t[e[0]],t}if(n[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.concat.call([],n);const t={};for(const r in n)t[r]=n[r];return t}return El(n,Mp(n[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function Lp(n,e){return e.map(t=>t.split(".")).map(t=>[t,dE(n,t)]).filter(t=>t[1]!==void 0).reduce((t,r)=>El(t,r[1],r[0]),{})}function Fp(n,e){return e.map(t=>t.split(".")).reduce((t,r)=>Mp(t,r),n)}function Bh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a,beforeHydrate:c,afterHydrate:l},h,d=!0){try{d&&(c==null||c(h));const p=e.getItem(r);if(p){const _=t.deserialize(p),b=i?Lp(_,i):_,V=a?Fp(b,a):b;n.$patch(V)}d&&(l==null||l(h))}catch(p){s&&console.error("[pinia-plugin-persistedstate]",p)}}function jh(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a}){try{const c=i?Lp(n,i):n,l=a?Fp(c,a):c,h=t.serialize(l);e.setItem(r,h)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function pE(n,e){return typeof n=="function"?n(e):typeof n=="string"?n:e}function gE(n,e,t){const{pinia:r,store:s,options:{persist:i=t}}=n;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{Bh(s,l,n,c)})},s.$persist=()=>{a.forEach(c=>{jh(s.$state,c)})},a.forEach(c=>{Bh(s,c,n),s.$subscribe((l,h)=>jh(h,c),{detached:!0})})}function mE(n={}){return function(e){gE(e,t=>{const r=pE(t.key,e.store.$id);return{key:(n.key?n.key:s=>s)(r),debug:t.debug??n.debug??!1,serializer:t.serializer??n.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:t.storage??n.storage??window.localStorage,beforeHydrate:t.beforeHydrate??n.beforeHydrate,afterHydrate:t.afterHydrate??n.afterHydrate,pick:t.pick,omit:t.omit}},n.auto??!1)}}var _E=mE();const Rr=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},yE={},vE={class:"carafe"};function EE(n,e){return pe(),Ve("div",vE,[uo(n.$slots,"top",{},void 0,!0),uo(n.$slots,"mid",{},void 0,!0),uo(n.$slots,"bottom",{},void 0,!0)])}const TE=Rr(yE,[["render",EE],["__scopeId","data-v-8709b092"]]),IE={},wE={class:"mug"};function AE(n,e){return pe(),Ve("div",wE,[uo(n.$slots,"default")])}const bE=Rr(IE,[["render",AE]]),$h=["Hot","Cold"],SE=()=>{};var qh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},RE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(_=64)),r.push(t[d],t[p],t[_],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Up(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):RE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new CE;const _=i<<2|c>>4;if(r.push(_),h!==64){const b=c<<4&240|h>>2;if(r.push(b),p!==64){const V=h<<6&192|p;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class CE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PE=function(n){const e=Up(n);return Bp.encodeByteArray(e,!0)},Oo=function(n){return PE(n).replace(/\./g,"")},jp=function(n){try{return Bp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function VE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kE=()=>VE().__FIREBASE_DEFAULTS__,DE=()=>{if(typeof process>"u"||typeof qh>"u")return;const n=qh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},OE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jp(n[1]);return e&&JSON.parse(e)},da=()=>{try{return SE()||kE()||DE()||OE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},$p=n=>{var e,t;return(t=(e=da())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},NE=n=>{const e=$p(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},qp=()=>{var n;return(n=da())===null||n===void 0?void 0:n.config},Hp=n=>{var e;return(e=da())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ds(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zp(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function ME(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Oo(JSON.stringify(t)),Oo(JSON.stringify(a)),""].join(".")}const Zs={};function LE(){const n={prod:[],emulator:[]};for(const e of Object.keys(Zs))Zs[e]?n.emulator.push(e):n.prod.push(e);return n}function FE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Hh=!1;function Wp(n,e){if(typeof window>"u"||typeof document>"u"||!ds(window.location.host)||Zs[n]===e||Zs[n]||Hh)return;Zs[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=LE().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,b){_.setAttribute("width","24"),_.setAttribute("id",b),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Hh=!0,a()},_}function d(_,b){_.setAttribute("id",b),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=FE(r),b=t("text"),V=document.getElementById(b)||document.createElement("span"),O=t("learnmore"),x=document.getElementById(O)||document.createElement("a"),Q=t("preprendIcon"),$=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const G=_.element;c(G),d(x,O);const z=h();l($,Q),G.append($,V,x,z),document.body.appendChild(G)}i?(V.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function BE(){var n;const e=(n=da())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $E(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function qE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HE(){const n=ut();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zE(){return!BE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function WE(){try{return typeof indexedDB=="object"}catch{return!1}}function KE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="FirebaseError";class Rn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=GE,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?QE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Rn(s,c,r)}}function QE(n,e){return n.replace(JE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const JE=/\{\$([^}]+)}/g;function XE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(zh(i)&&zh(a)){if(!Tr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function zh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function YE(n,e){const t=new ZE(n,e);return t.subscribe.bind(t)}class ZE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");eT(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=rc),s.error===void 0&&(s.error=rc),s.complete===void 0&&(s.complete=rc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function rc(){}/**
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
 */function mt(n){return n&&n._delegate?n._delegate:n}class Ir{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fr="[DEFAULT]";/**
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
 */class tT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new xE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rT(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nT(n){return n===fr?void 0:n}function rT(n){return n.instantiationMode==="EAGER"}/**
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
 */class sT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new tT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const iT={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},oT=he.INFO,aT={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},cT=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=aT[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tl{constructor(e){this.name=e,this._logLevel=oT,this._logHandler=cT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const lT=(n,e)=>e.some(t=>n instanceof t);let Wh,Kh;function uT(){return Wh||(Wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hT(){return Kh||(Kh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kp=new WeakMap,Vc=new WeakMap,Gp=new WeakMap,sc=new WeakMap,Il=new WeakMap;function fT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(qn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Kp.set(t,n)}).catch(()=>{}),Il.set(e,n),e}function dT(n){if(Vc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Vc.set(n,e)}let kc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Gp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pT(n){kc=n(kc)}function gT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ic(this),e,...t);return Gp.set(r,e.sort?e.sort():[e]),qn(r)}:hT().includes(n)?function(...e){return n.apply(ic(this),e),qn(Kp.get(this))}:function(...e){return qn(n.apply(ic(this),e))}}function mT(n){return typeof n=="function"?gT(n):(n instanceof IDBTransaction&&dT(n),lT(n,uT())?new Proxy(n,kc):n)}function qn(n){if(n instanceof IDBRequest)return fT(n);if(sc.has(n))return sc.get(n);const e=mT(n);return e!==n&&(sc.set(n,e),Il.set(e,n)),e}const ic=n=>Il.get(n);function _T(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=qn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(qn(a.result),l.oldVersion,l.newVersion,qn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const yT=["get","getKey","getAll","getAllKeys","count"],vT=["put","add","delete","clear"],oc=new Map;function Gh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(oc.get(e))return oc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=vT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yT.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return oc.set(e,i),i}pT(n=>({...n,get:(e,t,r)=>Gh(e,t)||n.get(e,t,r),has:(e,t)=>!!Gh(e,t)||n.has(e,t)}));/**
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
 */class ET{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(TT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function TT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dc="@firebase/app",Qh="0.13.2";/**
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
 */const In=new Tl("@firebase/app"),IT="@firebase/app-compat",wT="@firebase/analytics-compat",AT="@firebase/analytics",bT="@firebase/app-check-compat",ST="@firebase/app-check",RT="@firebase/auth",CT="@firebase/auth-compat",PT="@firebase/database",VT="@firebase/data-connect",kT="@firebase/database-compat",DT="@firebase/functions",OT="@firebase/functions-compat",NT="@firebase/installations",xT="@firebase/installations-compat",MT="@firebase/messaging",LT="@firebase/messaging-compat",FT="@firebase/performance",UT="@firebase/performance-compat",BT="@firebase/remote-config",jT="@firebase/remote-config-compat",$T="@firebase/storage",qT="@firebase/storage-compat",HT="@firebase/firestore",zT="@firebase/ai",WT="@firebase/firestore-compat",KT="firebase",GT="11.10.0";/**
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
 */const Oc="[DEFAULT]",QT={[Dc]:"fire-core",[IT]:"fire-core-compat",[AT]:"fire-analytics",[wT]:"fire-analytics-compat",[ST]:"fire-app-check",[bT]:"fire-app-check-compat",[RT]:"fire-auth",[CT]:"fire-auth-compat",[PT]:"fire-rtdb",[VT]:"fire-data-connect",[kT]:"fire-rtdb-compat",[DT]:"fire-fn",[OT]:"fire-fn-compat",[NT]:"fire-iid",[xT]:"fire-iid-compat",[MT]:"fire-fcm",[LT]:"fire-fcm-compat",[FT]:"fire-perf",[UT]:"fire-perf-compat",[BT]:"fire-rc",[jT]:"fire-rc-compat",[$T]:"fire-gcs",[qT]:"fire-gcs-compat",[HT]:"fire-fst",[WT]:"fire-fst-compat",[zT]:"fire-vertex","fire-js":"fire-js",[KT]:"fire-js-all"};/**
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
 */const No=new Map,JT=new Map,Nc=new Map;function Jh(n,e){try{n.container.addComponent(e)}catch(t){In.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ss(n){const e=n.name;if(Nc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Nc.set(e,n);for(const t of No.values())Jh(t,n);for(const t of JT.values())Jh(t,n);return!0}function wl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const XT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hn=new wi("app","Firebase",XT);/**
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
 */class YT{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=GT;function Qp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Hn.create("bad-app-name",{appName:String(s)});if(t||(t=qp()),!t)throw Hn.create("no-options");const i=No.get(s);if(i){if(Tr(t,i.options)&&Tr(r,i.config))return i;throw Hn.create("duplicate-app",{appName:s})}const a=new sT(s);for(const l of Nc.values())a.addComponent(l);const c=new YT(t,r,a);return No.set(s,c),c}function Jp(n=Oc){const e=No.get(n);if(!e&&n===Oc&&qp())return Qp();if(!e)throw Hn.create("no-app",{appName:n});return e}function zn(n,e,t){var r;let s=(r=QT[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(c.join(" "));return}ss(new Ir(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ZT="firebase-heartbeat-database",eI=1,hi="firebase-heartbeat-store";let ac=null;function Xp(){return ac||(ac=_T(ZT,eI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Hn.create("idb-open",{originalErrorMessage:n.message})})),ac}async function tI(n){try{const t=(await Xp()).transaction(hi),r=await t.objectStore(hi).get(Yp(n));return await t.done,r}catch(e){if(e instanceof Rn)In.warn(e.message);else{const t=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(t.message)}}}async function Xh(n,e){try{const r=(await Xp()).transaction(hi,"readwrite");await r.objectStore(hi).put(e,Yp(n)),await r.done}catch(t){if(t instanceof Rn)In.warn(t.message);else{const r=Hn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});In.warn(r.message)}}}function Yp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const nI=1024,rI=30;class sI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>rI){const a=aI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){In.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yh(),{heartbeatsToSend:r,unsentEntries:s}=iI(this._heartbeatsCache.heartbeats),i=Oo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return In.warn(t),""}}}function Yh(){return new Date().toISOString().substring(0,10)}function iI(n,e=nI){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Zh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Zh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class oI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WE()?KE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zh(n){return Oo(JSON.stringify({version:2,heartbeats:n})).length}function aI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function cI(n){ss(new Ir("platform-logger",e=>new ET(e),"PRIVATE")),ss(new Ir("heartbeat",e=>new sI(e),"PRIVATE")),zn(Dc,Qh,n),zn(Dc,Qh,"esm2017"),zn("fire-js","")}cI("");var ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wn,Zp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,m){function y(){}y.prototype=m.prototype,I.D=m.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,A,S){for(var E=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)E[ht-2]=arguments[ht];return m.prototype[A].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,m,y){y||(y=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(A=0;16>A;++A)T[A]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=I.g[0],y=I.g[1],A=I.g[2];var S=I.g[3],E=m+(S^y&(A^S))+T[0]+3614090360&4294967295;m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[2]+606105819&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[3]+3250441966&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[4]+4118548399&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[6]+2821735955&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[7]+4249261313&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[8]+1770035416&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[10]+4294925233&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[11]+2304563134&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(S^y&(A^S))+T[12]+1804603682&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(A^m&(y^A))+T[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=A+(y^S&(m^y))+T[14]+2792965006&4294967295,A=S+(E<<17&4294967295|E>>>15),E=y+(m^A&(S^m))+T[15]+1236535329&4294967295,y=A+(E<<22&4294967295|E>>>10),E=m+(A^S&(y^A))+T[1]+4129170786&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[11]+643717713&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[0]+3921069994&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[5]+3593408605&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[15]+3634488961&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[4]+3889429448&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[9]+568446438&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[3]+4107603335&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[8]+1163531501&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(A^S&(y^A))+T[13]+2850285829&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^A&(m^y))+T[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=A+(m^y&(S^m))+T[7]+1735328473&4294967295,A=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(A^S))+T[12]+2368359562&4294967295,y=A+(E<<20&4294967295|E>>>12),E=m+(y^A^S)+T[5]+4294588738&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[11]+1839030562&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[14]+4259657740&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[1]+2763975236&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[7]+4139469664&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[10]+3200236656&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[13]+681279174&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[3]+3572445317&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[6]+76029189&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(y^A^S)+T[9]+3654602809&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^A)+T[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=A+(S^m^y)+T[15]+530742520&4294967295,A=S+(E<<16&4294967295|E>>>16),E=y+(A^S^m)+T[2]+3299628645&4294967295,y=A+(E<<23&4294967295|E>>>9),E=m+(A^(y|~S))+T[0]+4096336452&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[14]+2878612391&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[5]+4237533241&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[12]+1700485571&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[10]+4293915773&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[1]+2240044497&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[8]+1873313359&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[6]+2734768916&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[13]+1309151649&4294967295,y=A+(E<<21&4294967295|E>>>11),E=m+(A^(y|~S))+T[4]+4149444226&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~A))+T[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=A+(m^(S|~y))+T[2]+718787259&4294967295,A=S+(E<<15&4294967295|E>>>17),E=y+(S^(A|~m))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+m&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,m){m===void 0&&(m=I.length);for(var y=m-this.blockSize,T=this.B,A=this.h,S=0;S<m;){if(A==0)for(;S<=y;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<m;)if(T[A++]=I.charCodeAt(S++),A==this.blockSize){s(this,T),A=0;break}}else for(;S<m;)if(T[A++]=I[S++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var m=1;m<I.length-8;++m)I[m]=0;var y=8*this.o;for(m=I.length-8;m<I.length;++m)I[m]=y&255,y/=256;for(this.u(I),I=Array(16),m=y=0;4>m;++m)for(var T=0;32>T;T+=8)I[y++]=this.g[m]>>>T&255;return I};function i(I,m){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=m(I)}function a(I,m){this.h=m;for(var y=[],T=!0,A=I.length-1;0<=A;A--){var S=I[A]|0;T&&S==m||(y[A]=S,T=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?i(I,function(m){return new a([m|0],0>m?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return x(h(-I));for(var m=[],y=1,T=0;I>=y;T++)m[T]=I/y|0,y*=4294967296;return new a(m,0)}function d(I,m){if(I.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(I.charAt(0)=="-")return x(d(I.substring(1),m));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),T=p,A=0;A<I.length;A+=8){var S=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+S),m);8>S?(S=h(Math.pow(m,S)),T=T.j(S).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var p=l(0),_=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(O(this))return-x(this).m();for(var I=0,m=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*m,m*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(O(this))return"-"+x(this).toString(I);for(var m=h(Math.pow(I,6)),y=this,T="";;){var A=z(y,m).g;y=Q(y,A.j(m));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=A,V(y))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var m=0;m<I.g.length;m++)if(I.g[m]!=0)return!1;return!0}function O(I){return I.h==-1}n.l=function(I){return I=Q(this,I),O(I)?-1:V(I)?0:1};function x(I){for(var m=I.g.length,y=[],T=0;T<m;T++)y[T]=~I.g[T];return new a(y,~I.h).add(_)}n.abs=function(){return O(this)?x(this):this},n.add=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0,A=0;A<=m;A++){var S=T+(this.i(A)&65535)+(I.i(A)&65535),E=(S>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=E>>>16,S&=65535,E&=65535,y[A]=E<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function Q(I,m){return I.add(x(m))}n.j=function(I){if(V(this)||V(I))return p;if(O(this))return O(I)?x(this).j(x(I)):x(x(this).j(I));if(O(I))return x(this.j(x(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var m=this.g.length+I.g.length,y=[],T=0;T<2*m;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var S=this.i(T)>>>16,E=this.i(T)&65535,ht=I.i(A)>>>16,Ft=I.i(A)&65535;y[2*T+2*A]+=E*Ft,$(y,2*T+2*A),y[2*T+2*A+1]+=S*Ft,$(y,2*T+2*A+1),y[2*T+2*A+1]+=E*ht,$(y,2*T+2*A+1),y[2*T+2*A+2]+=S*ht,$(y,2*T+2*A+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function $(I,m){for(;(I[m]&65535)!=I[m];)I[m+1]+=I[m]>>>16,I[m]&=65535,m++}function G(I,m){this.g=I,this.h=m}function z(I,m){if(V(m))throw Error("division by zero");if(V(I))return new G(p,p);if(O(I))return m=z(x(I),m),new G(x(m.g),x(m.h));if(O(m))return m=z(I,x(m)),new G(x(m.g),m.h);if(30<I.g.length){if(O(I)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=m;0>=T.l(I);)y=oe(y),T=oe(T);var A=ye(y,1),S=ye(T,1);for(T=ye(T,2),y=ye(y,2);!V(T);){var E=S.add(T);0>=E.l(I)&&(A=A.add(y),S=E),T=ye(T,1),y=ye(y,1)}return m=Q(I,A.j(m)),new G(A,m)}for(A=p;0<=I.l(m);){for(y=Math.max(1,Math.floor(I.m()/m.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(y),E=S.j(m);O(E)||0<E.l(I);)y-=T,S=h(y),E=S.j(m);V(S)&&(S=_),A=A.add(S),I=Q(I,E)}return new G(A,I)}n.A=function(I){return z(this,I).h},n.and=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},n.or=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},n.xor=function(I){for(var m=Math.max(this.g.length,I.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function oe(I){for(var m=I.g.length+1,y=[],T=0;T<m;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function ye(I,m){var y=m>>5;m%=32;for(var T=I.g.length-y,A=[],S=0;S<T;S++)A[S]=0<m?I.i(S+y)>>>m|I.i(S+y+1)<<32-m:I.i(S+y);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Zp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Wn=a}).apply(typeof ef<"u"?ef:typeof self<"u"?self:typeof window<"u"?window:{});var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eg,js,tg,po,xc,ng,rg,sg;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof to=="object"&&to];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var R=o[g];if(!(R in f))break e;f=f[R]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,R={next:function(){if(!g&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,g),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,R,C){for(var B=Array(arguments.length-2),be=2;be<arguments.length;be++)B[be-2]=arguments[be];return u.prototype[R].apply(g,B)}}function O(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function x(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const R=o.length||0,C=g.length||0;o.length=R+C;for(let B=0;B<C;B++)o[R+B]=g[B]}else o.push(g)}}class Q{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var oe=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ye(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,g;for(let R=1;R<arguments.length;R++){g=arguments[R];for(f in g)o[f]=g[f];for(let C=0;C<y.length;C++)f=y[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Ct;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,f){const g=Ft.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ft=new Q(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,ge=!1,Ct=new ht,nr=()=>{const o=c.Promise.resolve(void 0);ce=()=>{o.then(nn)}};var nn=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Ft;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ge=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var ka=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function rr(o,u){if(We.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{z(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:sr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&rr.aa.h.call(this)}}V(rr,We);var sr={2:"touch",3:"pen",4:"mouse"};rr.prototype.h=function(){rr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),Ts=0;function Ni(o,u,f,g,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=R,this.key=++Ts,this.da=this.fa=!1}function Ut(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Is(o){this.src=o,this.g={},this.h=0}Is.prototype.add=function(o,u,f,g,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var B=w(o,u,g,R);return-1<B?(u=o[B],f||(u.fa=!1)):(u=new Ni(u,this.src,C,!!g,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var g=o.g[f],R=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(g,R,1),C&&(Ut(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function w(o,u,f,g){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return R}return-1}var P="closure_lm_"+(1e6*Math.random()|0),F={};function N(o,u,f,g,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)N(o,u[C],f,g,R);return null}return f=Z(f),o&&o[rn]?o.K(u,f,h(g)?!!g.capture:!1,R):L(o,u,f,!1,g,R)}function L(o,u,f,g,R,C){if(!u)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,be=H(o);if(be||(o[P]=be=new Is(o)),f=be.add(u,f,g,B,C),f.proxy)return f;if(g=q(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)ka||(R=B),R===void 0&&(R=!1),o.addEventListener(u.toString(),g,R);else if(o.attachEvent)o.attachEvent(M(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function o(f){return u.call(o.src,o.listener,f)}const u=Y;return o}function j(o,u,f,g,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)j(o,u[C],f,g,R);else g=h(g)?!!g.capture:!!g,f=Z(f),o&&o[rn]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=w(C,f,g,R),-1<f&&(Ut(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=H(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,f,g,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[rn])v(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(M(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=H(u))?(v(f,o),f.h==0&&(f.src=null,u[P]=null)):Ut(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function Y(o,u){if(o.da)o=!0;else{u=new rr(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&U(o),o=f.call(g,u)}return o}function H(o){return o=o[P],o instanceof Is?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function ee(){ze.call(this),this.i=new Is(this),this.M=this,this.F=null}V(ee,ze),ee.prototype[rn]=!0,ee.prototype.removeEventListener=function(o,u,f,g){j(this,o,u,f,g)};function ae(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new We(u,o);else if(u instanceof We)u.target=u.target||o;else{var R=u;u=new We(g,o),T(u,R)}if(R=!0,f)for(var C=f.length-1;0<=C;C--){var B=u.g=f[C];R=ve(B,g,!0,u)&&R}if(B=u.g=o,R=ve(B,g,!0,u)&&R,R=ve(B,g,!1,u)&&R,f)for(C=0;C<f.length;C++)B=u.g=f[C],R=ve(B,g,!1,u)&&R}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Ut(f[g]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},ee.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function ve(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var B=u[C];if(B&&!B.da&&B.capture==f){var be=B.listener,Je=B.ha||B.src;B.fa&&v(o.i,B),R=be.call(Je,g)!==!1&&R}}return R&&!g.defaultPrevented}function Oe(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ue(o){o.g=Oe(()=>{o.g=null,o.i&&(o.i=!1,Ue(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class At extends ze{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(o){ze.call(this),this.h=o,this.g={}}V(tt,ze);var Cn=[];function ws(o){ye(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}tt.prototype.N=function(){tt.aa.N.call(this),ws(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,bt=c.JSON.parse,xi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Or(){}Or.prototype.h=null;function gu(o){return o.h||(o.h=o.i())}function mu(){}var As={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Da(){We.call(this,"d")}V(Da,We);function Oa(){We.call(this,"c")}V(Oa,We);var ir={},_u=null;function Mi(){return _u=_u||new ee}ir.La="serverreachability";function yu(o){We.call(this,ir.La,o)}V(yu,We);function bs(o){const u=Mi();ae(u,new yu(u))}ir.STAT_EVENT="statevent";function vu(o,u){We.call(this,ir.STAT_EVENT,o),this.stat=u}V(vu,We);function ft(o){const u=Mi();ae(u,new vu(u,o))}ir.Ma="timingevent";function Eu(o,u){We.call(this,ir.Ma,o),this.size=u}V(Eu,We);function Ss(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Rs(){this.g=!0}Rs.prototype.xa=function(){this.g=!1};function f_(o,u,f,g,R,C){o.info(function(){if(o.g)if(C)for(var B="",be=C.split("&"),Je=0;Je<be.length;Je++){var me=be[Je].split("=");if(1<me.length){var nt=me[0];me=me[1];var rt=nt.split("_");B=2<=rt.length&&rt[1]=="type"?B+(nt+"="+me+"&"):B+(nt+"=redacted&")}}else B=null;else B=C;return"XMLHTTP REQ ("+g+") [attempt "+R+"]: "+u+`
`+f+`
`+B})}function d_(o,u,f,g,R,C,B){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+B})}function Nr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+g_(o,f)+(g?" "+g:"")})}function p_(o,u){o.info(function(){return"TIMEOUT: "+u})}Rs.prototype.info=function(){};function g_(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var R=g[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Qe(f)}catch{return u}}var Li={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Na;function Fi(){}V(Fi,Or),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},Na=new Fi;function Pn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Iu}function Iu(){this.i=null,this.g="",this.h=!1}var wu={},xa={};function Ma(o,u,f){o.L=1,o.v=$i(sn(u)),o.m=f,o.P=!0,Au(o,null)}function Au(o,u){o.F=Date.now(),Ui(o),o.A=sn(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Fu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Iu,o.g=nh(o.j,f?u:null,!o.m),0<o.O&&(o.M=new At(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Cn[0]=R.toString()),R=Cn);for(var C=0;C<R.length;C++){var B=N(f,R[C],g||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),bs(),f_(o.i,o.u,o.A,o.l,o.R,o.m)}Pn.prototype.ca=function(o){o=o.target;const u=this.M;u&&on(o)==3?u.j():this.Y(o)},Pn.prototype.Y=function(o){try{if(o==this.g)e:{const rt=on(this.g);var u=this.g.Ba();const Lr=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||zu(this.g)))){this.J||rt!=4||u==7||(u==8||0>=Lr?bs(3):bs(2)),La(this);var f=this.g.Z();this.X=f;t:if(bu(this)){var g=zu(this.g);o="";var R=g.length,C=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Cs(this);var B="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==R-1)});g.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,d_(this.i,this.u,this.A,this.l,this.R,rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var be,Je=this.g;if((be=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(be)){var me=be;break t}}me=null}if(f=me)Nr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fa(this,f);else{this.o=!1,this.s=3,ft(12),or(this),Cs(this);break e}}if(this.P){f=!0;let Pt;for(;!this.J&&this.C<B.length;)if(Pt=m_(this,B),Pt==xa){rt==4&&(this.s=4,ft(14),f=!1),Nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==wu){this.s=4,ft(15),Nr(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Nr(this.i,this.l,Pt,null),Fa(this,Pt);if(bu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||B.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)Nr(this.i,this.l,B,"[Invalid Chunked Response]"),or(this),Cs(this);else if(0<B.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ha(nt),nt.M=!0,ft(11))}}else Nr(this.i,this.l,B,null),Fa(this,B);rt==4&&or(this),this.o&&!this.J&&(rt==4?Yu(this.j,this):(this.o=!1,Ui(this)))}else O_(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),or(this),Cs(this)}}}catch{}finally{}};function bu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function m_(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?xa:(f=Number(u.substring(f,g)),isNaN(f)?wu:(g+=1,g+f>u.length?xa:(u=u.slice(g,g+f),o.C=g+f,u)))}Pn.prototype.cancel=function(){this.J=!0,or(this)};function Ui(o){o.S=Date.now()+o.I,Su(o,o.I)}function Su(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ss(_(o.ba,o),u)}function La(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Pn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(p_(this.i,this.A),this.L!=2&&(bs(),ft(17)),or(this),this.s=2,Cs(this)):Su(this,this.S-o)};function Cs(o){o.j.G==0||o.J||Yu(o.j,o)}function or(o){La(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ws(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Fa(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ua(f.h,o))){if(!o.K&&Ua(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var R=g;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Gi(f),Wi(f);else break e;qa(f),ft(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ss(_(f.Za,f),6e3));if(1>=Pu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else cr(f,11)}else if((o.K||f.g==o)&&Gi(f),!$(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let me=R[u];if(f.T=me[0],me=me[1],f.G==2)if(me[0]=="c"){f.K=me[1],f.ia=me[2];const nt=me[3];nt!=null&&(f.la=nt,f.j.info("VER="+f.la));const rt=me[4];rt!=null&&(f.Aa=rt,f.j.info("SVER="+f.Aa));const Lr=me[5];Lr!=null&&typeof Lr=="number"&&0<Lr&&(g=1.5*Lr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Pt=o.g;if(Pt){const Ji=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var C=g.h;C.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ba(C,C.h),C.h=null))}if(g.D){const za=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;za&&(g.ya=za,Pe(g.I,g.D,za))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var B=o;if(g.qa=th(g,g.J?g.ia:null,g.W),B.K){Vu(g.h,B);var be=B,Je=g.L;Je&&(be.I=Je),be.B&&(La(be),Ui(be)),g.g=B}else Ju(g);0<f.i.length&&Ki(f)}else me[0]!="stop"&&me[0]!="close"||cr(f,7);else f.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?cr(f,7):$a(f):me[0]!="noop"&&f.l&&f.l.ta(me),f.v=0)}}bs(4)}catch{}}var __=class{constructor(o,u){this.g=o,this.map=u}};function Ru(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Pu(o){return o.h?1:o.g?o.g.size:0}function Ua(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ba(o,u){o.g?o.g.add(u):o.h=u}function Vu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ru.prototype.cancel=function(){if(this.i=ku(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ku(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return O(o.i)}function y_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function v_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Du(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=v_(o),g=y_(o),R=g.length,C=0;C<R;C++)u.call(void 0,g[C],f&&f[C],o)}var Ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function E_(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),R=null;if(0<=g){var C=o[f].substring(0,g);R=o[f].substring(g+1)}else C=o[f];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ar(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ar){this.h=o.h,Bi(this,o.j),this.o=o.o,this.g=o.g,ji(this,o.s),this.l=o.l;var u=o.i,f=new ks;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Nu(this,f),this.m=o.m}else o&&(u=String(o).match(Ou))?(this.h=!1,Bi(this,u[1]||"",!0),this.o=Ps(u[2]||""),this.g=Ps(u[3]||"",!0),ji(this,u[4]),this.l=Ps(u[5]||"",!0),Nu(this,u[6]||"",!0),this.m=Ps(u[7]||"")):(this.h=!1,this.i=new ks(null,this.h))}ar.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Vs(u,xu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Vs(u,xu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Vs(f,f.charAt(0)=="/"?w_:I_,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Vs(f,b_)),o.join("")};function sn(o){return new ar(o)}function Bi(o,u,f){o.j=f?Ps(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ji(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Nu(o,u,f){u instanceof ks?(o.i=u,S_(o.i,o.h)):(f||(u=Vs(u,A_)),o.i=new ks(u,o.h))}function Pe(o,u,f){o.i.set(u,f)}function $i(o){return Pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ps(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Vs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,T_),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function T_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var xu=/[#\/\?@]/g,I_=/[#\?:]/g,w_=/[#\?]/g,A_=/[#\?@]/g,b_=/#/g;function ks(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Vn(o){o.g||(o.g=new Map,o.h=0,o.i&&E_(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=ks.prototype,n.add=function(o,u){Vn(this),this.i=null,o=xr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Mu(o,u){Vn(o),u=xr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Lu(o,u){return Vn(o),u=xr(o,u),o.g.has(u)}n.forEach=function(o,u){Vn(this),this.g.forEach(function(f,g){f.forEach(function(R){o.call(u,R,g,this)},this)},this)},n.na=function(){Vn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const R=o[g];for(let C=0;C<R.length;C++)f.push(u[g])}return f},n.V=function(o){Vn(this);let u=[];if(typeof o=="string")Lu(this,o)&&(u=u.concat(this.g.get(xr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return Vn(this),this.i=null,o=xr(this,o),Lu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Fu(o,u,f){Mu(o,u),0<f.length&&(o.i=null,o.g.set(xr(o,u),O(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const C=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var R=C;B[g]!==""&&(R+="="+encodeURIComponent(String(B[g]))),o.push(R)}}return this.i=o.join("&")};function xr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function S_(o,u){u&&!o.j&&(Vn(o),o.i=null,o.g.forEach(function(f,g){var R=g.toLowerCase();g!=R&&(Mu(this,g),Fu(this,R,f))},o)),o.j=u}function R_(o,u){const f=new Rs;if(c.Image){const g=new Image;g.onload=b(kn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=b(kn,f,"TestLoadImage: error",!1,u,g),g.onabort=b(kn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=b(kn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function C_(o,u){const f=new Rs,g=new AbortController,R=setTimeout(()=>{g.abort(),kn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(R),C.ok?kn(f,"TestPingServer: ok",!0,u):kn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),kn(f,"TestPingServer: error",!1,u)})}function kn(o,u,f,g,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),g(f)}catch{}}function P_(){this.g=new xi}function V_(o,u,f){const g=f||"";try{Du(o,function(R,C){let B=R;h(R)&&(B=Qe(R)),u.push(g+C+"="+encodeURIComponent(B))})}catch(R){throw u.push(g+"type="+encodeURIComponent("_badmap")),R}}function qi(o){this.l=o.Ub||null,this.j=o.eb||!1}V(qi,Or),qi.prototype.g=function(){return new Hi(this.l,this.j)},qi.prototype.i=(function(o){return function(){return o}})({});function Hi(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Hi,ee),n=Hi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Os(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ds(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Uu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Uu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Ds(this):Os(this),this.readyState==3&&Uu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Ds(this))},n.Qa=function(o){this.g&&(this.response=o,Ds(this))},n.ga=function(){this.g&&Ds(this)};function Ds(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Os(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Os(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Bu(o){let u="";return ye(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function ja(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Bu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Pe(o,u,f))}function xe(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(xe,ee);var k_=/^https?$/i,D_=["POST","PUT"];n=xe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Na.g(),this.v=this.o?gu(this.o):gu(Na),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){ju(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var R in g)f.set(R,g[R]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(D_,u,void 0))||g||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,B]of f)this.g.setRequestHeader(C,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){ju(this,C)}};function ju(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,$u(o),zi(o)}function $u(o){o.A||(o.A=!0,ae(o,"complete"),ae(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ae(this,"complete"),ae(this,"abort"),zi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zi(this,!0)),xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?qu(this):this.bb())},n.bb=function(){qu(this)};function qu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||on(o)!=4||o.Z()!=2)){if(o.u&&on(o)==4)Oe(o.Ea,0,o);else if(ae(o,"readystatechange"),on(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=B===0){var R=String(o.D).match(Ou)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),g=!k_.test(R?R.toLowerCase():"")}f=g}if(f)ae(o,"complete"),ae(o,"success");else{o.m=6;try{var C=2<on(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",$u(o)}}finally{zi(o)}}}}function zi(o,u){if(o.g){Hu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ae(o,"ready");try{f.onreadystatechange=g}catch{}}}function Hu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function on(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),bt(u)}};function zu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function O_(o){const u={};o=(o.g&&2<=on(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if($(o[g]))continue;var f=A(o[g]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}I(u,function(g){return g.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Wu(o){this.Aa=0,this.i=[],this.j=new Rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ns("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ns("baseRetryDelayMs",5e3,o),this.cb=Ns("retryDelaySeedMs",1e4,o),this.Wa=Ns("forwardChannelMaxRetries",2,o),this.wa=Ns("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ru(o&&o.concurrentRequestLimit),this.Da=new P_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Wu.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,g){ft(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=th(this,null,this.W),Ki(this)};function $a(o){if(Ku(o),o.G==3){var u=o.U++,f=sn(o.I);if(Pe(f,"SID",o.K),Pe(f,"RID",u),Pe(f,"TYPE","terminate"),xs(o,f),u=new Pn(o,o.j,u),u.L=2,u.v=$i(sn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=nh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ui(u)}eh(o)}function Wi(o){o.g&&(Ha(o),o.g.cancel(),o.g=null)}function Ku(o){Wi(o),o.u&&(c.clearTimeout(o.u),o.u=null),Gi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ki(o){if(!Cu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ce||nr(),ge||(ce(),ge=!0),Ct.add(u,o),o.B=0}}function N_(o,u){return Pu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ss(_(o.Ga,o,u),Zu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Pn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Qu(this,R,u),f=sn(this.I),Pe(f,"RID",o),Pe(f,"CVER",22),this.D&&Pe(f,"X-HTTP-Session-Id",this.D),xs(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Bu(C)))+"&"+u:this.m&&ja(f,this.m,C)),Ba(this.h,R),this.Ua&&Pe(f,"TYPE","init"),this.P?(Pe(f,"$req",u),Pe(f,"SID","null"),R.T=!0,Ma(R,f,null)):Ma(R,f,u),this.G=2}}else this.G==3&&(o?Gu(this,o):this.i.length==0||Cu(this.h)||Gu(this))};function Gu(o,u){var f;u?f=u.l:f=o.U++;const g=sn(o.I);Pe(g,"SID",o.K),Pe(g,"RID",f),Pe(g,"AID",o.T),xs(o,g),o.m&&o.o&&ja(g,o.m,o.o),f=new Pn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Qu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ba(o.h,f),Ma(f,g,u)}function xs(o,u){o.H&&ye(o.H,function(f,g){Pe(u,g,f)}),o.l&&Du({},function(f,g){Pe(u,g,f)})}function Qu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const B=["count="+f];C==-1?0<f?(C=R[0].g,B.push("ofs="+C)):C=0:B.push("ofs="+C);let be=!0;for(let Je=0;Je<f;Je++){let me=R[Je].g;const nt=R[Je].map;if(me-=C,0>me)C=Math.max(0,R[Je].g-100),be=!1;else try{V_(nt,B,"req"+me+"_")}catch{g&&g(nt)}}if(be){g=B.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function Ju(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ce||nr(),ge||(ce(),ge=!0),Ct.add(u,o),o.v=0}}function qa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ss(_(o.Fa,o),Zu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Xu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ss(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Wi(this),Xu(this))};function Ha(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Xu(o){o.g=new Pn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=sn(o.qa);Pe(u,"RID","rpc"),Pe(u,"SID",o.K),Pe(u,"AID",o.T),Pe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Pe(u,"TO",o.ja),Pe(u,"TYPE","xmlhttp"),xs(o,u),o.m&&o.o&&ja(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=$i(sn(u)),f.m=null,f.P=!0,Au(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Wi(this),qa(this),ft(19))};function Gi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Yu(o,u){var f=null;if(o.g==u){Gi(o),Ha(o),o.g=null;var g=2}else if(Ua(o.h,u))f=u.D,Vu(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;g=Mi(),ae(g,new Eu(g,f)),Ki(o)}else Ju(o);else if(R=u.s,R==3||R==0&&0<u.X||!(g==1&&N_(o,u)||g==2&&qa(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:cr(o,5);break;case 4:cr(o,10);break;case 3:cr(o,6);break;default:cr(o,2)}}}function Zu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function cr(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),g=o.Xa;const R=!g;g=new ar(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Bi(g,"https"),$i(g),R?R_(g.toString(),f):C_(g.toString(),f)}else ft(2);o.G=0,o.l&&o.l.sa(u),eh(o),Ku(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function eh(o){if(o.G=0,o.ka=[],o.l){const u=ku(o.h);(u.length!=0||o.i.length!=0)&&(x(o.ka,u),x(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function th(o,u,f){var g=f instanceof ar?sn(f):new ar(f);if(g.g!="")u&&(g.g=u+"."+g.g),ji(g,g.s);else{var R=c.location;g=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new ar(null);g&&Bi(C,g),u&&(C.g=u),R&&ji(C,R),f&&(C.l=f),g=C}return f=o.D,u=o.ya,f&&u&&Pe(g,f,u),Pe(g,"VER",o.la),xs(o,g),g}function nh(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new xe(new qi({eb:f})):new xe(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function rh(){}n=rh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Qi(){}Qi.prototype.g=function(o,u){return new vt(o,u)};function vt(o,u){ee.call(this),this.g=new Wu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Mr(this)}V(vt,ee),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){$a(this.g)},vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new __(u.Ya++,o)),u.G==3&&Ki(u)},vt.prototype.N=function(){this.g.l=null,delete this.j,$a(this.g),delete this.g,vt.aa.N.call(this)};function sh(o){Da.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(sh,Da);function ih(){Oa.call(this),this.status=1}V(ih,Oa);function Mr(o){this.g=o}V(Mr,rh),Mr.prototype.ua=function(){ae(this.g,"a")},Mr.prototype.ta=function(o){ae(this.g,new sh(o))},Mr.prototype.sa=function(o){ae(this.g,new ih)},Mr.prototype.ra=function(){ae(this.g,"b")},Qi.prototype.createWebChannel=Qi.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,sg=function(){return new Qi},rg=function(){return Mi()},ng=ir,xc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Li.NO_ERROR=0,Li.TIMEOUT=8,Li.HTTP_ERROR=6,po=Li,Tu.COMPLETE="complete",tg=Tu,mu.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",ee.prototype.listen=ee.prototype.K,js=mu,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha,eg=xe}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});const tf="@firebase/firestore",nf="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Tl("@firebase/firestore");function qr(){return wr.logLevel}function W(n,...e){if(wr.logLevel<=he.DEBUG){const t=e.map(Al);wr.debug(`Firestore (${gs}): ${n}`,...t)}}function wn(n,...e){if(wr.logLevel<=he.ERROR){const t=e.map(Al);wr.error(`Firestore (${gs}): ${n}`,...t)}}function Qn(n,...e){if(wr.logLevel<=he.WARN){const t=e.map(Al);wr.warn(`Firestore (${gs}): ${n}`,...t)}}function Al(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,ig(n,r,t)}function ig(n,e,t){let r=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw wn(r),new Error(r)}function Te(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||ig(e,s,r)}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ot.UNAUTHENTICATED)))}shutdown(){}}class uI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class hI{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Te(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string",31837,{l:r}),new og(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class fI{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class dI{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new fI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class rf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Te(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new rf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new rf(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function ag(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=gI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function Mc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=ag(),a=mI(i.encode(sf(n,t)),i.encode(sf(e,t)));return a!==0?a:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function sf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function mI(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function is(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="__name__";class $t{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=$t.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=$t.isNumericId(e),s=$t.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?$t.extractNumericId(e).compare($t.extractNumericId(t)):Mc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wn.fromString(e.substring(4,e.length-2))}}class Ce extends $t{construct(e,t,r){return new Ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Ce(t)}static emptyPath(){return new Ce([])}}const _I=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends $t{construct(e,t,r){return new Ye(e,t,r)}static isValidIdentifier(e){return _I.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===of}static keyField(){return new Ye([of])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new K(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new K(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(t)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ce.fromString(e))}static fromName(e){return new X(Ce.fromString(e).popFirst(5))}static empty(){return new X(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n,e,t){if(!t)throw new K(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function yI(n,e,t,r){if(e===!0&&r===!0)throw new K(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function af(n){if(!X.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cf(n){if(X.isDocumentKey(n))throw new K(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function lg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function pa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function _n(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=pa(n);throw new K(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function $e(n,e){const t={typeString:n};return e&&(t.value=e),t}function bi(n,e){if(!lg(n))throw new K(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new K(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=-62135596800,uf=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*uf);return new ke(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lf)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uf}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bi(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-lf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:$e("string",ke._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new ke(0,0))}static max(){return new se(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const fi=-1;function vI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new ke(t+1,0):new ke(t,r));return new Jn(s,X.empty(),e)}function EI(n){return new Jn(n.readTime,n.key,fi)}class Jn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Jn(se.min(),X.empty(),fi)}static max(){return new Jn(se.max(),X.empty(),fi)}}function TI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==II)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,r)=>{t(e)}))}static reject(e){return new D(((t,r)=>{r(e)}))}static waitFor(e){return new D(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(l=>r(l)))})),a=!0,i===s&&t()}))}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next((s=>s?D.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new D(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new D(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function AI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function _s(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ga{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ga.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=-1;function ma(n){return n==null}function xo(n){return n===0&&1/n==-1/0}function bI(n){return typeof n=="number"&&Number.isInteger(n)&&!xo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="";function SI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hf(e)),e=RI(n.get(t),e);return hf(e)}function RI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ug:t+="";break;default:t+=i}}return t}function hf(n){return n+ug+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Cr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.comparator=e,this.root=t||Xe.EMPTY}insert(e,t){return new Ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new df(this.data.getIterator())}getIteratorFrom(e){return new df(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ke(this.comparator);return t.data=e,t}}class df{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new kt([])}unionWith(e){let t=new Ke(Ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new kt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class fg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fg("Invalid base64 string: "+i):i}})(e);return new et(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new et(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const CI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(n){if(Te(!!n,39018),typeof n=="string"){let e=0;const t=CI.exec(n);if(Te(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yn(n){return typeof n=="string"?et.fromBase64String(n):et.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="server_timestamp",pg="__type__",gg="__previous_value__",mg="__local_write_time__";function Rl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[pg])===null||t===void 0?void 0:t.stringValue)===dg}function _a(n){const e=n.mapValue.fields[gg];return Rl(e)?_a(e):e}function di(n){const e=Xn(n.mapValue.fields[mg].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,t,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const Mo="(default)";class pi{constructor(e,t){this.projectId=e,this.database=t||Mo}static empty(){return new pi("","")}get isDefaultDatabase(){return this.database===Mo}isEqual(e){return e instanceof pi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="__type__",VI="__max__",ro={mapValue:{}},yg="__vector__",Lo="value";function Zn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Rl(n)?4:DI(n)?9007199254740991:kI(n)?10:11:te(28295,{value:n})}function en(n,e){if(n===e)return!0;const t=Zn(n);if(t!==Zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return di(n).isEqual(di(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Xn(s.timestampValue),c=Xn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Yn(s.bytesValue).isEqual(Yn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Le(s.doubleValue),c=Le(i.doubleValue);return a===c?xo(a)===xo(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return is(n.arrayValue.values||[],e.arrayValue.values||[],en);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ff(a)!==ff(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!en(a[l],c[l])))return!1;return!0})(n,e);default:return te(52216,{left:n})}}function gi(n,e){return(n.values||[]).find((t=>en(t,e)))!==void 0}function os(n,e){if(n===e)return 0;const t=Zn(n),r=Zn(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Le(i.integerValue||i.doubleValue),l=Le(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return pf(n.timestampValue,e.timestampValue);case 4:return pf(di(n),di(e));case 5:return Mc(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Yn(i),l=Yn(a);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ue(c[h],l[h]);if(d!==0)return d}return ue(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=ue(Le(i.latitude),Le(a.latitude));return c!==0?c:ue(Le(i.longitude),Le(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return gf(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,l,h,d;const p=i.fields||{},_=a.fields||{},b=(c=p[Lo])===null||c===void 0?void 0:c.arrayValue,V=(l=_[Lo])===null||l===void 0?void 0:l.arrayValue,O=ue(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return O!==0?O:gf(b,V)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===ro.mapValue&&a===ro.mapValue)return 0;if(i===ro.mapValue)return 1;if(a===ro.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const _=Mc(l[p],d[p]);if(_!==0)return _;const b=os(c[l[p]],h[d[p]]);if(b!==0)return b}return ue(l.length,d.length)})(n.mapValue,e.mapValue);default:throw te(23264,{le:t})}}function pf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Xn(n),r=Xn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function gf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=os(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function as(n){return Lc(n)}function Lc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Xn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Yn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Lc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Lc(t.fields[a])}`;return s+"}"})(n.mapValue):te(61005,{value:n})}function go(n){switch(Zn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_a(n);return e?16+go(e):16;case 5:return 2*n.stringValue.length;case 6:return Yn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+go(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Cr(r.fields,((i,a)=>{s+=i.length+go(a)})),s})(n.mapValue);default:throw te(13486,{value:n})}}function mf(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Fc(n){return!!n&&"integerValue"in n}function Cl(n){return!!n&&"arrayValue"in n}function _f(n){return!!n&&"nullValue"in n}function yf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mo(n){return!!n&&"mapValue"in n}function kI(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[_g])===null||t===void 0?void 0:t.stringValue)===yg}function ei(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Cr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ei(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ei(n.arrayValue.values[t]);return e}return Object.assign({},n)}function DI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===VI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!mo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(t)}setAll(e){let t=Ye.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=ei(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());mo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Cr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new St(ei(this.value))}}function vg(n){const e=[];return Cr(n.fields,((t,r)=>{const s=new Ye([t]);if(mo(r)){const i=vg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,se.min(),se.min(),se.min(),St.empty(),0)}static newFoundDocument(e,t,r,s){return new ct(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new ct(e,2,t,se.min(),se.min(),St.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,se.min(),se.min(),St.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fo{constructor(e,t){this.position=e,this.inclusive=t}}function vf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=os(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ef(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!en(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Uo{constructor(e,t="asc"){this.field=e,this.dir=t}}function OI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Eg{}class je extends Eg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new xI(e,t,r):t==="array-contains"?new FI(e,r):t==="in"?new UI(e,r):t==="not-in"?new BI(e,r):t==="array-contains-any"?new jI(e,r):new je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new MI(e,r):new LI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(os(t,this.value)):t!==null&&Zn(this.value)===Zn(t)&&this.matchesComparison(os(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends Eg{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Lt(e,t)}matches(e){return Tg(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Tg(n){return n.op==="and"}function Ig(n){return NI(n)&&Tg(n)}function NI(n){for(const e of n.filters)if(e instanceof Lt)return!1;return!0}function Uc(n){if(n instanceof je)return n.field.canonicalString()+n.op.toString()+as(n.value);if(Ig(n))return n.filters.map((e=>Uc(e))).join(",");{const e=n.filters.map((t=>Uc(t))).join(",");return`${n.op}(${e})`}}function wg(n,e){return n instanceof je?(function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)})(n,e):n instanceof Lt?(function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&wg(a,s.filters[c])),!0):!1})(n,e):void te(19439)}function Ag(n){return n instanceof je?(function(t){return`${t.field.canonicalString()} ${t.op} ${as(t.value)}`})(n):n instanceof Lt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ag).join(" ,")+"}"})(n):"Filter"}class xI extends je{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class MI extends je{constructor(e,t){super(e,"in",t),this.keys=bg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class LI extends je{constructor(e,t){super(e,"not-in",t),this.keys=bg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function bg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>X.fromName(r.referenceValue)))}class FI extends je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cl(t)&&gi(t.arrayValue,this.value)}}class UI extends je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gi(this.value.arrayValue,t)}}class BI extends je{constructor(e,t){super(e,"not-in",t)}matches(e){if(gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!gi(this.value.arrayValue,t)}}class jI extends je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>gi(this.value.arrayValue,r)))}}/**
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
 */class $I{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function Tf(n,e=null,t=[],r=[],s=null,i=null,a=null){return new $I(n,e,t,r,s,i,a)}function Pl(n){const e=ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Uc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),ma(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>as(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>as(r))).join(",")),e.Pe=t}return e.Pe}function Vl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!OI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ef(n.startAt,e.startAt)&&Ef(n.endAt,e.endAt)}function Bc(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function qI(n,e,t,r,s,i,a,c){return new Si(n,e,t,r,s,i,a,c)}function kl(n){return new Si(n)}function If(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sg(n){return n.collectionGroup!==null}function ti(n){const e=ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ke(Ye.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Uo(i,r))})),t.has(Ye.keyField().canonicalString())||e.Te.push(new Uo(Ye.keyField(),r))}return e.Te}function Kt(n){const e=ie(n);return e.Ie||(e.Ie=HI(e,ti(n))),e.Ie}function HI(n,e){if(n.limitType==="F")return Tf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Uo(s.field,i)}));const t=n.endAt?new Fo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fo(n.startAt.position,n.startAt.inclusive):null;return Tf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function jc(n,e){const t=n.filters.concat([e]);return new Si(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function $c(n,e,t){return new Si(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ya(n,e){return Vl(Kt(n),Kt(e))&&n.limitType===e.limitType}function Rg(n){return`${Pl(Kt(n))}|lt:${n.limitType}`}function Hr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Ag(s))).join(", ")}]`),ma(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>as(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>as(s))).join(",")),`Target(${r})`})(Kt(n))}; limitType=${n.limitType})`}function va(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=vf(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,ti(r),s)||r.endAt&&!(function(a,c,l){const h=vf(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,ti(r),s))})(n,e)}function zI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Cg(n){return(e,t)=>{let r=!1;for(const s of ti(n)){const i=WI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function WI(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?os(l,h):te(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return hg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=new Ne(X.comparator);function An(){return KI}const Pg=new Ne(X.comparator);function $s(...n){let e=Pg;for(const t of n)e=e.insert(t.key,t);return e}function Vg(n){let e=Pg;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function pr(){return ni()}function kg(){return ni()}function ni(){return new Pr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const GI=new Ne(X.comparator),QI=new Ke(X.comparator);function fe(...n){let e=QI;for(const t of n)e=e.add(t);return e}const JI=new Ke(ue);function XI(){return JI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xo(e)?"-0":e}}function Dg(n){return{integerValue:""+n}}function YI(n,e){return bI(e)?Dg(e):Dl(n,e)}/**
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
 */class Ea{constructor(){this._=void 0}}function ZI(n,e,t){return n instanceof Bo?(function(s,i){const a={fields:{[pg]:{stringValue:dg},[mg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Rl(i)&&(i=_a(i)),i&&(a.fields[gg]=i),{mapValue:a}})(t,e):n instanceof mi?Ng(n,e):n instanceof _i?xg(n,e):(function(s,i){const a=Og(s,i),c=wf(a)+wf(s.Ee);return Fc(a)&&Fc(s.Ee)?Dg(c):Dl(s.serializer,c)})(n,e)}function ew(n,e,t){return n instanceof mi?Ng(n,e):n instanceof _i?xg(n,e):t}function Og(n,e){return n instanceof jo?(function(r){return Fc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Bo extends Ea{}class mi extends Ea{constructor(e){super(),this.elements=e}}function Ng(n,e){const t=Mg(e);for(const r of n.elements)t.some((s=>en(s,r)))||t.push(r);return{arrayValue:{values:t}}}class _i extends Ea{constructor(e){super(),this.elements=e}}function xg(n,e){let t=Mg(e);for(const r of n.elements)t=t.filter((s=>!en(s,r)));return{arrayValue:{values:t}}}class jo extends Ea{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function wf(n){return Le(n.integerValue||n.doubleValue)}function Mg(n){return Cl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function tw(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof mi&&s instanceof mi||r instanceof _i&&s instanceof _i?is(r.elements,s.elements,en):r instanceof jo&&s instanceof jo?en(r.Ee,s.Ee):r instanceof Bo&&s instanceof Bo})(n.transform,e.transform)}class nw{constructor(e,t){this.version=e,this.transformResults=t}}class Gt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ta{}function Lg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ol(n.key,Gt.none()):new Ri(n.key,n.data,Gt.none());{const t=n.data,r=St.empty();let s=new Ke(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Vr(n.key,r,new kt(s.toArray()),Gt.none())}}function rw(n,e,t){n instanceof Ri?(function(s,i,a){const c=s.value.clone(),l=bf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Vr?(function(s,i,a){if(!_o(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=bf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Fg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function ri(n,e,t,r){return n instanceof Ri?(function(i,a,c,l){if(!_o(i.precondition,a))return c;const h=i.value.clone(),d=Sf(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Vr?(function(i,a,c,l){if(!_o(i.precondition,a))return c;const h=Sf(i.fieldTransforms,l,a),d=a.data;return d.setAll(Fg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,c){return _o(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function sw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Og(r.transform,s||null);i!=null&&(t===null&&(t=St.empty()),t.set(r.field,i))}return t||null}function Af(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&is(r,s,((i,a)=>tw(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ri extends Ta{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vr extends Ta{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Fg(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function bf(n,e,t){const r=new Map;Te(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,ew(a,c,t[s]))}return r}function Sf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,ZI(i,a,e))}return r}class Ol extends Ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iw extends Ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&rw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ri(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ri(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=kg();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=Lg(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),fe())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,((t,r)=>Af(t,r)))&&is(this.baseMutations,e.baseMutations,((t,r)=>Af(t,r)))}}class Nl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Te(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return GI})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Nl(e,t,r,s)}}/**
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
 */class aw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,de;function lw(n){switch(n){case k.OK:return te(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function Ug(n){if(n===void 0)return wn("GRPC error has no .code"),k.UNKNOWN;switch(n){case Be.OK:return k.OK;case Be.CANCELLED:return k.CANCELLED;case Be.UNKNOWN:return k.UNKNOWN;case Be.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Be.INTERNAL:return k.INTERNAL;case Be.UNAVAILABLE:return k.UNAVAILABLE;case Be.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Be.NOT_FOUND:return k.NOT_FOUND;case Be.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Be.ABORTED:return k.ABORTED;case Be.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Be.DATA_LOSS:return k.DATA_LOSS;default:return te(39323,{code:n})}}(de=Be||(Be={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const uw=new Wn([4294967295,4294967295],0);function Rf(n){const e=ag().encode(n),t=new Zp;return t.update(e),new Uint8Array(t.digest())}function Cf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wn([t,r],0),new Wn([s,i],0)]}class xl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new qs(`Invalid padding: ${t}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new qs(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Wn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Wn.fromNumber(r)));return s.compare(uw)===1&&(s=new Wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Rf(e),[r,s]=Cf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new xl(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=Rf(e),[r,s]=Cf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ci.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ia(se.min(),s,new Ne(ue),An(),fe())}}class Ci{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ci(r,t,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Bg{constructor(e,t){this.targetId=e,this.De=t}}class jg{constructor(e,t,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Pf{constructor(){this.ve=0,this.Ce=Vf(),this.Fe=et.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=fe(),t=fe(),r=fe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}})),new Ci(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Vf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Te(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class hw{constructor(e){this.We=e,this.Ge=new Map,this.ze=An(),this.je=so(),this.Je=so(),this.He=new Ne(ue)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Bc(i))if(r===0){const a=new X(i.path);this.Xe(t,a,ct.newNoDocument(a,se.min()))}else Te(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Yn(r).toUint8Array()}catch(l){if(l instanceof fg)return Qn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new xl(a,s,i)}catch(l){return Qn(l instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Bc(c.target)){const l=new X(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,ct.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=fe();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Ia(e,t,this.He,this.ze,r);return this.ze=An(),this.je=so(),this.Je=so(),this.He=new Ne(ue),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Pf,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ke(ue),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ke(ue),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Pf),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function so(){return new Ne(X.comparator)}function Vf(){return new Ne(X.comparator)}const fw={asc:"ASCENDING",desc:"DESCENDING"},dw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pw={and:"AND",or:"OR"};class gw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qc(n,e){return n.useProto3Json||ma(e)?e:{value:e}}function $o(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $g(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mw(n,e){return $o(n,e.toTimestamp())}function Qt(n){return Te(!!n,49232),se.fromTimestamp((function(t){const r=Xn(t);return new ke(r.seconds,r.nanos)})(n))}function Ml(n,e){return Hc(n,e).canonicalString()}function Hc(n,e){const t=(function(s){return new Ce(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function qg(n){const e=Ce.fromString(n);return Te(Gg(e),10190,{key:e.toString()}),e}function zc(n,e){return Ml(n.databaseId,e.path)}function cc(n,e){const t=qg(e);if(t.get(1)!==n.databaseId.projectId)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(zg(t))}function Hg(n,e){return Ml(n.databaseId,e)}function _w(n){const e=qg(n);return e.length===4?Ce.emptyPath():zg(e)}function Wc(n){return new Ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zg(n){return Te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function kf(n,e,t){return{name:zc(n,e),fields:t.value.mapValue.fields}}function yw(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Te(d===void 0||typeof d=="string",58123),et.fromBase64String(d||"")):(Te(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),et.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?k.UNKNOWN:Ug(h.code);return new K(d,h.message||"")})(a);t=new jg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cc(n,r.document.name),i=Qt(r.document.updateTime),a=r.document.createTime?Qt(r.document.createTime):se.min(),c=new St({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new yo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cc(n,r.document),i=r.readTime?Qt(r.readTime):se.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];t=new yo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cc(n,r.document),i=r.removedTargetIds||[];t=new yo([],i,s,null)}else{if(!("filter"in e))return te(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new cw(s,i),c=r.targetId;t=new Bg(c,a)}}return t}function vw(n,e){let t;if(e instanceof Ri)t={update:kf(n,e.key,e.value)};else if(e instanceof Ol)t={delete:zc(n,e.key)};else if(e instanceof Vr)t={update:kf(n,e.key,e.data),updateMask:Cw(e.fieldMask)};else{if(!(e instanceof iw))return te(16599,{Rt:e.type});t={verify:zc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Bo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof _i)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof jo)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw te(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:mw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)})(n,e.precondition)),t}function Ew(n,e){return n&&n.length>0?(Te(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Qt(s.updateTime):Qt(i);return a.isEqual(se.min())&&(a=Qt(i)),new nw(a,s.transformResults||[])})(t,e)))):[]}function Tw(n,e){return{documents:[Hg(n,e.path)]}}function Iw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Hg(n,s);const i=(function(h){if(h.length!==0)return Kg(Lt.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(_){return{field:zr(_.field),direction:bw(_.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=qc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function ww(n){let e=_w(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Te(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const _=Wg(p);return _ instanceof Lt&&Ig(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((_=>(function(V){return new Uo(Wr(V.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(p){let _;return _=typeof p=="object"?p.value:p,ma(_)?null:_})(t.limit));let l=null;t.startAt&&(l=(function(p){const _=!!p.before,b=p.values||[];return new Fo(b,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const _=!p.before,b=p.values||[];return new Fo(b,_)})(t.endAt)),qI(e,s,a,i,c,"F",l,h)}function Aw(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Wg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Wr(t.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Wr(t.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Wr(t.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Wr(t.unaryFilter.field);return je.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return je.create(Wr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Lt.create(t.compositeFilter.filters.map((r=>Wg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}})(t.compositeFilter.op))})(n):te(30097,{filter:n})}function bw(n){return fw[n]}function Sw(n){return dw[n]}function Rw(n){return pw[n]}function zr(n){return{fieldPath:n.canonicalString()}}function Wr(n){return Ye.fromServerFormat(n.fieldPath)}function Kg(n){return n instanceof je?(function(t){if(t.op==="=="){if(yf(t.value))return{unaryFilter:{field:zr(t.field),op:"IS_NAN"}};if(_f(t.value))return{unaryFilter:{field:zr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(yf(t.value))return{unaryFilter:{field:zr(t.field),op:"IS_NOT_NAN"}};if(_f(t.value))return{unaryFilter:{field:zr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zr(t.field),op:Sw(t.op),value:t.value}}})(n):n instanceof Lt?(function(t){const r=t.getFilters().map((s=>Kg(s)));return r.length===1?r[0]:{compositeFilter:{op:Rw(t.op),filters:r}}})(n):te(54877,{filter:n})}function Cw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Gg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,r,s,i=se.min(),a=se.min(),c=et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.gt=e}}function Vw(n){const e=ww({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$c(e,e.limit,"L"):e}/**
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
 */class kw{constructor(){this.Dn=new Dw}addToCollectionParentIndex(e,t){return this.Dn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Jn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Dw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ke(Ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Ce.comparator)).toArray()}}/**
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
 */const Df={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qg=41943040;class yt{static withCacheSize(e){return new yt(e,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(Qg,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new cs(0)}static ur(){return new cs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="LruGarbageCollector",Ow=1048576;function Nf([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class Nw{constructor(e){this.Tr=e,this.buffer=new Ke(Nf),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Nf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(Of,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){_s(t)?W(Of,"Ignoring IndexedDB error during garbage collection: ",t):await ms(t)}await this.Rr(3e5)}))}}class Mw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(ga.ue);const r=new Nw(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Df)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Df):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),qr()<=he.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Lw(n,e){return new Mw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this.changes=new Pr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&ri(r.mutation,s,kt.empty(),ke.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=fe()){const s=pr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=$s();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=pr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,fe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=An();const a=ni(),c=(function(){return ni()})();return t.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Vr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ri(d.mutation,h,d.mutation.getFieldMask(),ke.now())):a.set(h.key,kt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),t.forEach(((h,d)=>{var p;return c.set(h,new Uw(d,(p=a.get(h))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=ni();let s=new Ne(((a,c)=>a-c)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||kt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||fe()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=kg();d.forEach((_=>{if(!i.has(_)){const b=Lg(t.get(_),r.get(_));b!==null&&p.set(_,b),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(pr());let c=fi,l=i;return a.next((h=>D.forEach(h,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{l=l.insert(d,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,fe()))).next((d=>({batchId:c,changes:Vg(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((r=>{let s=$s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=$s();return this.indexManager.getCollectionParents(e,i).next((c=>D.forEach(c,(l=>{const h=(function(p,_){return new Si(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ct.newInvalidDocument(d)))}));let c=$s();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&ri(d.mutation,h,kt.empty(),ke.now()),va(t,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return D.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Qt(s.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:Vw(s.bundledQuery),readTime:Qt(s.readTime)}})(t)),D.resolve()}}/**
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
 */class $w{constructor(){this.overlays=new Ne(X.comparator),this.kr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=pr();return D.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=pr(),i=t.length+1,a=new X(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ne(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=pr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=pr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return D.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new aw(t,r));let i=this.kr.get(t);i===void 0&&(i=fe(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
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
 */class qw{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.qr=new Ke(Ge.Qr),this.$r=new Ke(Ge.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ge(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ge(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new X(new Ce([])),r=new Ge(t,e),s=new Ge(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new X(new Ce([])),r=new Ge(t,e),s=new Ge(t,e+1);let i=fe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ge(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return X.comparator(e.key,t.key)||ue(e.Hr,t.Hr)}static Ur(e,t){return ue(e.Hr,t.Hr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ke(Ge.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ow(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new Ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Sl:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ge(t,0),s=new Ge(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ke(ue);return t.forEach((s=>{const i=new Ge(s,0),a=new Ge(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new Ge(new X(i),0);let c=new Ke(ue);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),D.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Te(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(t.mutations,(s=>{const i=new Ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Ge(t,0),s=this.Yr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.ni=e,this.docs=(function(){return new Ne(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let r=An();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=An();const a=t.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||TI(EI(d),r)<=0||(s.has(d.key)||va(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te(9500)}ri(e,t){return D.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Ww(this)}getSize(e){return D.resolve(this.size)}}class Ww extends Fw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),D.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.persistence=e,this.ii=new Pr((t=>Pl(t)),Vl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.si=0,this.oi=new Ll,this.targetCount=0,this._i=cs.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),D.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new cs(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.hr(t),D.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t){this.ai={},this.overlays={},this.ui=new ga(0),this.ci=!1,this.ci=!0,this.li=new qw,this.referenceDelegate=e(this),this.hi=new Kw(this),this.indexManager=new kw,this.remoteDocumentCache=(function(s){return new zw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Pw(t),this.Ti=new jw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $w,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Hw(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const s=new Gw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return D.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Gw extends wI{constructor(e){super(),this.currentSequenceNumber=e}}class Fl{constructor(e){this.persistence=e,this.Ai=new Ll,this.Ri=null}static Vi(e){return new Fl(e)}get mi(){if(this.Ri)return this.Ri;throw te(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,(r=>{const s=X.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return D.or([()=>D.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class qo{constructor(e,t){this.persistence=e,this.gi=new Pr((r=>SI(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Lw(this,t)}static Vi(e,t){return new qo(e,t)}Ii(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return D.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?D.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=go(e.data.value)),t}Sr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=fe(),s=fe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ul(e,t.fromCache,r,s)}}/**
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
 */class Qw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Jw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return zE()?8:AI(ut())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Qw;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(qr()<=he.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Hr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(qr()<=he.DEBUG&&W("QueryEngine","Query:",Hr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(qr()<=he.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Hr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):D.resolve())}ps(e,t){if(If(t))return D.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=$c(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(t,c);return this.Ds(t,h,a,l.readTime)?this.ps(e,$c(t,null,"F")):this.vs(e,h,t,l)}))))})))))}ys(e,t,r,s){return If(t)||s.isEqual(se.min())?D.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?D.resolve(null):(qr()<=he.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hr(t)),this.vs(e,a,t,vI(s,fi)).next((c=>c)))}))}bs(e,t){let r=new Ke(Cg(e));return t.forEach(((s,i)=>{va(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return qr()<=he.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Hr(t)),this.gs.getDocumentsMatchingQuery(e,t,Jn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="LocalStore",Xw=3e8;class Yw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Ne(ue),this.Ms=new Pr((i=>Pl(i)),Vl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Zw(n,e,t,r){return new Yw(n,e,t,r)}async function Xg(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function eA(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const p=h.batch,_=p.keys();let b=D.resolve();return _.forEach((V=>{b=b.next((()=>d.getEntry(l,V))).next((O=>{const x=h.docVersions.get(V);Te(x!==null,48541),O.version.compareTo(x)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),d.addEntry(O)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Yg(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function tA(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((d,p)=>{const _=s.get(p);if(!_)return;c.push(t.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.hi.addMatchingKeys(i,d.addedDocuments,p))));let b=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(et.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),(function(O,x,Q){return O.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Xw?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0})(_,b,d)&&c.push(t.hi.updateTargetData(i,b))}));let l=An(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(nA(i,a,e.documentUpdates).next((d=>{l=d.Ls,h=d.ks}))),!r.isEqual(se.min())){const d=t.hi.getLastRemoteSnapshotVersion(i).next((p=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return D.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.Fs=s,i)))}function nA(n,e,t){let r=fe(),s=fe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=An();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(Bl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function rA(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Sl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function sA(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,D.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new $n(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Kc(n,e,t){const r=ie(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!_s(a))throw a;W(Bl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function xf(n,e,t){const r=ie(n);let s=se.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const p=ie(l),_=p.Ms.get(d);return _!==void 0?D.resolve(p.Fs.get(_)):p.hi.getTargetData(h,d)})(r,a,Kt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:fe()))).next((c=>(iA(r,zI(e),c),{documents:c,qs:i})))))}function iA(n,e,t){let r=n.xs.get(e)||se.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Mf{constructor(){this.activeTargetIds=XI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oA{constructor(){this.Fo=new Mf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Mf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aA{xo(e){}shutdown(){}}/**
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
 */const Lf="ConnectivityMonitor";class Ff{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(Lf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(Lf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let io=null;function Gc(){return io===null?io=(function(){return 268435456+Math.round(2147483648*Math.random())})():io++,"0x"+io.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="RestConnection",cA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class lA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Mo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Gc(),c=this.Go(e,t.toUriEncodedString());W(lc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),d=ds(h);return this.jo(e,c,l,r,d).then((p=>(W(lc,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Qn(lc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+gs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=cA[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class hA extends lA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Gc();return new Promise(((c,l)=>{const h=new eg;h.setWithCredentials(!0),h.listenOnce(tg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case po.NO_ERROR:const p=h.getResponseJson();W(st,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case po.TIMEOUT:W(st,`RPC '${e}' ${a} timed out`),l(new K(k.DEADLINE_EXCEEDED,"Request time out"));break;case po.HTTP_ERROR:const _=h.getStatus();if(W(st,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const O=(function(Q){const $=Q.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf($)>=0?$:k.UNKNOWN})(V.status);l(new K(O,V.message))}else l(new K(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new K(k.UNAVAILABLE,"Connection failed."));break;default:te(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(st,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);W(st,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)}))}P_(e,t,r){const s=Gc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=sg(),c=rg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");W(st,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.T_(p);let _=!1,b=!1;const V=new uA({Ho:x=>{b?W(st,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(_||(W(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),W(st,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Yo:()=>p.close()}),O=(x,Q,$)=>{x.listen(Q,(G=>{try{$(G)}catch(z){setTimeout((()=>{throw z}),0)}}))};return O(p,js.EventType.OPEN,(()=>{b||(W(st,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),O(p,js.EventType.CLOSE,(()=>{b||(b=!0,W(st,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(p))})),O(p,js.EventType.ERROR,(x=>{b||(b=!0,Qn(st,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),V.__(new K(k.UNAVAILABLE,"The operation could not be completed")))})),O(p,js.EventType.MESSAGE,(x=>{var Q;if(!b){const $=x.data[0];Te(!!$,16349);const G=$,z=(G==null?void 0:G.error)||((Q=G[0])===null||Q===void 0?void 0:Q.error);if(z){W(st,`RPC '${e}' stream ${s} received error:`,z);const oe=z.status;let ye=(function(y){const T=Be[y];if(T!==void 0)return Ug(T)})(oe),I=z.message;ye===void 0&&(ye=k.INTERNAL,I="Unknown error status: "+oe+" with message "+z.message),b=!0,V.__(new K(ye,I)),p.close()}else W(st,`RPC '${e}' stream ${s} received:`,$),V.a_($)}})),O(c,ng.STAT_EVENT,(x=>{x.stat===xc.PROXY?W(st,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===xc.NOPROXY&&W(st,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n){return new gw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="PersistentStream";class em{constructor(e,t,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Zg(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(wn(t.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new K(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return W(Uf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(W(Uf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fA extends em{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=yw(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Qt(a.readTime):se.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Wc(this.serializer),t.addTarget=(function(i,a){let c;const l=a.target;if(c=Bc(l)?{documents:Tw(i,l)}:{query:Iw(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=$g(i,a.resumeToken);const h=qc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=$o(i,a.snapshotVersion.toTimestamp());const h=qc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=Aw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Wc(this.serializer),t.removeTarget=e,this.k_(t)}}class dA extends em{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Ew(e.writeResults,e.commitTime),r=Qt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Wc(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>vw(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{}class gA extends pA{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Hc(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(k.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Hc(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(k.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class mA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(wn(t),this._a=!1):W("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="RemoteStore";class _A{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{kr(this)&&(W(Ar,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ia.add(4),await Pi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Aa(h)})(this))}))})),this.Aa=new mA(r,s)}}async function Aa(n){if(kr(n))for(const e of n.da)await e(!0)}async function Pi(n){for(const e of n.da)await e(!1)}function tm(n,e){const t=ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Hl(t)?ql(t):ys(t).x_()&&$l(t,e))}function jl(n,e){const t=ie(n),r=ys(t);t.Ta.delete(e),r.x_()&&nm(t,e),t.Ta.size===0&&(r.x_()?r.B_():kr(t)&&t.Aa.set("Unknown"))}function $l(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ys(n).H_(e)}function nm(n,e){n.Ra.$e(e),ys(n).Y_(e)}function ql(n){n.Ra=new hw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ys(n).start(),n.Aa.aa()}function Hl(n){return kr(n)&&!ys(n).M_()&&n.Ta.size>0}function kr(n){return ie(n).Ia.size===0}function rm(n){n.Ra=void 0}async function yA(n){n.Aa.set("Online")}async function vA(n){n.Ta.forEach(((e,t)=>{$l(n,e)}))}async function EA(n,e){rm(n),Hl(n)?(n.Aa.la(e),ql(n)):n.Aa.set("Unknown")}async function TA(n,e,t){if(n.Aa.set("Online"),e instanceof jg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){W(Ar,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ho(n,r)}else if(e instanceof yo?n.Ra.Ye(e):e instanceof Bg?n.Ra.it(e):n.Ra.et(e),!t.isEqual(se.min()))try{const r=await Yg(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(et.EMPTY_BYTE_STRING,d.snapshotVersion)),nm(i,l);const p=new $n(d.target,l,h,d.sequenceNumber);$l(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){W(Ar,"Failed to raise snapshot:",r),await Ho(n,r)}}async function Ho(n,e,t){if(!_s(e))throw e;n.Ia.add(1),await Pi(n),n.Aa.set("Offline"),t||(t=()=>Yg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{W(Ar,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Aa(n)}))}function sm(n,e){return e().catch((t=>Ho(n,t,e)))}async function ba(n){const e=ie(n),t=er(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Sl;for(;IA(e);)try{const s=await rA(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,wA(e,s)}catch(s){await Ho(e,s)}im(e)&&om(e)}function IA(n){return kr(n)&&n.Pa.length<10}function wA(n,e){n.Pa.push(e);const t=er(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function im(n){return kr(n)&&!er(n).M_()&&n.Pa.length>0}function om(n){er(n).start()}async function AA(n){er(n).na()}async function bA(n){const e=er(n);for(const t of n.Pa)e.X_(t.mutations)}async function SA(n,e,t){const r=n.Pa.shift(),s=Nl.from(r,e,t);await sm(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await ba(n)}async function RA(n,e){e&&er(n).Z_&&await(async function(r,s){if((function(a){return lw(a)&&a!==k.ABORTED})(s.code)){const i=r.Pa.shift();er(r).N_(),await sm(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ba(r)}})(n,e),im(n)&&om(n)}async function Bf(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),W(Ar,"RemoteStore received new credentials");const r=kr(t);t.Ia.add(3),await Pi(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Aa(t)}async function CA(n,e){const t=ie(n);e?(t.Ia.delete(2),await Aa(t)):e||(t.Ia.add(2),await Pi(t),t.Aa.set("Unknown"))}function ys(n){return n.Va||(n.Va=(function(t,r,s){const i=ie(t);return i.ia(),new fA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:yA.bind(null,n),e_:vA.bind(null,n),n_:EA.bind(null,n),J_:TA.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Hl(n)?ql(n):n.Aa.set("Unknown")):(await n.Va.stop(),rm(n))}))),n.Va}function er(n){return n.ma||(n.ma=(function(t,r,s){const i=ie(t);return i.ia(),new dA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:AA.bind(null,n),n_:RA.bind(null,n),ea:bA.bind(null,n),ta:SA.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await ba(n)):(await n.ma.stop(),n.Pa.length>0&&(W(Ar,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new zl(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wl(n,e){if(wn("AsyncQueue",`${e}: ${n}`),_s(n))return new K(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{static emptySet(e){return new Yr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=$s(),this.sortedSet=new Ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Yr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.fa=new Ne(X.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):te(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class ls{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new ls(e,t,Yr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class VA{constructor(){this.queries=$f(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=$f(),i.forEach(((a,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new K(k.ABORTED,"Firestore shutting down"))}}function $f(){return new Pr((n=>Rg(n)),ya)}async function am(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new PA,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Wl(a,`Initialization of query '${Hr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Kl(t)}async function cm(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function kA(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Kl(t)}function DA(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Kl(n){n.Da.forEach((e=>{e.next()}))}var Qc,qf;(qf=Qc||(Qc={})).Fa="default",qf.Cache="cache";class lm{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Qc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.key=e}}class hm{constructor(e){this.key=e}}class OA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=fe(),this.mutatedKeys=fe(),this.Xa=Cg(e),this.eu=new Yr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new jf,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const _=s.get(d),b=va(this.query,p)?p:null,V=!!_&&this.mutatedKeys.has(_.key),O=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let x=!1;_&&b?_.data.isEqual(b.data)?V!==O&&(r.track({type:3,doc:b}),x=!0):this.iu(_,b)||(r.track({type:2,doc:b}),x=!0,(l&&this.Xa(b,l)>0||h&&this.Xa(b,h)<0)&&(c=!0)):!_&&b?(r.track({type:0,doc:b}),x=!0):_&&!b&&(r.track({type:1,doc:_}),x=!0,(l||h)&&(c=!0)),x&&(b?(a=a.add(b),i=O?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,p)=>(function(b,V){const O=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{At:x})}};return O(b)-O(V)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new ls(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new jf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new hm(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new um(r))})),t}uu(e){this.Ha=e.qs,this.Za=fe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ls.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Gl="SyncEngine";class NA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xA{constructor(e){this.key=e,this.lu=!1}}class MA{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Pr((c=>Rg(c)),ya),this.Tu=new Map,this.Iu=new Set,this.du=new Ne(X.comparator),this.Eu=new Map,this.Au=new Ll,this.Ru={},this.Vu=new Map,this.mu=cs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function LA(n,e,t=!0){const r=_m(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await fm(r,e,t,!0),s}async function FA(n,e){const t=_m(n);await fm(t,e,!0,!1)}async function fm(n,e,t,r){const s=await sA(n.localStore,Kt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await UA(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&tm(n.remoteStore,s),c}async function UA(n,e,t,r,s){n.gu=(p,_,b)=>(async function(O,x,Q,$){let G=x.view.nu(Q);G.Ds&&(G=await xf(O.localStore,x.query,!1).then((({documents:I})=>x.view.nu(I,G))));const z=$&&$.targetChanges.get(x.targetId),oe=$&&$.targetMismatches.get(x.targetId)!=null,ye=x.view.applyChanges(G,O.isPrimaryClient,z,oe);return zf(O,x.targetId,ye._u),ye.snapshot})(n,p,_,b);const i=await xf(n.localStore,e,!0),a=new OA(e,i.qs),c=a.nu(i.documents),l=Ci.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);zf(n,t,h._u);const d=new NA(e,t,a);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function BA(n,e,t){const r=ie(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!ya(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Kc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&jl(r.remoteStore,s.targetId),Jc(r,s.targetId)})).catch(ms)):(Jc(r,s.targetId),await Kc(r.localStore,s.targetId,!0))}async function jA(n,e){const t=ie(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),jl(t.remoteStore,r.targetId))}async function $A(n,e,t){const r=QA(n);try{const s=await(function(a,c){const l=ie(a),h=ke.now(),d=c.reduce(((b,V)=>b.add(V.key)),fe());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=An(),O=fe();return l.Os.getEntries(b,d).next((x=>{V=x,V.forEach(((Q,$)=>{$.isValidDocument()||(O=O.add(Q))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,V))).next((x=>{p=x;const Q=[];for(const $ of c){const G=sw($,p.get($.key).overlayedDocument);G!=null&&Q.push(new Vr($.key,G,vg(G.value.mapValue),Gt.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,Q,c)})).next((x=>{_=x;const Q=x.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(b,x.batchId,Q)}))})).then((()=>({batchId:_.batchId,changes:Vg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new Ne(ue)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,t),await Vi(r,s.changes),await ba(r.remoteStore)}catch(s){const i=Wl(s,"Failed to persist write");t.reject(i)}}async function dm(n,e){const t=ie(n);try{const r=await tA(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Te(a.lu,14607):s.removedDocuments.size>0&&(Te(a.lu,42227),a.lu=!1))})),await Vi(t,r,e)}catch(r){await ms(r)}}function Hf(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,p)=>{for(const _ of p.wa)_.va(c)&&(h=!0)})),h&&Kl(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qA(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Ne(X.comparator);a=a.insert(i,ct.newNoDocument(i,se.min()));const c=fe().add(i),l=new Ia(se.min(),new Map,new Ne(ue),a,c);await dm(r,l),r.du=r.du.remove(i),r.Eu.delete(e),Ql(r)}else await Kc(r.localStore,e,!1).then((()=>Jc(r,e,t))).catch(ms)}async function HA(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await eA(t.localStore,e);gm(t,r,null),pm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vi(t,s)}catch(s){await ms(s)}}async function zA(n,e,t){const r=ie(n);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Te(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);gm(r,e,t),pm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vi(r,s)}catch(s){await ms(s)}}function pm(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function gm(n,e,t){const r=ie(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Jc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||mm(n,r)}))}function mm(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(jl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Ql(n))}function zf(n,e,t){for(const r of t)r instanceof um?(n.Au.addReference(r.key,e),WA(n,r)):r instanceof hm?(W(Gl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||mm(n,r.key)):te(19791,{yu:r})}function WA(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(W(Gl,"New document in limbo: "+t),n.Iu.add(r),Ql(n))}function Ql(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new X(Ce.fromString(e)),r=n.mu.next();n.Eu.set(r,new xA(t)),n.du=n.du.insert(t,r),tm(n.remoteStore,new $n(Kt(kl(t.path)),r,"TargetPurposeLimboResolution",ga.ue))}}async function Vi(n,e,t){const r=ie(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{a.push(r.gu(l,e,t).then((h=>{var d;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Ul.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>D.forEach(h,(_=>D.forEach(_.Is,(b=>d.persistence.referenceDelegate.addReference(p,_.targetId,b))).next((()=>D.forEach(_.ds,(b=>d.persistence.referenceDelegate.removeReference(p,_.targetId,b)))))))))}catch(p){if(!_s(p))throw p;W(Bl,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const b=d.Fs.get(_),V=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(_,O)}}})(r.localStore,i))}async function KA(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){W(Gl,"User change. New user:",e.toKey());const r=await Xg(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new K(k.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vi(t,r.Bs)}}function GA(n,e){const t=ie(n),r=t.Eu.get(e);if(r&&r.lu)return fe().add(r.key);{let s=fe();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function _m(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qA.bind(null,e),e.hu.J_=kA.bind(null,e.eventManager),e.hu.pu=DA.bind(null,e.eventManager),e}function QA(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zA.bind(null,e),e}class zo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Zw(this.persistence,new Jw,e.initialUser,this.serializer)}Du(e){return new Jg(Fl.Vi,this.serializer)}bu(e){return new oA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zo.provider={build:()=>new zo};class JA extends zo{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Te(this.persistence.referenceDelegate instanceof qo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xw(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new Jg((r=>qo.Vi(r,t)),this.serializer)}}class Xc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KA.bind(null,this.syncEngine),await CA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new VA})()}createDatastore(e){const t=wa(e.databaseInfo.databaseId),r=(function(i){return new hA(i)})(e.databaseInfo);return(function(i,a,c,l){return new gA(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new _A(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Hf(this.syncEngine,t,0)),(function(){return Ff.C()?new Ff:new aA})())}createSyncEngine(e,t){return(function(s,i,a,c,l,h,d){const p=new MA(s,i,a,c,l,h);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ie(s);W(Ar,"RemoteStore shutting down."),i.Ia.add(5),await Pi(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Xc.provider={build:()=>new Xc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ym{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="FirestoreClient";class XA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=bl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{W(tr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(tr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Wl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function hc(n,e){n.asyncQueue.verifyOperationInProgress(),W(tr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Xg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Qn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Qn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Wf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await YA(n);W(tr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Bf(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Bf(e.remoteStore,s))),n._onlineComponents=e}async function YA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(tr,"Using user provided OfflineComponentProvider");try{await hc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Qn("Error using user provided cache. Falling back to memory cache: "+t),await hc(n,new zo)}}else W(tr,"Using default OfflineComponentProvider"),await hc(n,new JA(void 0));return n._offlineComponents}async function vm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(tr,"Using user provided OnlineComponentProvider"),await Wf(n,n._uninitializedComponentsProvider._online)):(W(tr,"Using default OnlineComponentProvider"),await Wf(n,new Xc))),n._onlineComponents}function ZA(n){return vm(n).then((e=>e.syncEngine))}async function Yc(n){const e=await vm(n),t=e.eventManager;return t.onListen=LA.bind(null,e.syncEngine),t.onUnlisten=BA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=FA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=jA.bind(null,e.syncEngine),t}function e0(n,e,t={}){const r=new Kn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new ym({next:_=>{d.Ou(),a.enqueueAndForget((()=>cm(i,p))),_.fromCache&&l.source==="server"?h.reject(new K(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new lm(c,d,{includeMetadataChanges:!0,ka:!0});return am(i,p)})(await Yc(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Em(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="firestore.googleapis.com",Gf=!0;class Qf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Tm,this.ssl=Gf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Gf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ow)throw new K(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Em((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new lI;switch(r.type){case"firstParty":return new dI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Kf.get(t);r&&(W("ComponentProvider","Removing Datastore"),Kf.delete(t),r.terminate())})(this),Promise.resolve()}}function t0(n,e,t,r={}){var s;n=_n(n,Sa);const i=ds(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(zp(`https://${l}`),Wp("Firestore",!0)),a.host!==Tm&&a.host!==l&&Qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!Tr(h,c)&&(n._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=ME(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new K(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(_)}n._authCredentials=new uI(new og(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dr(this.firestore,e,this._query)}}class qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(bi(t,qe._jsonSchema))return new qe(e,r||null,new X(Ce.fromString(t.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:$e("string",qe._jsonSchemaVersion),referencePath:$e("string")};class Gn extends Dr{constructor(e,t,r){super(e,t,kl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new X(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function Br(n,e,...t){if(n=mt(n),cg("collection","path",e),n instanceof Sa){const r=Ce.fromString(e,...t);return cf(r),new Gn(n,null,r)}{if(!(n instanceof qe||n instanceof Gn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return cf(r),new Gn(n.firestore,null,r)}}function fc(n,e,...t){if(n=mt(n),arguments.length===1&&(e=bl.newId()),cg("doc","path",e),n instanceof Sa){const r=Ce.fromString(e,...t);return af(r),new qe(n,null,new X(r))}{if(!(n instanceof qe||n instanceof Gn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return af(r),new qe(n.firestore,n instanceof Gn?n.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="AsyncQueue";class Xf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Zg(this,"async_queue_retry"),this.oc=()=>{const r=uc();r&&W(Jf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=uc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=uc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Kn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!_s(e))throw e;W(Jf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,wn("INTERNAL UNHANDLED ERROR: ",Yf(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=zl.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&te(47125,{hc:Yf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Yf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class us extends Sa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Xf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xf(e),this._firestoreClient=void 0,await e}}}function n0(n,e){const t=typeof n=="object"?n:Jp(),r=typeof n=="string"?n:Mo,s=wl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=NE("firestore");i&&t0(s,...i)}return s}function Jl(n){if(n._terminated)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||r0(n),n._firestoreClient}function r0(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,l,h,d){return new PI(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Em(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new XA(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(et.fromBase64String(e))}catch(t){throw new K(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rt(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bi(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:$e("string",Rt._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jt._jsonSchemaVersion}}static fromJSON(e){if(bi(e,Jt._jsonSchema))return new Jt(e.latitude,e.longitude)}}Jt._jsonSchemaVersion="firestore/geoPoint/1.0",Jt._jsonSchema={type:$e("string",Jt._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
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
 */class Xt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bi(e,Xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Xt(e.vectorValues);throw new K(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xt._jsonSchemaVersion="firestore/vectorValue/1.0",Xt._jsonSchema={type:$e("string",Xt._jsonSchemaVersion),vectorValues:$e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=/^__.*__$/;class i0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ri(e,this.data,t,this.fieldTransforms)}}function wm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ec:n})}}class Yl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Yl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Wo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(wm(this.Ec)&&s0.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class o0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||wa(e)}Dc(e,t,r,s=!1){return new Yl({Ec:e,methodName:t,bc:r,path:Ye.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Am(n){const e=n._freezeSettings(),t=wa(n._databaseId);return new o0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function a0(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Rm("Data must be an object, but it was:",a,r);const c=bm(r,a);let l,h;if(i.merge)l=new kt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=l0(e,p,t);if(!a.contains(_))throw new K(k.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);h0(d,_)||d.push(_)}l=new kt(d),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new i0(new St(c),l,h)}function c0(n,e,t,r=!1){return Zl(t,n.Dc(r?4:3,e))}function Zl(n,e){if(Sm(n=mt(n)))return Rm("Unsupported field value:",e,n),bm(n,e);if(n instanceof Im)return(function(r,s){if(!wm(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=Zl(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ke.fromDate(r);return{timestampValue:$o(s.serializer,i)}}if(r instanceof ke){const i=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$o(s.serializer,i)}}if(r instanceof Jt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:$g(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ml(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xt)return(function(a,c){return{mapValue:{fields:{[_g]:{stringValue:yg},[Lo]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Dl(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${pa(r)}`)})(n,e)}function bm(n,e){const t={};return hg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(n,((r,s)=>{const i=Zl(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Sm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ke||n instanceof Jt||n instanceof Rt||n instanceof qe||n instanceof Im||n instanceof Xt)}function Rm(n,e,t){if(!Sm(t)||!lg(t)){const r=pa(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function l0(n,e,t){if((e=mt(e))instanceof Xl)return e._internalPath;if(typeof e=="string")return Cm(n,e);throw Wo("Field path arguments must be of type string or ",n,!1,void 0,t)}const u0=new RegExp("[~\\*/\\[\\]]");function Cm(n,e,t){if(e.search(u0)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xl(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Wo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new K(k.INVALID_ARGUMENT,c+n+l)}function h0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new f0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(eu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class f0 extends Pm{data(){return super.data()}}function eu(n,e){return typeof e=="string"?Cm(n,e):e instanceof Xl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new K(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tu{}class d0 extends tu{}function dc(n,e,...t){let r=[];e instanceof tu&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((l=>l instanceof nu)).length,c=i.filter((l=>l instanceof Ra)).length;if(a>1||a>0&&c>0)throw new K(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Ra extends d0{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ra(e,t,r)}_apply(e){const t=this._parse(e);return km(e._query,t),new Dr(e.firestore,e.converter,jc(e._query,t))}_parse(e){const t=Am(e.firestore);return(function(i,a,c,l,h,d,p){let _;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){td(p,d);const V=[];for(const O of p)V.push(ed(l,i,O));_={arrayValue:{values:V}}}else _=ed(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||td(p,d),_=c0(c,a,p,d==="in"||d==="not-in");return je.create(h,d,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pc(n,e,t){const r=e,s=eu("where",n);return Ra._create(s,r,t)}class nu extends tu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new nu(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Lt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const l of c)km(a,l),a=jc(a,l)})(e._query,t),new Dr(e.firestore,e.converter,jc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ed(n,e,t){if(typeof(t=mt(t))=="string"){if(t==="")throw new K(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sg(e)&&t.indexOf("/")!==-1)throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ce.fromString(t));if(!X.isDocumentKey(r))throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mf(n,new X(r))}if(t instanceof qe)return mf(n,t._key);throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pa(t)}.`)}function td(n,e){if(!Array.isArray(n)||n.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function km(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class p0{convertValue(e,t="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Cr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Lo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Le(a.doubleValue)));return new Xt(i)}convertGeoPoint(e){return new Jt(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=_a(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const t=Xn(e);return new ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ce.fromString(e);Te(Gg(r),9688,{name:e});const s=new pi(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Hs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yr extends Pm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(eu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=yr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}yr._jsonSchemaVersion="firestore/documentSnapshot/1.0",yr._jsonSchema={type:$e("string",yr._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class vo extends yr{data(e={}){return super.data(e)}}class vr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Hs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new vo(this._firestore,this._userDataWriter,r.key,r,new Hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new vo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Hs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new vo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Hs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:m0(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function m0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}vr._jsonSchemaVersion="firestore/querySnapshot/1.0",vr._jsonSchema={type:$e("string",vr._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class ru extends p0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function oo(n){n=_n(n,Dr);const e=_n(n.firestore,us),t=Jl(e),r=new ru(e);return Vm(n._query),e0(t,n._query).then((s=>new vr(e,r,n,s)))}function nd(n,e,t){n=_n(n,qe);const r=_n(n.firestore,us),s=g0(n.converter,e);return Dm(r,[a0(Am(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Gt.none())])}function _0(n){return Dm(_n(n.firestore,us),[new Ol(n._key,Gt.none())])}function rd(n,...e){var t,r,s;n=mt(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Zf(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Zf(e[a])){const p=e[a];e[a]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[a+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[a+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(n instanceof qe)h=_n(n.firestore,us),d=kl(n._key.path),l={next:p=>{e[a]&&e[a](y0(h,n,p))},error:e[a+1],complete:e[a+2]};else{const p=_n(n,Dr);h=_n(p.firestore,us),d=p._query;const _=new ru(h);l={next:b=>{e[a]&&e[a](new vr(h,_,p,b))},error:e[a+1],complete:e[a+2]},Vm(n._query)}return(function(_,b,V,O){const x=new ym(O),Q=new lm(b,x,V);return _.asyncQueue.enqueueAndForget((async()=>am(await Yc(_),Q))),()=>{x.Ou(),_.asyncQueue.enqueueAndForget((async()=>cm(await Yc(_),Q)))}})(Jl(h),d,c,l)}function Dm(n,e){return(function(r,s){const i=new Kn;return r.asyncQueue.enqueueAndForget((async()=>$A(await ZA(r),s,i))),i.promise})(Jl(n),e)}function y0(n,e,t){const r=t.docs.get(e._key),s=new ru(n);return new yr(n,s,e._key,r,new Hs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){gs=s})(ps),ss(new Ir("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new us(new hI(r.getProvider("auth-internal")),new pI(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),zn(tf,nf,e),zn(tf,nf,"esm2017")})();var v0="firebase",E0="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn(v0,E0,"app");function su(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Om(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T0=Om,Nm=new wi("auth","Firebase",Om());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new Tl("@firebase/auth");function I0(n,...e){Ko.logLevel<=he.WARN&&Ko.warn(`Auth (${ps}): ${n}`,...e)}function Eo(n,...e){Ko.logLevel<=he.ERROR&&Ko.error(`Auth (${ps}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n,...e){throw ou(n,...e)}function xt(n,...e){return ou(n,...e)}function iu(n,e,t){const r=Object.assign(Object.assign({},T0()),{[e]:t});return new wi("auth","Firebase",r).create(e,{appName:n.name})}function Er(n){return iu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function w0(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&tn(n,"argument-error"),iu(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ou(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Nm.create(n,...e)}function ne(n,e,...t){if(!n)throw ou(e,...t)}function pn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Eo(e),new Error(e)}function bn(n,e){n||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function A0(){return sd()==="http:"||sd()==="https:"}function sd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A0()||$E()||"connection"in navigator)?navigator.onLine:!0}function S0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.shortDelay=e,this.longDelay=t,bn(t>e,"Short delay should be less than long delay!"),this.isMobile=UE()||qE()}get(){return b0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(n,e){bn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],P0=new ki(3e4,6e4);function cu(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function vs(n,e,t,r,s={}){return Mm(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ai(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return jE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ds(n.emulatorConfig.host)&&(h.credentials="include"),xm.fetch()(await Lm(n,n.config.apiHost,t,c),h)})}async function Mm(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},R0),e);try{const s=new k0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ao(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ao(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ao(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw iu(n,d,h);tn(n,d)}}catch(s){if(s instanceof Rn)throw s;tn(n,"network-request-failed",{message:String(s)})}}async function V0(n,e,t,r,s={}){const i=await vs(n,e,t,r,s);return"mfaPendingCredential"in i&&tn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Lm(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?au(n.config,s):`${n.config.apiScheme}://${s}`;return C0.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class k0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),P0.get())})}}function ao(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=xt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(n,e){return vs(n,"POST","/v1/accounts:delete",e)}async function Go(n,e){return vs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O0(n,e=!1){const t=mt(n),r=await t.getIdToken(e),s=lu(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:si(gc(s.auth_time)),issuedAtTime:si(gc(s.iat)),expirationTime:si(gc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gc(n){return Number(n)*1e3}function lu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=jp(t);return s?JSON.parse(s):(Eo("Failed to decode base64 JWT payload"),null)}catch(s){return Eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function id(n){const e=lu(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Rn&&N0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function N0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await yi(n,Go(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Fm(i.providerUserInfo):[],c=L0(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new el(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function M0(n){const e=mt(n);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function L0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fm(n){return n.map(e=>{var{providerId:t}=e,r=su(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(n,e){const t=await Mm(n,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Lm(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&ds(n.emulatorConfig.host)&&(l.credentials="include"),xm.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function U0(n,e){return vs(n,"POST","/v2/accounts:revokeToken",cu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=id(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await F0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Zr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zr,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=su(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new x0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new el(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await yi(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return O0(this,e)}reload(){return M0(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Er(this.auth));const e=await this.getIdToken();return await yi(this,D0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,d;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,x=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,Q=(h=t.createdAt)!==null&&h!==void 0?h:void 0,$=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:G,emailVerified:z,isAnonymous:oe,providerData:ye,stsTokenManager:I}=t;ne(G&&I,e,"internal-error");const m=Zr.fromJSON(this.name,I);ne(typeof G=="string",e,"internal-error"),Dn(p,e.name),Dn(_,e.name),ne(typeof z=="boolean",e,"internal-error"),ne(typeof oe=="boolean",e,"internal-error"),Dn(b,e.name),Dn(V,e.name),Dn(O,e.name),Dn(x,e.name),Dn(Q,e.name),Dn($,e.name);const y=new Dt({uid:G,auth:e,email:_,emailVerified:z,displayName:p,isAnonymous:oe,photoURL:V,phoneNumber:b,tenantId:O,stsTokenManager:m,createdAt:Q,lastLoginAt:$});return ye&&Array.isArray(ye)&&(y.providerData=ye.map(T=>Object.assign({},T))),x&&(y._redirectEventId=x),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Zr;s.updateFromServerResponse(t);const i=new Dt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Fm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Zr;c.updateFromIdToken(r);const l=new Dt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new el(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Map;function gn(n){bn(n instanceof Function,"Expected a class definition");let e=od.get(n);return e?(bn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,od.set(n,e),e)}/**
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
 */class Um{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Um.type="NONE";const ad=Um;/**
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
 */function To(n,e,t){return`firebase:${n}:${e}:${t}`}class es{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=To(this.userKey,s.apiKey,i),this.fullPersistenceKey=To("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Go(this.auth,{idToken:e}).catch(()=>{});return t?Dt._fromGetAccountInfoResponse(this.auth,t,e):null}return Dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new es(gn(ad),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||gn(ad);const a=To(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const _=await Go(e,{idToken:d}).catch(()=>{});if(!_)break;p=await Dt._fromGetAccountInfoResponse(e,_,d)}else p=Dt._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new es(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new es(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zm(e))return"Blackberry";if(Wm(e))return"Webos";if(jm(e))return"Safari";if((e.includes("chrome/")||$m(e))&&!e.includes("edge/"))return"Chrome";if(Hm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bm(n=ut()){return/firefox\//i.test(n)}function jm(n=ut()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $m(n=ut()){return/crios\//i.test(n)}function qm(n=ut()){return/iemobile/i.test(n)}function Hm(n=ut()){return/android/i.test(n)}function zm(n=ut()){return/blackberry/i.test(n)}function Wm(n=ut()){return/webos/i.test(n)}function uu(n=ut()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function B0(n=ut()){var e;return uu(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function j0(){return HE()&&document.documentMode===10}function Km(n=ut()){return uu(n)||Hm(n)||Wm(n)||zm(n)||/windows phone/i.test(n)||qm(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n,e=[]){let t;switch(n){case"Browser":t=cd(ut());break;case"Worker":t=`${cd(ut())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ps}/${r}`}/**
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
 */class $0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function q0(n,e={}){return vs(n,"GET","/v2/passwordPolicy",cu(n,e))}/**
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
 */const H0=6;class z0{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:H0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ld(this),this.idTokenSubscription=new ld(this),this.beforeStateQueue=new $0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Go(this,{idToken:e}),r=await Dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(Er(this));const t=e?mt(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(Er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await q0(this),t=new z0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new wi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await U0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[gn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&I0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ca(n){return mt(n)}class ld{constructor(e){this.auth=e,this.observer=null,this.addObserver=YE(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K0(n){hu=n}function G0(n){return hu.loadJS(n)}function Q0(){return hu.gapiScript}function J0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(n,e){const t=wl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Tr(i,e??{}))return s;tn(s,"already-initialized")}return t.initialize({options:e})}function Y0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(gn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Z0(n,e,t){const r=Ca(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Qm(e),{host:a,port:c}=eb(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(Tr(h,r.config.emulator)&&Tr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ds(a)?(zp(`${i}//${a}${l}`),Wp("Auth",!0)):tb()}function Qm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function eb(n){const e=Qm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ud(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:ud(a)}}}function ud(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function tb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,t){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(n,e){return V0(n,"POST","/v1/accounts:signInWithIdp",cu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="http://localhost";class br extends Jm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=su(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new br(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ts(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ts(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ts(e,t)}buildRequest(){const e={requestUri:nb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ai(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Di extends fu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Di{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return br._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return dn.credential(t,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Di{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Di{constructor(){super("twitter.com")}static credential(e,t){return br._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return jn.credential(t,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Dt._fromIdTokenResponse(e,r,s),a=hd(r);return new hs({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=hd(r);return new hs({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function hd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Rn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Jo(e,t,r,s)}}function Xm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(n,i,e,r):i})}async function rb(n,e,t=!1){const r=await yi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hs._forOperation(n,"link",r)}/**
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
 */async function sb(n,e,t=!1){const{auth:r}=n;if(Vt(r.app))return Promise.reject(Er(r));const s="reauthenticate";try{const i=await yi(n,Xm(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=lu(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(n.uid===c,r,"user-mismatch"),hs._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ib(n,e,t=!1){if(Vt(n.app))return Promise.reject(Er(n));const r="signIn",s=await Xm(n,r,e),i=await hs._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function ob(n,e,t,r){return mt(n).onIdTokenChanged(e,t,r)}function ab(n,e,t){return mt(n).beforeAuthStateChanged(e,t)}function cb(n,e,t,r){return mt(n).onAuthStateChanged(e,t,r)}function lb(n){return mt(n).signOut()}const Xo="__sak";/**
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
 */class Ym{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=1e3,hb=10;class Zm extends Ym{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Km(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);j0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hb):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zm.type="LOCAL";const fb=Zm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_ extends Ym{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}e_.type="SESSION";const t_=e_;/**
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
 */function db(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await db(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class pb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=du("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function gb(n){Yt().location.href=n}/**
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
 */function n_(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function mb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _b(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yb(){return n_()?self:null}/**
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
 */const r_="firebaseLocalStorageDb",vb=1,Yo="firebaseLocalStorage",s_="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Va(n,e){return n.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function Eb(){const n=indexedDB.deleteDatabase(r_);return new Oi(n).toPromise()}function tl(){const n=indexedDB.open(r_,vb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Yo,{keyPath:s_})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Yo)?e(r):(r.close(),await Eb(),e(await tl()))})})}async function fd(n,e,t){const r=Va(n,!0).put({[s_]:e,value:t});return new Oi(r).toPromise()}async function Tb(n,e){const t=Va(n,!1).get(e),r=await new Oi(t).toPromise();return r===void 0?null:r.value}function dd(n,e){const t=Va(n,!0).delete(e);return new Oi(t).toPromise()}const Ib=800,wb=3;class i_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>wb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pa._getInstance(yb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await mb(),!this.activeServiceWorker)return;this.sender=new pb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_b()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tl();return await fd(e,Xo,"1"),await dd(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Tb(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Va(s,!1).getAll();return new Oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ib)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i_.type="LOCAL";const Ab=i_;new ki(3e4,6e4);/**
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
 */function o_(n,e){return e?gn(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class pu extends Jm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ts(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bb(n){return ib(n.auth,new pu(n),n.bypassAuthState)}function Sb(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),sb(t,new pu(n),n.bypassAuthState)}async function Rb(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),rb(t,new pu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bb;case"linkViaPopup":case"linkViaRedirect":return Rb;case"reauthViaPopup":case"reauthViaRedirect":return Sb;default:tn(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=new ki(2e3,1e4);async function Pb(n,e,t){if(Vt(n.app))return Promise.reject(xt(n,"operation-not-supported-in-this-environment"));const r=Ca(n);w0(n,e,fu);const s=o_(r,t);return new gr(r,"signInViaPopup",e,s).executeNotNull()}class gr extends a_{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gr.currentPopupAction&&gr.currentPopupAction.cancel(),gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=du();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cb.get())};e()}}gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb="pendingRedirect",Io=new Map;class kb extends a_{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Io.get(this.auth._key());if(!e){try{const r=await Db(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Io.set(this.auth._key(),e)}return this.bypassAuthState||Io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Db(n,e){const t=xb(e),r=Nb(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Ob(n,e){Io.set(n._key(),e)}function Nb(n){return gn(n._redirectPersistence)}function xb(n){return To(Vb,n.config.apiKey,n.name)}async function Mb(n,e,t=!1){if(Vt(n.app))return Promise.reject(Er(n));const r=Ca(n),s=o_(r,e),a=await new kb(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=600*1e3;class Fb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ub(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!c_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(xt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lb&&this.cachedEventUids.clear(),this.cachedEventUids.has(pd(e))}saveEventToCache(e){this.cachedEventUids.add(pd(e)),this.lastProcessedEventTime=Date.now()}}function pd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function c_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ub(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return c_(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(n,e={}){return vs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$b=/^https?/;async function qb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Bb(n);for(const t of e)try{if(Hb(t))return}catch{}tn(n,"unauthorized-domain")}function Hb(n){const e=Zc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!$b.test(t))return!1;if(jb.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zb=new ki(3e4,6e4);function gd(){const n=Yt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Wb(n){return new Promise((e,t)=>{var r,s,i;function a(){gd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gd(),t(xt(n,"network-request-failed"))},timeout:zb.get()})}if(!((s=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Yt().gapi)===null||i===void 0)&&i.load)a();else{const c=J0("iframefcb");return Yt()[c]=()=>{gapi.load?a():t(xt(n,"network-request-failed"))},G0(`${Q0()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw wo=null,e})}let wo=null;function Kb(n){return wo=wo||Wb(n),wo}/**
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
 */const Gb=new ki(5e3,15e3),Qb="__/auth/iframe",Jb="emulator/auth/iframe",Xb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zb(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?au(e,Jb):`https://${n.config.authDomain}/${Qb}`,r={apiKey:e.apiKey,appName:n.name,v:ps},s=Yb.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ai(r).slice(1)}`}async function eS(n){const e=await Kb(n),t=Yt().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:Zb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=xt(n,"network-request-failed"),c=Yt().setTimeout(()=>{i(a)},Gb.get());function l(){Yt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const tS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nS=500,rS=600,sS="_blank",iS="http://localhost";class md{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oS(n,e,t,r=nS,s=rS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},tS),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();t&&(c=$m(h)?sS:t),Bm(h)&&(e=e||iS,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[b,V])=>`${_}${b}=${V},`,"");if(B0(h)&&c!=="_self")return aS(e||"",c),new md(null);const p=window.open(e||"",c,d);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new md(p)}function aS(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const cS="__/auth/handler",lS="emulator/auth/handler",uS=encodeURIComponent("fac");async function _d(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ps,eventId:s};if(e instanceof fu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",XE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Di){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${uS}=${encodeURIComponent(l)}`:"";return`${hS(n)}?${Ai(c).slice(1)}${h}`}function hS({config:n}){return n.emulator?au(n,lS):`https://${n.authDomain}/${cS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="webStorageSupport";class fS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t_,this._completeRedirectFn=Mb,this._overrideRedirectResult=Ob}async _openPopup(e,t,r,s){var i;bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await _d(e,t,r,Zc(),s);return oS(e,a,du())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await _d(e,t,r,Zc(),s);return gb(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await eS(e),r=new Fb(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mc,{type:mc},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mc];a!==void 0&&t(!!a),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Km()||jm()||uu()}}const dS=fS;var yd="@firebase/auth",vd="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mS(n){ss(new Ir("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gm(n)},h=new W0(r,s,i,l);return Y0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ss(new Ir("auth-internal",e=>{const t=Ca(e.getProvider("auth").getImmediate());return(r=>new pS(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(yd,vd,gS(n)),zn(yd,vd,"esm2017")}/**
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
 */const _S=300,yS=Hp("authIdTokenMaxAge")||_S;let Ed=null;const vS=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>yS)return;const s=t==null?void 0:t.token;Ed!==s&&(Ed=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ES(n=Jp()){const e=wl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=X0(n,{popupRedirectResolver:dS,persistence:[Ab,fb,t_]}),r=Hp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=vS(i.toString());ab(t,a,()=>a(t.currentUser)),ob(t,c=>a(c))}}const s=$p("auth");return s&&Z0(t,`http://${s}`),t}function TS(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}K0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=xt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",TS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mS("Browser");const IS={apiKey:"AIzaSyCoqylE0ZFq4IRADFlaCG_SM6U7rZ03b30",authDomain:"beverageshop-c8498.firebaseapp.com",projectId:"beverageshop-c8498",storageBucket:"beverageshop-c8498.firebasestorage.app",messagingSenderId:"1079307424887",appId:"1:1079307424887:web:f814356d70de77cedde272",measurementId:"G-K5M6E8XF6B"},l_=Qp(IS),cn=n0(l_),_c=ES(l_),wS=new dn;let On=null;const Es=fE("BeverageStore",{state:()=>({temps:$h,currentTemp:$h[0],bases:[],currentBase:null,syrups:[],currentSyrup:null,creamers:[],currentCreamer:null,beverages:[],currentBeverage:null,currentName:"",user:null}),actions:{async init(){const n=await oo(Br(cn,"bases"));this.bases=n.docs.map(r=>r.data()),this.currentBase=this.bases[0]??null;const e=await oo(Br(cn,"syrups"));this.syrups=e.docs.map(r=>r.data()),this.currentSyrup=this.syrups[0]??null;const t=await oo(Br(cn,"creamers"));this.creamers=t.docs.map(r=>r.data()),this.currentCreamer=this.creamers[0]??null},setUser(n){if(this.user=n,On&&(On(),On=null),!n){this.beverages=[],this.currentBeverage=null;return}const e=dc(Br(cn,"beverages"),pc("userId","==",n.uid));On=rd(e,t=>{this.beverages=t.docs.map(r=>r.data())})},async makeBeverage(){if(!this.user)return"No user logged in, please sign in first.";if(!this.currentBase||!this.currentSyrup||!this.currentCreamer||!this.currentName.trim())return"Please complete all beverage options and the name before making a beverage.";const n=this.currentTemp,e=this.currentBase,t=this.currentSyrup,r=this.currentCreamer,s=this.user.uid,i=this.currentName.trim(),a=this.beverages.filter(_=>_.name.toLowerCase()===i.toLowerCase());On&&(On(),On=null);const c=dc(Br(cn,"beverages"),pc("userId","==",s)),l=await oo(c);await Promise.all(l.docs.map(_=>_0(fc(cn,"beverages",_.id)))),await Promise.all(a.map(_=>nd(fc(cn,"beverages",_.id),{..._,userId:s})));const h=`${s}_${Date.now()}`,d={id:h,name:this.currentName.trim(),temp:n,base:e,syrup:t,creamer:r,userId:s};await nd(fc(cn,"beverages",h),d);const p=dc(Br(cn,"beverages"),pc("userId","==",s));return On=rd(p,_=>{this.beverages=_.docs.map(b=>b.data())}),this.currentBeverage=d,this.currentName="",`Beverage ${d.name} made successfully!`},showBeverage(){},loadBeverage(n){this.currentTemp=n.temp,this.currentBase=n.base,this.currentSyrup=n.syrup,this.currentCreamer=n.creamer,this.currentBeverage=n}}}),AS=Ti({__name:"Syrup",setup(n){const e=Es();return(t,r)=>{var s;return pe(),Ve("div",{class:"syrup",style:fs({"--texture-color":(s=we(e).currentSyrup)==null?void 0:s.color})},null,4)}}}),bS=Rr(AS,[["__scopeId","data-v-2fa3a41a"]]),SS=Ti({__name:"Base",setup(n){const e=Es();return(t,r)=>{var s;return pe(),Ve("div",{class:"baseBeverage",style:fs({backgroundColor:(s=we(e).currentBase)==null?void 0:s.color})},null,4)}}}),RS=Rr(SS,[["__scopeId","data-v-8cc1f7b4"]]),CS={class:"froth"},PS=Ti({__name:"Creamer",setup(n){const e=Es();return(t,r)=>(pe(),Ve("div",CS,[(pe(),Ve(Fe,null,Ln(5,()=>{var s;return Ie("div",{class:"foam",style:fs({backgroundColor:(s=we(e).currentCreamer)==null?void 0:s.color})},null,4)}),64))]))}}),VS=Rr(PS,[["__scopeId","data-v-84d3ef89"]]),kS={},DS={id:"steam"},OS={class:"stream"};function NS(n,e){return pe(),Ve("div",DS,[(pe(),Ve(Fe,null,Ln(3,()=>Ie("div",OS)),64))])}const xS=Rr(kS,[["render",NS]]),MS={},LS={id:"condensation"},FS={class:"flake"};function US(n,e){return pe(),Ve("div",LS,[(pe(),Ve(Fe,null,Ln(3,()=>Ie("div",FS)),64))])}const BS=Rr(MS,[["render",US]]),jS=Ti({__name:"Beverage",props:{isIced:{type:Boolean}},setup(n){const e=Es();return(t,r)=>(pe(),Fn(bE,null,{default:Us(()=>[n.isIced?(pe(),Fn(BS,{key:0})):(pe(),Fn(xS,{key:1})),It(TE,null,{top:Us(()=>{var s;return[((s=we(e).currentCreamer)==null?void 0:s.color)!=="transparent"?(pe(),Fn(VS,{key:0})):Vo("",!0)]}),mid:Us(()=>{var s;return[((s=we(e).currentSyrup)==null?void 0:s.color)!=="transparent"?(pe(),Fn(bS,{key:0})):Vo("",!0)]}),bottom:Us(()=>[It(RS)]),_:1})]),_:1}))}}),$S=["id","value"],qS=["id","value"],HS=["id","value"],zS=["id","value"],WS={class:"auth-row"},KS={key:0,class:"auth-signed-in"},GS={key:1},QS=["disabled"],JS={key:0},XS={key:1},YS={class:"saved-beverages"},ZS={class:"selected"},eR=["name","onChange"],tR=Ti({__name:"App",setup(n){const e=Es(),t=Gd(""),r=vl(()=>e.currentBeverage?e.beverages.filter(c=>c.name.toLowerCase()===e.currentBeverage.name.toLowerCase()):[]);cb(_c,c=>{e.setUser(c)});const s=async()=>{try{await Pb(_c,wS)}catch(c){t.value="Sign-in failed: "+(c.message||"Unknown error")}},i=async()=>{try{await lb(_c)}catch(c){t.value="Sign-out failed: "+(c.message||"Unknown error")}},a=async()=>{t.value=await e.makeBeverage()};return(c,l)=>(pe(),Ve(Fe,null,[Ie("div",null,[It(jS,{isIced:we(e).currentTemp==="Cold"},null,8,["isIced"]),Ie("ul",null,[Ie("li",null,[(pe(!0),Ve(Fe,null,Ln(we(e).temps,h=>(pe(),Ve("label",{key:h},[Ls(Ie("input",{type:"radio",name:"temperature",id:`r${h}`,value:h,"onUpdate:modelValue":l[0]||(l[0]=d=>we(e).currentTemp=d)},null,8,$S),[[eo,we(e).currentTemp]]),$r(" "+Nn(h),1)]))),128))])]),Ie("ul",null,[Ie("li",null,[(pe(!0),Ve(Fe,null,Ln(we(e).bases,h=>(pe(),Ve("label",{key:h.id},[Ls(Ie("input",{type:"radio",name:"bases",id:`r${h.id}`,value:h,"onUpdate:modelValue":l[1]||(l[1]=d=>we(e).currentBase=d)},null,8,qS),[[eo,we(e).currentBase]]),$r(" "+Nn(h.name),1)]))),128))])]),Ie("ul",null,[Ie("li",null,[(pe(!0),Ve(Fe,null,Ln(we(e).syrups,h=>(pe(),Ve("label",{key:h.id},[Ls(Ie("input",{type:"radio",name:"syrups",id:`r${h.id}`,value:h,"onUpdate:modelValue":l[2]||(l[2]=d=>we(e).currentSyrup=d)},null,8,HS),[[eo,we(e).currentSyrup]]),$r(" "+Nn(h.name),1)]))),128))])]),Ie("ul",null,[Ie("li",null,[(pe(!0),Ve(Fe,null,Ln(we(e).creamers,h=>(pe(),Ve("label",{key:h.id},[Ls(Ie("input",{type:"radio",name:"creamers",id:`r${h.id}`,value:h,"onUpdate:modelValue":l[3]||(l[3]=d=>we(e).currentCreamer=d)},null,8,zS),[[eo,we(e).currentCreamer]]),$r(" "+Nn(h.name),1)]))),128))])]),Ie("div",WS,[we(e).user?(pe(),Ve("div",KS,[Ie("p",null,"Signed in as: "+Nn(we(e).user.displayName||we(e).user.email),1),Ie("button",{onClick:i},"Sign Out")])):(pe(),Ve("div",GS,[Ie("button",{onClick:s},"Sign in with Google")]))]),Ls(Ie("input",{type:"text",placeholder:"Beverage Name","onUpdate:modelValue":l[4]||(l[4]=h=>we(e).currentName=h)},null,512),[[Zv,we(e).currentName]]),Ie("button",{onClick:a,disabled:!we(e).user},"🍺 Make Beverage",8,QS),t.value?(pe(),Ve("p",JS,Nn(t.value),1)):Vo("",!0),we(e).user&&r.value.length>0?(pe(),Ve("div",XS,[Ie("ul",YS,[(pe(!0),Ve(Fe,null,Ln(r.value,h=>(pe(),Ve("li",{key:h.id},[Ie("label",ZS,[Ie("input",{type:"radio",name:`savedBeverage_${h.id}`,checked:!0,onChange:d=>we(e).loadBeverage(h)},null,40,eR),$r(" "+Nn(h.name),1)])]))),128))])])):Vo("",!0)]),l[5]||(l[5]=Ie("div",{id:"beverage-container"},null,-1))],64))}}),u_=oE();u_.use(_E);const h_=rE(tR);h_.use(u_);async function nR(){await Es().init(),h_.mount("#app")}nR();
