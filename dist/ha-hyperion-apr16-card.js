var HaHyperionApr16Card=function(g){"use strict";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bt;const I=globalThis,F=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),Q=new WeakMap;let tt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Q.set(e,t))}return t}toString(){return this.cssText}};const mt=n=>new tt(typeof n=="string"?n:n+"",void 0,W),$t=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new tt(e,n,W)},yt=(n,t)=>{if(F)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=I.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},et=F?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return mt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:xt,getOwnPropertyDescriptor:At,getOwnPropertyNames:wt,getOwnPropertySymbols:Et,getPrototypeOf:St}=Object,m=globalThis,st=m.trustedTypes,kt=st?st.emptyScript:"",q=m.reactiveElementPolyfillSupport,C=(n,t)=>n,z={toAttribute(n,t){switch(t){case Boolean:n=n?kt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Y=(n,t)=>!_t(n,t),it={attribute:!0,type:String,converter:z,reflect:!1,useDefault:!1,hasChanged:Y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&xt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=At(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const l=i==null?void 0:i.call(this);r==null||r.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??it}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=St(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,s=[...wt(e),...Et(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(et(i))}else t!==void 0&&e.push(et(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:z).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var r,o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const l=s.getPropertyOptions(i),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:z;this._$Em=i;const d=a.fromAttribute(e,l.type);this[i]=d??((o=this._$Ej)==null?void 0:o.get(i))??d,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){var o;if(t!==void 0){const l=this.constructor;if(i===!1&&(r=this[t]),s??(s=l.getPropertyOptions(t)),!((s.hasChanged??Y)(r,e)||s.useDefault&&s.reflect&&r===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(l._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i){const{wrapped:l}=o,a=this[r];l!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[C("elementProperties")]=new Map,w[C("finalized")]=new Map,q==null||q({ReactiveElement:w}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,nt=n=>n,D=M.trustedTypes,ot=D?D.createPolicy("lit-html",{createHTML:n=>n}):void 0,rt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,at="?"+$,Ct=`<${at}>`,y=document,P=()=>y.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",G=Array.isArray,Mt=n=>G(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",X=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ct=/>/g,_=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dt=/'/g,pt=/"/g,ht=/^(?:script|style|textarea|title)$/i,Pt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),v=Pt(1),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ut=new WeakMap,x=y.createTreeWalker(y,129);function ft(n,t){if(!G(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}const Ht=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":t===3?"<math>":"",o=O;for(let l=0;l<e;l++){const a=n[l];let d,h,c=-1,f=0;for(;f<a.length&&(o.lastIndex=f,h=o.exec(a),h!==null);)f=o.lastIndex,o===O?h[1]==="!--"?o=lt:h[1]!==void 0?o=ct:h[2]!==void 0?(ht.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=_):h[3]!==void 0&&(o=_):o===_?h[0]===">"?(o=i??O,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,d=h[1],o=h[3]===void 0?_:h[3]==='"'?pt:dt):o===pt||o===dt?o=_:o===lt||o===ct?o=O:(o=_,i=void 0);const b=o===_&&n[l+1].startsWith("/>")?" ":"";r+=o===O?a+Ct:c>=0?(s.push(d),a.slice(0,c)+rt+a.slice(c)+$+b):a+$+(c===-2?l:b)}return[ft(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class T{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const l=t.length-1,a=this.parts,[d,h]=Ht(t,e);if(this.el=T.createElement(d,s),x.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=x.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(rt)){const f=h[o++],b=i.getAttribute(c).split($),k=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:k[2],strings:b,ctor:k[1]==="."?Tt:k[1]==="?"?Ut:k[1]==="@"?Nt:B}),i.removeAttribute(c)}else c.startsWith($)&&(a.push({type:6,index:r}),i.removeAttribute(c));if(ht.test(i.tagName)){const c=i.textContent.split($),f=c.length-1;if(f>0){i.textContent=D?D.emptyScript:"";for(let b=0;b<f;b++)i.append(c[b],P()),x.nextNode(),a.push({type:2,index:++r});i.append(c[f],P())}}}else if(i.nodeType===8)if(i.data===at)a.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf($,c+1))!==-1;)a.push({type:7,index:r}),c+=$.length-1}r++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function S(n,t,e=n,s){var o,l;if(t===E)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const r=H(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=S(n,i._$AS(n,t.values),i,s)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??y).importNode(e,!0);x.currentNode=i;let r=x.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new U(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new Rt(r,this,t)),this._$AV.push(d),a=s[++l]}o!==(a==null?void 0:a.index)&&(r=x.nextNode(),o++)}return x.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),H(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(ft(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const o=new Ot(i,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=ut.get(t.strings);return e===void 0&&ut.set(t.strings,e=new T(t)),e}k(t){G(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new U(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const i=nt(t).nextSibling;nt(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=S(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const l=t;let a,d;for(t=r[0],a=0;a<r.length-1;a++)d=S(this,l[s+a],e,a),d===E&&(d=this._$AH[a]),o||(o=!H(d)||d!==this._$AH[a]),d===p?t=p:t!==p&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tt extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ut extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Nt extends B{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??p)===E)return;const s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const Z=M.litHtmlPolyfillSupport;Z==null||Z(T,U),(M.litHtmlVersions??(M.litHtmlVersions=[])).push("3.3.3");const It=(n,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new U(t.insertBefore(P(),r),r,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis;class N extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=It(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}}N._$litElement$=!0,N.finalized=!0,(bt=A.litElementHydrateSupport)==null||bt.call(A,{LitElement:N});const J=A.litElementPolyfillSupport;J==null||J({LitElement:N}),(A.litElementVersions??(A.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:Y},Bt=(n=Dt,t,e)=>{const{kind:s,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(e.name,n),s==="accessor"){const{name:o}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,n,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,n,l),l}}}if(s==="setter"){const{name:o}=e;return function(l){const a=this[o];t.call(this,l),this.requestUpdate(o,a,n,!0,l)}}throw Error("Unsupported decorator location: "+s)};function K(n){return(t,e)=>typeof e=="object"?Bt(n,t,e):((s,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(n){return K({...n,state:!0,attribute:!1})}var Lt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,R=(n,t,e,s)=>{for(var i=s>1?void 0:s?jt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Lt(t,e,i),i};return g.HaHyperionApr16Card=class extends N{constructor(){super(...arguments),this.activeMenu="main",this.showInfoModal=!1,this.customChannelLayout="7.3.6"}setConfig(t){if(!t.entity)throw new Error("Please define a media_player entity");this.config=t,(t.channel_layout||t.channels)&&(this.customChannelLayout=t.channel_layout||t.channels)}getCardSize(){return 5}_togglePower(){const t=this.hass.states[this.config.entity],e=(t==null?void 0:t.state)!=="unavailable"&&t.state!=="off";this.hass.callService("media_player",e?"turn_off":"turn_on",{entity_id:this.config.entity})}_toggleMute(){var s;const t=this.hass.states[this.config.entity],e=((s=t==null?void 0:t.attributes)==null?void 0:s.is_volume_muted)??!1;this.hass.callService("media_player","volume_mute",{entity_id:this.config.entity,is_volume_muted:!e})}_setVolume(t){const e=parseFloat(t.target.value);this.hass.callService("media_player","volume_set",{entity_id:this.config.entity,volume_level:e})}_selectSource(t){const e=t.target.value;this.hass.callService("media_player","select_source",{entity_id:this.config.entity,source:e})}_selectSoundMode(t){const e=t.target.value;this.hass.callService("media_player","select_sound_mode",{entity_id:this.config.entity,sound_mode:e})}_setCustomAttr(t,e){const s=parseFloat(e.target.value);this.hass.callService("hyperion_apr16","set_audio_config",{entity_id:this.config.entity,[t]:s})}_setBrightness(t){const e=parseInt(t.target.value,10);this.hass.callService("hyperion_apr16","set_display_brightness",{entity_id:this.config.entity,brightness:e})}_rebootDevice(){confirm("Are you sure you want to reboot the AudioControl Hyperion APR-16?")&&this.hass.callService("hyperion_apr16","reboot",{entity_id:this.config.entity})}_triggerHpd(){this.hass.callService("hyperion_apr16","trigger_hpd",{entity_id:this.config.entity})}render(){if(!this.hass||!this.config)return v``;const t=this.hass.states[this.config.entity];if(!t)return v`
        <ha-card style="padding: 16px; color: #ef4444; background: #12151c;">
          Entity not found: ${this.config.entity}
        </ha-card>
      `;const e=t.attributes,s=t.state!=="unavailable"&&t.state!=="off",i=e.volume_level_db??"-20.0",r=e.volume_level??.5,o=e.is_volume_muted??!1,l=e.source??"HDMI 1",a=e.sound_mode??"DTS NEURAL:X",d=e.source_list||["HDMI 1","HDMI 2","eARC","Media","Analog"],h=e.sound_mode_list||["DTS:NEURAL:X","Dolby Atmos","Native","Stereo Direct"],c=e.channel_layout||e.channels||this.customChannelLayout,f=e.display_brightness??100,b=e.firmware_version??"v1.4.2-build88",k=e.ip_address??"192.168.1.150",Vt=e.mac_address??"00:1A:2B:3C:4D:5E",Ft=e.uptime??"4 days, 12 hours",L=e.bass??0,j=e.treble??0,V=e.channel_trim??0,vt=e.lipsync_delay??0;return v`
      <ha-card class="hyperion-display">
        <!-- Info Modal Overlay -->
        ${this.showInfoModal?v`
          <div class="info-modal">
            <div class="modal-header">
              <span>HARDWARE SYSTEM INFO</span>
              <button class="close-modal-btn" @click="${()=>this.showInfoModal=!1}">✕</button>
            </div>
            <div class="modal-body">
              <div class="info-row"><span>Device Model:</span> <strong>AudioControl Hyperion APR-16</strong></div>
              <div class="info-row"><span>Firmware Version:</span> <strong>${b}</strong></div>
              <div class="info-row"><span>Channel Layout:</span> <strong>${c}</strong></div>
              <div class="info-row"><span>IP Address:</span> <strong class="mono">${k}</strong></div>
              <div class="info-row"><span>MAC Address:</span> <strong class="mono">${Vt}</strong></div>
              <div class="info-row"><span>System Uptime:</span> <strong>${Ft}</strong></div>
              <div class="info-row"><span>DSP Core:</span> <strong>SHARC Audio Engine (48kHz)</strong></div>
            </div>
            <div class="modal-footer">
              <button class="modal-action-btn" @click="${()=>this.showInfoModal=!1}">CLOSE</button>
            </div>
          </div>
        `:""}

        <div class="header">
          <span class="brand brand-clickable" @click="${()=>this.showInfoModal=!0}" title="Click for System Info">
            AUDIOCONTROL HYPERION APR-16 ℹ️
          </span>
          <div class="badges">
            <button class="badge-btn ${s?"online":"offline"}" @click="${this._togglePower}" title="Click to toggle power">
              ${s?"🟢 ONLINE":"🔴 OFFLINE"}
            </button>
            <span class="badge channel">${c}</span>
          </div>
        </div>

        <div class="nav-tabs">
          <button class="tab-btn ${this.activeMenu==="main"?"active":""}" @click="${()=>this.activeMenu="main"}">FRONT PANEL</button>
          <button class="tab-btn ${this.activeMenu==="config"?"active":""}" @click="${()=>this.activeMenu="config"}">AUDIO CONFIG</button>
          <button class="tab-btn ${this.activeMenu==="system"?"active":""}" @click="${()=>this.activeMenu="system"}">SYSTEM</button>
        </div>

        ${this.activeMenu==="main"?v`
          <div class="display-core">
            <div class="decoder-info">
              <span class="codec-tag">${a}</span>
              <span class="sub-meta">Dirac Live ART Active • 48kHz</span>
            </div>

            <div class="volume-container">
              <div class="volume-header-row">
                <span class="section-label">MASTER VOLUME</span>
                <div class="volume-numeric">${i} <span class="unit">dB</span></div>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                .value="${r}"
                @input="${this._setVolume}"
                class="hyperion-slider"
              />
            </div>

            <div class="status-row">
              <span class="source-indicator">ACTIVE INPUT: <strong>${l}</strong></span>
              <button class="mute-btn ${o?"active":""}" @click="${this._toggleMute}">
                ${o?"🔇 MUTE: ON":"🔊 MUTE: OFF"}
              </button>
            </div>
          </div>

          <div class="selectors-grid">
            <div class="selector-group">
              <label>INPUT SOURCE</label>
              <select .value="${l}" @change="${this._selectSource}">
                ${d.map(u=>v`<option value="${u}" ?selected="${l===u}">${u}</option>`)}
              </select>
            </div>

            <div class="selector-group">
              <label>AUDIO UPMIXER</label>
              <select .value="${a}" @change="${this._selectSoundMode}">
                ${h.map(u=>v`<option value="${u}" ?selected="${a===u}">${u}</option>`)}
              </select>
            </div>
          </div>
        `:this.activeMenu==="config"?v`
          <div class="config-panel">
            <div class="config-title">PER-INPUT AUDIO CONFIGURATION</div>

            <div class="center-slider-group">
              <div class="slider-info"><span>BASS</span><span class="val">${L>0?`+${L}`:L} dB</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="-12" max="12" step="0.5" .value="${L}" @input="${u=>this._setCustomAttr("bass",u)}" class="center-slider" />
                <div class="track-ticks">
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick center-tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                </div>
              </div>
              <div class="slider-ticks"><span>-12dB</span><span>-6dB</span><span>0dB</span><span>+6dB</span><span>+12dB</span></div>
            </div>

            <div class="center-slider-group">
              <div class="slider-info"><span>TREBLE</span><span class="val">${j>0?`+${j}`:j} dB</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="-12" max="12" step="0.5" .value="${j}" @input="${u=>this._setCustomAttr("treble",u)}" class="center-slider" />
                <div class="track-ticks">
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick center-tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                </div>
              </div>
              <div class="slider-ticks"><span>-12dB</span><span>-6dB</span><span>0dB</span><span>+6dB</span><span>+12dB</span></div>
            </div>

            <div class="center-slider-group">
              <div class="slider-info"><span>CHANNEL TRIM</span><span class="val">${V>0?`+${V}`:V} dB</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="-12" max="12" step="0.5" .value="${V}" @input="${u=>this._setCustomAttr("channel_trim",u)}" class="center-slider" />
                <div class="track-ticks">
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick center-tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                </div>
              </div>
              <div class="slider-ticks"><span>-12dB</span><span>-6dB</span><span>0dB</span><span>+6dB</span><span>+12dB</span></div>
            </div>

            <div class="center-slider-group">
              <div class="slider-info"><span>LIPSYNC DELAY</span><span class="val">${vt} ms</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="0" max="250" step="5" .value="${vt}" @input="${u=>this._setCustomAttr("lipsync_delay",u)}" class="center-slider" />
                <div class="track-ticks">
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick center-tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                </div>
              </div>
              <div class="slider-ticks"><span>0ms</span><span>62ms</span><span>125ms</span><span>187ms</span><span>250ms</span></div>
            </div>
          </div>
        `:v`
          <div class="config-panel">
            <div class="config-title">SYSTEM MAINTENANCE & UTILITIES</div>

            <div class="center-slider-group">
              <div class="slider-info"><span>FRONT PANEL BRIGHTNESS</span><span class="val">${f}%</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="0" max="100" step="10" .value="${f}" @input="${this._setBrightness}" class="center-slider" />
                <div class="track-ticks">
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                  <span class="tick"></span>
                </div>
              </div>
              <div class="slider-ticks"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span></div>
            </div>

            <div class="system-actions-grid">
              <button class="system-action-btn hpd-btn" @click="${this._triggerHpd}">
                ⚡ TRIGGER HPD
              </button>
              <button class="system-action-btn reboot-btn" @click="${this._rebootDevice}">
                🔄 SYSTEM REBOOT
              </button>
            </div>
          </div>
        `}
      </ha-card>
    `}},g.HaHyperionApr16Card.styles=$t`
    :host {
      display: block;
    }
    .hyperion-display {
      position: relative;
      background: linear-gradient(145deg, #12151c 0%, #0a0c10 100%);
      border: 1px solid #0066ff;
      border-radius: 16px;
      padding: 20px;
      color: #ffffff;
      font-family: var(--paper-font-common-base_-font-family, sans-serif);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(0, 165, 255, 0.05);
      overflow: hidden;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 12px;
      margin-bottom: 12px;
    }
    .brand {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1.5px;
      color: #94a3b8;
    }
    .brand-clickable {
      cursor: pointer;
      transition: color 0.2s;
    }
    .brand-clickable:hover {
      color: #00a5ff;
    }
    .badges {
      display: flex;
      gap: 8px;
    }
    .badge-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 10px;
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      color: #ffffff;
      transition: all 0.2s;
    }
    .badge-btn.online { background: rgba(16, 185, 129, 0.2); color: #34d399; border-color: rgba(52, 211, 153, 0.4); }
    .badge-btn.offline { background: rgba(239, 68, 68, 0.2); color: #fca5a5; border-color: rgba(239, 68, 68, 0.4); }
    .badge-btn:hover { opacity: 0.85; transform: scale(1.02); }
    .badge.channel { background: rgba(0, 165, 255, 0.15); color: #00a5ff; border: 1px solid rgba(0, 165, 255, 0.3); font-size: 10px; padding: 3px 8px; border-radius: 4px; font-weight: 600; display: inline-flex; align-items: center; }

    .nav-tabs {
      display: flex;
      gap: 6px;
      margin-bottom: 16px;
    }
    .tab-btn {
      flex: 1;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #64748b;
      padding: 6px 0;
      border-radius: 6px;
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 0.8px;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
    }
    .tab-btn.active {
      background: rgba(0, 165, 255, 0.15);
      border-color: #00a5ff;
      color: #00a5ff;
    }

    .display-core {
      padding: 4px 0;
    }
    .decoder-info {
      text-align: center;
      margin-bottom: 16px;
    }
    .codec-tag {
      display: inline-block;
      color: #00a5ff;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 1px;
      text-shadow: 0 0 12px rgba(0, 165, 255, 0.5);
    }
    .sub-meta {
      display: block;
      font-size: 11px;
      color: #64748b;
      margin-top: 3px;
    }
    .volume-container {
      background: rgba(0, 0, 0, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 14px;
    }
    .volume-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .section-label {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      color: #64748b;
    }
    .volume-numeric {
      font-size: 26px;
      font-weight: 800;
      color: #00a5ff;
      font-family: monospace;
      letter-spacing: -0.5px;
      text-shadow: 0 0 12px rgba(0, 165, 255, 0.3);
    }
    .unit {
      font-size: 14px;
      color: #ffffff;
      font-weight: 600;
    }
    .hyperion-slider {
      width: 100%;
      accent-color: #00a5ff;
      height: 6px;
      cursor: pointer;
      margin-top: 4px;
    }
    .status-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 14px;
      font-size: 12px;
      color: #94a3b8;
    }
    .status-row strong {
      color: #ffffff;
    }
    .mute-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #cbd5e1;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      font-size: 11px;
      transition: all 0.2s;
    }
    .mute-btn.active {
      background: rgba(239, 68, 68, 0.2);
      border-color: #ef4444;
      color: #fca5a5;
      box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);
    }
    
    .selectors-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 14px;
    }
    .selector-group label {
      display: block;
      font-size: 10px;
      font-weight: 700;
      color: #64748b;
      margin-bottom: 6px;
      letter-spacing: 0.5px;
    }
    .selector-group select {
      width: 100%;
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #ffffff;
      padding: 8px 10px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      outline: none;
      transition: border-color 0.2s;
    }
    .selector-group select:hover, .selector-group select:focus {
      border-color: #00a5ff;
    }

    .config-panel {
      padding: 4px 0;
    }
    .config-title {
      font-size: 11px;
      font-weight: 700;
      color: #00a5ff;
      letter-spacing: 1px;
      margin-bottom: 14px;
      text-align: center;
    }
    .center-slider-group {
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 10px;
      padding: 10px 14px;
      margin-bottom: 10px;
    }
    .slider-info {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      font-weight: 700;
      color: #94a3b8;
      margin-bottom: 4px;
    }
    .slider-info .val {
      color: #00a5ff;
      font-family: monospace;
    }
    .slider-track-wrapper {
      position: relative;
      padding: 2px 0;
    }
    .center-slider {
      width: 100%;
      accent-color: #00a5ff;
      height: 5px;
      cursor: pointer;
      position: relative;
      z-index: 2;
      background: transparent;
    }
    .track-ticks {
      position: absolute;
      top: 50%;
      left: 6px;
      right: 6px;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-between;
      pointer-events: none;
      z-index: 1;
    }
    .track-ticks .tick {
      width: 1px;
      height: 8px;
      background: rgba(255, 255, 255, 0.25);
    }
    .track-ticks .center-tick {
      height: 12px;
      background: #00a5ff;
      box-shadow: 0 0 6px rgba(0, 165, 255, 0.5);
    }
    .slider-ticks {
      display: flex;
      justify-content: space-between;
      font-size: 9px;
      color: #64748b;
      margin-top: 2px;
      padding: 0 2px;
    }

    .system-actions-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 14px;
    }
    .system-action-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #ffffff;
      padding: 12px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
      letter-spacing: 0.5px;
    }
    .system-action-btn:hover {
      border-color: #00a5ff;
      background: rgba(0, 165, 255, 0.1);
    }
    .reboot-btn:hover {
      border-color: #ef4444;
      background: rgba(239, 68, 68, 0.15);
      color: #fca5a5;
    }

    /* Info Modal Styling */
    .info-modal {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(10, 12, 16, 0.96);
      z-index: 20;
      border-radius: 16px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      backdrop-filter: blur(8px);
      animation: fadeIn 0.2s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 10px;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1.5px;
      color: #00a5ff;
    }
    .close-modal-btn {
      background: none;
      border: none;
      color: #94a3b8;
      font-size: 16px;
      cursor: pointer;
    }
    .close-modal-btn:hover {
      color: #ffffff;
    }
    .modal-body {
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #94a3b8;
      background: rgba(255, 255, 255, 0.02);
      padding: 8px 12px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.04);
    }
    .info-row strong {
      color: #ffffff;
    }
    .info-row .mono {
      font-family: monospace;
      color: #00a5ff;
    }
    .modal-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 12px;
      text-align: center;
    }
    .modal-action-btn {
      width: 100%;
      background: rgba(0, 165, 255, 0.2);
      border: 1px solid #00a5ff;
      color: #00a5ff;
      padding: 10px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
      letter-spacing: 1px;
      transition: all 0.2s;
    }
    .modal-action-btn:hover {
      background: rgba(0, 165, 255, 0.35);
      color: #ffffff;
    }
  `,R([K({attribute:!1})],g.HaHyperionApr16Card.prototype,"hass",2),R([K({type:Object})],g.HaHyperionApr16Card.prototype,"config",2),R([gt()],g.HaHyperionApr16Card.prototype,"activeMenu",2),R([gt()],g.HaHyperionApr16Card.prototype,"showInfoModal",2),g.HaHyperionApr16Card=R([zt("ha-hyperion-apr16-card")],g.HaHyperionApr16Card),window.customCards=window.customCards||[],window.customCards.push({type:"ha-hyperion-apr16-card",name:"Hyperion APR-16 Card",description:"Custom front-panel display card for AudioControl Hyperion APR-16"}),Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),g}({});
