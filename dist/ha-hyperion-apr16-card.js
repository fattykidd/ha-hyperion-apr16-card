var HaHyperionApr16Card=(function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});var t=globalThis,n=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap,a=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=i.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&i.set(t,e))}return e}toString(){return this.cssText}},o=e=>new a(typeof e==`string`?e:e+``,void 0,r),s=(e,...t)=>new a(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,r),c=(e,r)=>{if(n)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of r){let r=document.createElement(`style`),i=t.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=n.cssText,e.appendChild(r)}},l=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return o(t)})(e):e,{is:u,defineProperty:d,getOwnPropertyDescriptor:f,getOwnPropertyNames:p,getOwnPropertySymbols:ee,getPrototypeOf:m}=Object,h=globalThis,g=h.trustedTypes,_=g?g.emptyScript:``,v=h.reactiveElementPolyfillSupport,y=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},x=(e,t)=>!u(e,t),S={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol(`metadata`),h.litPropertyMetadata??=new WeakMap;var C=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&d(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(y(`elementProperties`)))return;let e=m(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y(`properties`))){let e=this.properties,t=[...p(e),...ee(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(l(e))}else e!==void 0&&t.push(l(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?b:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?b:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??x)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};C.elementStyles=[],C.shadowRootOptions={mode:`open`},C[y(`elementProperties`)]=new Map,C[y(`finalized`)]=new Map,v?.({ReactiveElement:C}),(h.reactiveElementVersions??=[]).push(`2.1.2`);var w=globalThis,T=e=>e,E=w.trustedTypes,te=E?E.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ne=`$lit$`,D=`lit$${Math.random().toFixed(9).slice(2)}$`,O=`?`+D,re=`<${O}>`,k=document,A=()=>k.createComment(``),j=e=>e===null||typeof e!=`object`&&typeof e!=`function`,M=Array.isArray,ie=e=>M(e)||typeof e?.[Symbol.iterator]==`function`,N=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,oe=/>/g,F=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),I=/'/g,L=/"/g,R=/^(?:script|style|textarea|title)$/i,z=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),B=Symbol.for(`lit-noChange`),V=Symbol.for(`lit-nothing`),H=new WeakMap,U=k.createTreeWalker(k,129);function W(e,t){if(!M(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return te===void 0?t:te.createHTML(t)}var se=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=P;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===P?c[1]===`!--`?o=ae:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=F):(R.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=F):o=oe:o===F?c[0]===`>`?(o=i??P,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?F:c[3]===`"`?L:I):o===L||o===I?o=F:o===ae||o===oe?o=P:(o=F,i=void 0);let d=o===F&&e[t+1].startsWith(`/>`)?` `:``;a+=o===P?n+re:l>=0?(r.push(s),n.slice(0,l)+ne+n.slice(l)+D+d):n+D+(l===-2?t:d)}return[W(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},G=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=se(t,n);if(this.el=e.createElement(l,r),U.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=U.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ne)){let t=u[o++],n=i.getAttribute(e).split(D),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?le:r[1]===`?`?ue:r[1]===`@`?de:J}),i.removeAttribute(e)}else e.startsWith(D)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(R.test(i.tagName)){let e=i.textContent.split(D),t=e.length-1;if(t>0){i.textContent=E?E.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],A()),U.nextNode(),c.push({type:2,index:++a});i.append(e[t],A())}}}else if(i.nodeType===8){if(i.data===O)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(D,e+1))!==-1;)c.push({type:7,index:a}),e+=D.length-1}}a++}}static createElement(e,t){let n=k.createElement(`template`);return n.innerHTML=e,n}};function K(e,t,n=e,r){if(t===B)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=j(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=K(e,i._$AS(e,t.values),i,r)),t}var ce=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??k).importNode(t,!0);U.currentNode=r;let i=U.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new q(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new fe(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=U.nextNode(),a++)}return U.currentNode=k,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},q=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),j(e)?e===V||e==null||e===``?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==B&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ie(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=G.createElement(W(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ce(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=H.get(e.strings);return t===void 0&&H.set(e.strings,t=new G(e)),t}k(t){M(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(A()),this.O(A()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=T(e).nextSibling;T(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},J=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=V}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=K(this,e,t,0),a=!j(e)||e!==this._$AH&&e!==B,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=K(this,r[n+o],t,o),s===B&&(s=this._$AH[o]),a||=!j(s)||s!==this._$AH[o],s===V?e=V:e!==V&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},le=class extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}},ue=class extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}},de=class extends J{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??V)===B)return;let n=this._$AH,r=e===V&&n!==V||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==V&&(n===V||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},fe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}},pe=w.litHtmlPolyfillSupport;pe?.(G,q),(w.litHtmlVersions??=[]).push(`3.3.3`);var me=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new q(t.insertBefore(A(),e),e,void 0,n??{})}return i._$AI(e),i},Y=globalThis,X=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=me(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};X._$litElement$=!0,X.finalized=!0,Y.litElementHydrateSupport?.({LitElement:X});var he=Y.litElementPolyfillSupport;he?.({LitElement:X}),(Y.litElementVersions??=[]).push(`4.2.2`);var ge=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},_e={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x},ve=(e=_e,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function Z(e){return(t,n)=>typeof n==`object`?ve(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function ye(e){return Z({...e,state:!0,attribute:!1})}function Q(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var $=class extends X{constructor(...e){super(...e),this.activeMenu=`main`,this.showInfoModal=!1,this.customChannelLayout=`7.3.6`}setConfig(e){if(!e.entity)throw Error(`Please define a media_player entity`);this.config=e,(e.channel_layout||e.channels)&&(this.customChannelLayout=e.channel_layout||e.channels)}getCardSize(){return 5}_togglePower(){let e=this.hass.states[this.config.entity],t=e?.state!==`unavailable`&&e.state!==`off`;this.hass.callService(`media_player`,t?`turn_off`:`turn_on`,{entity_id:this.config.entity})}_toggleMute(){let e=this.hass.states[this.config.entity]?.attributes?.is_volume_muted??!1;this.hass.callService(`media_player`,`volume_mute`,{entity_id:this.config.entity,is_volume_muted:!e})}_setVolume(e){let t=parseFloat(e.target.value);this.hass.callService(`media_player`,`volume_set`,{entity_id:this.config.entity,volume_level:t})}_selectSource(e){let t=e.target.value;this.hass.callService(`media_player`,`select_source`,{entity_id:this.config.entity,source:t})}_selectSoundMode(e){let t=e.target.value;this.hass.callService(`media_player`,`select_sound_mode`,{entity_id:this.config.entity,sound_mode:t})}_setCustomAttr(e,t){let n=parseFloat(t.target.value);this.hass.callService(`hyperion_apr16`,`set_audio_config`,{entity_id:this.config.entity,[e]:n})}_setBrightness(e){let t=parseInt(e.target.value,10);this.hass.callService(`hyperion_apr16`,`set_display_brightness`,{entity_id:this.config.entity,brightness:t})}_rebootDevice(){confirm(`Are you sure you want to reboot the AudioControl Hyperion APR-16?`)&&this.hass.callService(`hyperion_apr16`,`reboot`,{entity_id:this.config.entity})}_triggerHpd(){this.hass.callService(`hyperion_apr16`,`trigger_hpd`,{entity_id:this.config.entity})}render(){if(!this.hass||!this.config)return z``;let e=this.hass.states[this.config.entity];if(!e)return z`
        <ha-card style="padding: 16px; color: #ef4444; background: #12151c;">
          Entity not found: ${this.config.entity}
        </ha-card>
      `;let t=e.attributes,n=e.state!==`unavailable`&&e.state!==`off`,r=t.volume_level_db??`-20.0`,i=t.volume_level??.5,a=t.is_volume_muted??!1,o=t.source??`HDMI 1`,s=t.sound_mode??`DTS NEURAL:X`,c=t.source_list||[`HDMI 1`,`HDMI 2`,`eARC`,`Media`,`Analog`],l=t.sound_mode_list||[`DTS:NEURAL:X`,`Dolby Atmos`,`Native`,`Stereo Direct`],u=t.channel_layout||t.channels||this.customChannelLayout,d=t.display_brightness??100,f=t.firmware_version??`v1.4.2-build88`,p=t.ip_address??`192.168.1.150`,ee=t.mac_address??`00:1A:2B:3C:4D:5E`,m=t.uptime??`4 days, 12 hours`,h=t.bass??0,g=t.treble??0,_=t.channel_trim??0,v=t.lipsync_delay??0;return z`
      <ha-card class="hyperion-display">
        <!-- Info Modal Overlay -->
        ${this.showInfoModal?z`
          <div class="info-modal">
            <div class="modal-header">
              <span>HARDWARE SYSTEM INFO</span>
              <button class="close-modal-btn" @click="${()=>this.showInfoModal=!1}">✕</button>
            </div>
            <div class="modal-body">
              <div class="info-row"><span>Device Model:</span> <strong>AudioControl Hyperion APR-16</strong></div>
              <div class="info-row"><span>Firmware Version:</span> <strong>${f}</strong></div>
              <div class="info-row"><span>Channel Layout:</span> <strong>${u}</strong></div>
              <div class="info-row"><span>IP Address:</span> <strong class="mono">${p}</strong></div>
              <div class="info-row"><span>MAC Address:</span> <strong class="mono">${ee}</strong></div>
              <div class="info-row"><span>System Uptime:</span> <strong>${m}</strong></div>
              <div class="info-row"><span>DSP Core:</span> <strong>SHARC Audio Engine (48kHz)</strong></div>
            </div>
            <div class="modal-footer">
              <button class="modal-action-btn" @click="${()=>this.showInfoModal=!1}">CLOSE</button>
            </div>
          </div>
        `:``}

        <div class="header">
          <span class="brand brand-clickable" @click="${()=>this.showInfoModal=!0}" title="Click for System Info">
            AUDIOCONTROL HYPERION APR-16 ℹ️
          </span>
          <div class="badges">
            <button class="badge-btn ${n?`online`:`offline`}" @click="${this._togglePower}" title="Click to toggle power">
              ${n?`🟢 ONLINE`:`🔴 OFFLINE`}
            </button>
            <span class="badge channel">${u}</span>
          </div>
        </div>

        <div class="nav-tabs">
          <button class="tab-btn ${this.activeMenu===`main`?`active`:``}" @click="${()=>this.activeMenu=`main`}">FRONT PANEL</button>
          <button class="tab-btn ${this.activeMenu===`config`?`active`:``}" @click="${()=>this.activeMenu=`config`}">AUDIO CONFIG</button>
          <button class="tab-btn ${this.activeMenu===`system`?`active`:``}" @click="${()=>this.activeMenu=`system`}">SYSTEM</button>
        </div>

        ${this.activeMenu===`main`?z`
          <div class="display-core">
            <div class="decoder-info">
              <span class="codec-tag">${s}</span>
              <span class="sub-meta">Dirac Live ART Active • 48kHz</span>
            </div>

            <div class="volume-container">
              <div class="volume-header-row">
                <span class="section-label">MASTER VOLUME</span>
                <div class="volume-numeric">${r} <span class="unit">dB</span></div>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                .value="${i}"
                @input="${this._setVolume}"
                class="hyperion-slider"
              />
            </div>

            <div class="status-row">
              <span class="source-indicator">ACTIVE INPUT: <strong>${o}</strong></span>
              <button class="mute-btn ${a?`active`:``}" @click="${this._toggleMute}">
                ${a?`🔇 MUTE: ON`:`🔊 MUTE: OFF`}
              </button>
            </div>
          </div>

          <div class="selectors-grid">
            <div class="selector-group">
              <label>INPUT SOURCE</label>
              <select .value="${o}" @change="${this._selectSource}">
                ${c.map(e=>z`<option value="${e}" ?selected="${o===e}">${e}</option>`)}
              </select>
            </div>

            <div class="selector-group">
              <label>AUDIO UPMIXER</label>
              <select .value="${s}" @change="${this._selectSoundMode}">
                ${l.map(e=>z`<option value="${e}" ?selected="${s===e}">${e}</option>`)}
              </select>
            </div>
          </div>
        `:this.activeMenu===`config`?z`
          <div class="config-panel">
            <div class="config-title">PER-INPUT AUDIO CONFIGURATION</div>

            <div class="center-slider-group">
              <div class="slider-info"><span>BASS</span><span class="val">${h>0?`+${h}`:h} dB</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="-12" max="12" step="0.5" .value="${h}" @input="${e=>this._setCustomAttr(`bass`,e)}" class="center-slider" />
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
              <div class="slider-info"><span>TREBLE</span><span class="val">${g>0?`+${g}`:g} dB</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="-12" max="12" step="0.5" .value="${g}" @input="${e=>this._setCustomAttr(`treble`,e)}" class="center-slider" />
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
              <div class="slider-info"><span>CHANNEL TRIM</span><span class="val">${_>0?`+${_}`:_} dB</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="-12" max="12" step="0.5" .value="${_}" @input="${e=>this._setCustomAttr(`channel_trim`,e)}" class="center-slider" />
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
              <div class="slider-info"><span>LIPSYNC DELAY</span><span class="val">${v} ms</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="0" max="250" step="5" .value="${v}" @input="${e=>this._setCustomAttr(`lipsync_delay`,e)}" class="center-slider" />
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
        `:z`
          <div class="config-panel">
            <div class="config-title">SYSTEM MAINTENANCE & UTILITIES</div>

            <div class="center-slider-group">
              <div class="slider-info"><span>FRONT PANEL BRIGHTNESS</span><span class="val">${d}%</span></div>
              <div class="slider-track-wrapper">
                <input type="range" min="0" max="100" step="10" .value="${d}" @input="${this._setBrightness}" class="center-slider" />
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
    `}static{this.styles=s`
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
  `}};return Q([Z({attribute:!1})],$.prototype,`hass`,void 0),Q([Z({type:Object})],$.prototype,`config`,void 0),Q([ye()],$.prototype,`activeMenu`,void 0),Q([ye()],$.prototype,`showInfoModal`,void 0),$=Q([ge(`ha-hyperion-apr16-card`)],$),window.customCards=window.customCards||[],window.customCards.push({type:`ha-hyperion-apr16-card`,name:`Hyperion APR-16 Card`,description:`Custom front-panel display card for AudioControl Hyperion APR-16`}),Object.defineProperty(e,"HaHyperionApr16Card",{enumerable:!0,get:function(){return $}}),e})({});