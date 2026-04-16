/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(s,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:l,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,_=p.trustedTypes,f=_?_.emptyScript:"",g=p.reactiveElementPolyfillSupport,m=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...l(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[m("elementProperties")]=new Map,$[m("finalized")]=new Map,g?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,x=t=>t,E=w.trustedTypes,A=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+S,k=`<${T}>`,R=document,I=()=>R.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,O="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,U=/>/g,z=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,H=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),V=new WeakMap,q=R.createTreeWalker(R,129);function K(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=N;for(let e=0;e<i;e++){const i=t[e];let a,c,d=-1,l=0;for(;l<i.length&&(o.lastIndex=l,c=o.exec(i),null!==c);)l=o.lastIndex,o===N?"!--"===c[1]?o=M:void 0!==c[1]?o=U:void 0!==c[2]?(L.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=z):void 0!==c[3]&&(o=z):o===z?">"===c[0]?(o=r??N,d=-1):void 0===c[1]?d=-2:(d=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?z:'"'===c[3]?H:j):o===H||o===j?o=z:o===M||o===U?o=N:(o=z,r=void 0);const h=o===z&&t[e+1].startsWith("/>")?" ":"";n+=o===N?i+k:d>=0?(s.push(a),i.slice(0,d)+C+i.slice(d)+S+h):i+S+(-2===d?e:h)}return[K(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[c,d]=G(t,e);if(this.el=J.createElement(c,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=q.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=d[n++],i=s.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?it:Q}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],I()),q.nextNode(),a.push({type:2,index:++r});s.append(t[e],I())}}}else if(8===s.nodeType)if(s.data===T)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===W)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=P(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Z(t,r._$AS(t,e.values),r,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??R).importNode(e,!0);q.currentNode=s;let r=q.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=q.nextNode(),n++)}return q.currentNode=R,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),P(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new J(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Y(this.O(I()),this.O(I()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Z(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Z(this,s[i+o],e,o),a===W&&(a=this._$AH[o]),n||=!P(a)||a!==this._$AH[o],a===F?t=F:t!==F&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class it extends Q{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??F)===W)return;const i=this._$AH,s=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(J,Y),(w.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Y(e.insertBefore(I(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const at=nt.litElementPolyfillSupport;at?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.2");const ct=n`
  :host {
    --status-on-time: var(--custom-on-time-color, #4caf50);
    --status-minor-delay: var(--custom-minor-delay-color, #ff9800);
    --status-major-delay: var(--custom-major-delay-color, #f44336);
    --status-cancelled: var(--custom-cancelled-color, #d32f2f);
    --status-no-service: var(--custom-no-service-color, #9e9e9e);
    --status-unknown: #9e9e9e;

    --card-padding: 16px;
    --row-padding: 12px;
    --border-radius: 8px;

    display: block;
  }

  ha-card {
    padding: 0;
    overflow: hidden;
    position: relative;
  }

  /* ==================== HEADER ==================== */

  .card-header {
    padding: var(--card-padding);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    background: var(--card-background-color, #fff);
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .header-title {
    flex: 1;
  }

  .route {
    margin-top: 4px;
    font-size: 0.9rem;
    color: var(--secondary-text-color, #757575);
  }

  .return-toggle {
    background: none;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary-text-color, #757575);
    padding: 0;
    margin-left: auto;
    flex-shrink: 0;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }

  .return-toggle:hover {
    background: var(--secondary-background-color, #f5f5f5);
  }

  .return-toggle.active {
    background: var(--primary-color, #03a9f4);
    color: #fff;
    border-color: var(--primary-color, #03a9f4);
  }

  /* ==================== DISRUPTION BANNER ==================== */

  .disruption-banner {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px var(--card-padding);
    background: var(--status-major-delay);
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
    border-left: 4px solid rgba(0, 0, 0, 0.25);
    transition: filter 0.15s ease;
  }

  .disruption-banner.disruption-minor {
    background: var(--status-minor-delay);
    border-left-color: rgba(0, 0, 0, 0.2);
  }

  .disruption-banner.disruption-major {
    background: #e65100;
    border-left-color: rgba(0, 0, 0, 0.25);
  }

  .disruption-banner.disruption-severe {
    background: var(--status-major-delay);
    border-left-color: rgba(0, 0, 0, 0.25);
  }

  .disruption-banner.disruption-critical {
    background: #7f0000;
    border-left-color: rgba(0, 0, 0, 0.35);
  }

  .disruption-banner.disruption-clickable {
    cursor: pointer;
  }

  .disruption-banner.disruption-clickable:hover {
    filter: brightness(1.1);
  }

  .disruption-icon {
    --mdc-icon-size: 22px;
    color: #fff;
    flex-shrink: 0;
  }

  .disruption-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .disruption-label {
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  .disruption-message {
    font-size: 0.82rem;
    font-weight: 400;
    opacity: 0.9;
  }

  .disruption-chevron {
    --mdc-icon-size: 18px;
    color: rgba(255, 255, 255, 0.75);
    flex-shrink: 0;
  }

  ha-card.departure-board .disruption-banner {
    background: #b71c1c;
    color: #ffcc00;
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 1px;
    border-left-color: rgba(0, 0, 0, 0.4);
  }

  ha-card.departure-board .disruption-banner.disruption-minor {
    background: #e65100;
    color: #ffcc00;
  }

  ha-card.departure-board .disruption-banner.disruption-major {
    background: #bf360c;
    color: #ffcc00;
  }

  ha-card.departure-board .disruption-banner.disruption-severe {
    background: #b71c1c;
    color: #ffcc00;
  }

  ha-card.departure-board .disruption-banner.disruption-critical {
    background: #4a0000;
    color: #ffcc00;
  }

  ha-card.departure-board .disruption-icon {
    color: #ffcc00;
  }

  ha-card.departure-board .disruption-chevron {
    color: rgba(255, 204, 0, 0.7);
  }

  /* ==================== CONTENT ==================== */

  .card-content {
    padding: 0;
  }

  /* ==================== DEPARTURE BOARD VIEW ==================== */

  ha-card.departure-board {
    background: #000000;
    color: #ffffff;
    font-family: Helvetica, Arial, sans-serif;
  }

  .board-content {
    padding: 0;
  }

  .board-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: #010EA0;
    height: 60px;
    box-sizing: border-box;
  }

  .board-header-row .col-time {
    font-size: 1.5rem;
    color: #ffffff;
    width: 20%;
  }

  .board-header-row .col-title {
    font-size: 1.8rem;
    color: #ffffff;
    text-align: center;
    font-weight: 700;
    letter-spacing: 2px;
    width: 60%;
  }

  .board-header-row .col-logo {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    overflow: visible;
  }

  .board-header-row .col-logo ha-icon {
    --mdc-icon-size: 32px;
    color: #ffffff;
  }

  .board-header-row .col-logo svg {
    height: 36px;
    width: auto;
    max-width: 100%;
    display: block;
  }

  .board-row {
    display: flex;
    align-items: flex-start;
    padding: 12px 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    box-sizing: border-box;
    min-height: 60px;
  }

  .board-row-even {
    background: #00045A;
  }

  .board-row-odd {
    background: #010EA0;
  }

  .board-row:hover {
    filter: brightness(1.2);
  }

  .board-row.cancelled .row-time {
    color: #ffcc00;
    text-decoration: line-through;
  }

  .board-row.cancelled .cancelled-label {
    color: #ffcc00;
    font-size: 1rem;
    margin-top: 2px;
  }

  .board-row .row-time {
    width: 10%;
    display: flex;
    align-items: flex-start;
    font-size: 1.4rem;
    color: #ffffff;
  }

  .board-row .row-expected {
    width: 7%;
    display: flex;
    align-items: flex-start;
    font-size: 1.4rem;
    color: #ffcc00;
  }

  .board-row .row-dest {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 12px;
  }

  .board-row .row-dest .destination {
    font-size: 1.4rem;
    color: #ffffff;
    font-weight: 700;
  }

  .board-row .row-dest .calling-stations {
    font-size: 1rem;
    color: #ffffff;
    margin-top: 2px;
    white-space: normal;
    word-wrap: break-word;
  }

  .board-row .row-dest .delay-reason {
    font-size: 1rem;
    color: #ffcc00;
    margin-top: 2px;
  }

  .board-row .row-train {
    width: 10%;
    display: flex;
    flex-direction: column;
  }

  .board-row .row-train .category {
    font-size: 1.4rem;
    color: #ffffff;
  }

  .board-row .row-train .number {
    font-size: 1rem;
    color: #ffffff;
  }

  .board-row .row-platform {
    width: 8%;
    text-align: right;
    font-size: 1.4rem;
    color: #ffffff;
  }

  /* ==================== EMPTY STATE ==================== */

  .card-content.empty {
    padding: 48px var(--card-padding);
    text-align: center;
  }

  .empty-icon {
    --mdc-icon-size: 64px;
    color: var(--disabled-text-color, #bdbdbd);
    margin-bottom: 16px;
  }

  .empty-message {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--primary-text-color, #212121);
  }

  .empty-submessage {
    font-size: 0.9rem;
    color: var(--secondary-text-color, #757575);
  }

  /* ==================== LOADING STATE ==================== */

  .card-content.loading {
    padding: 48px var(--card-padding);
    text-align: center;
  }

  .loading-spinner {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 4px solid var(--divider-color, #e0e0e0);
    border-top-color: var(--primary-color, #03a9f4);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .loading-message {
    margin-top: 16px;
    font-size: 0.9rem;
    color: var(--secondary-text-color, #757575);
  }

  /* ==================== REFRESH TOAST ==================== */

  .refresh-toast {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 0.9rem;
    animation: fadeInOut 2s ease-in-out;
    pointer-events: none;
    z-index: 1000;
  }

  @keyframes fadeInOut {
    0% { opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-16px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  @media (max-width: 600px) {
    .board-row > span {
      padding: 6px 8px;
      font-size: 0.85rem;
    }
  }
`;function dt(t){if(!t||"unknown"===t||"Unknown"===t)return"—";const e=String(t).trim();if(!e)return"—";const i=e.match(/(\d{1,2}):(\d{2})(?::\d{2})?/);if(i)return`${i[1].padStart(2,"0")}:${i[2]}`;try{const t=new Date(e);return isNaN(t.getTime())?e:t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch(t){return console.warn("formatTime: could not parse time value:",e,t),e}}function lt(t){return!(!t||!t.expected_departure)&&(t.expected_departure!==t.scheduled_departure&&!/\d{1,2}:\d{2}/.test(t.expected_departure))}customElements.define("cfl-commute-card-editor",class extends ot{static get properties(){return{hass:{type:Object},_config:{type:Object}}}static get styles(){return n`
      .card-config {
        padding: 16px;
      }

      .option {
        margin-bottom: 16px;
      }

      .section-header {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 24px 0 12px 0;
        padding-bottom: 8px;
        border-bottom: 1px solid var(--divider-color);
      }

      .section-header:first-child {
        margin-top: 0;
      }

      ha-textfield {
        width: 100%;
      }

      .switches {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      ha-formfield {
        display: block;
        padding: 8px 0;
      }

      .info {
        font-size: 0.9rem;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      .native-select-label {
        display: block;
        font-size: 0.75rem;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
      }

      .native-select-container {
        position: relative;
        width: 100%;
      }

      .native-select-container select {
        width: 100%;
        height: 56px;
        padding: 0 36px 0 16px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.38));
        border-radius: 4px;
        background: transparent;
        color: var(--primary-text-color);
        font-size: 1rem;
        font-family: inherit;
        cursor: pointer;
        -webkit-appearance: none;
        appearance: none;
        box-sizing: border-box;
      }

      .native-select-container select:hover {
        border-color: var(--primary-text-color);
      }

      .native-select-container select:focus {
        outline: none;
        border-color: var(--primary-color);
        border-width: 2px;
        padding: 0 35px 0 15px;
      }

      .native-select-container::after {
        content: '';
        position: absolute;
        right: 13px;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 6px solid var(--secondary-text-color, rgba(0,0,0,0.54));
        pointer-events: none;
      }
    `}setConfig(t){this._config={...t},this.requestUpdate()}set hass(t){this._hass=t,this.requestUpdate()}get hass(){return this._hass}_filterSummaryEntities(t){const e=this._hass.states[t.entity_id];if("cfl_commute"===e?.attributes?.integration)return!0;const i=t.entity_id.toLowerCase();return i.endsWith("_summary")||i.includes("commute")||i.includes("cfl")}render(){return this._hass&&this._config?B`
      <div class="card-config">
        <div class="section-header">Configuration</div>

        <div class="option">
          <ha-entity-picker
            label="Summary Entity (Required)"
            .hass=${this._hass}
            .value=${this._config.entity||""}
            .includeDomains=${["sensor"]}
            .entityFilter=${this._filterSummaryEntities.bind(this)}
            @value-changed=${this._entityChanged}
            allow-custom-entity
          ></ha-entity-picker>
          <div class="info">Select your CFL Commute summary sensor (from cfl_commute integration)</div>
        </div>

        <div class="option">
          <ha-textfield
            label="Title (Optional)"
            .value=${this._config.title||""}
            @input=${this._titleChanged}
          ></ha-textfield>
        </div>

        <div class="option">
          <ha-entity-picker
            label="Status Sensor (Optional)"
            .hass=${this._hass}
            .value=${this._config.status_entity||""}
            .includeDomains=${["sensor"]}
            @value-changed=${this._statusEntityChanged}
            allow-custom-entity
          ></ha-entity-picker>
          <div class="info">Sensor for disruption banner. Expected states: Normal, Minor Delays, Major Delays, Severe Disruption, Critical. Auto-discovered if not set.</div>
        </div>

        <div class="section-header">Filtering</div>

        <div class="switches">
          <ha-formfield label="Hide On-Time Trains">
            <ha-switch
              .checked=${!0===this._config.hide_on_time_trains}
              @change=${this._toggleChanged("hide_on_time_trains")}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Only Show When Disrupted">
            <ha-switch
              .checked=${!0===this._config.only_show_disrupted}
              @change=${this._toggleChanged("only_show_disrupted")}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="option">
          <ha-textfield
            label="Minimum Delay to Show (minutes)"
            type="number"
            min="0"
            .value=${this._config.min_delay_to_show||0}
            @input=${this._minDelayChanged}
          ></ha-textfield>
          <div class="info">Only show trains delayed by at least this many minutes (0 = show all)</div>
        </div>

        <div class="section-header">Advanced</div>

        <div class="switches">
          <ha-formfield label="Auto Refresh">
            <ha-switch
              .checked=${!1!==this._config.auto_refresh}
              @change=${this._toggleChanged("auto_refresh")}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="option">
          <ha-textfield
            label="Refresh Interval (seconds)"
            type="number"
            min="10"
            max="600"
            .value=${this._config.refresh_interval||60}
            @input=${this._refreshIntervalChanged}
          ></ha-textfield>
        </div>

        <div class="section-header">Interaction</div>

        <div class="option">
          <span class="native-select-label">Tap Action</span>
          <div class="native-select-container">
            <select @change=${this._tapActionChanged}>
              <option value="more-info" ?selected=${"more-info"===(this._config.tap_action?.action||"more-info")}>Show More Info</option>
              <option value="url" ?selected=${"url"===(this._config.tap_action?.action||"more-info")}>Open URL</option>
              <option value="navigate" ?selected=${"navigate"===(this._config.tap_action?.action||"more-info")}>Navigate</option>
              <option value="none" ?selected=${"none"===(this._config.tap_action?.action||"more-info")}>None</option>
            </select>
          </div>
        </div>

        ${"url"===this._config.tap_action?.action?B`
          <div class="option">
            <ha-textfield
              label="URL Path"
              .value=${this._config.tap_action?.url_path||""}
              @input=${this._urlPathChanged}
            ></ha-textfield>
          </div>
        `:""}

        ${"navigate"===this._config.tap_action?.action?B`
          <div class="option">
            <ha-textfield
              label="Navigation Path"
              .value=${this._config.tap_action?.navigation_path||""}
              @input=${this._navigationPathChanged}
            ></ha-textfield>
          </div>
        `:""}

        <div class="option">
          <span class="native-select-label">Hold Action</span>
          <div class="native-select-container">
            <select @change=${this._holdActionChanged}>
              <option value="refresh" ?selected=${"refresh"===(this._config.hold_action?.action||"refresh")}>Refresh Data</option>
              <option value="more-info" ?selected=${"more-info"===(this._config.hold_action?.action||"refresh")}>Show More Info</option>
              <option value="none" ?selected=${"none"===(this._config.hold_action?.action||"refresh")}>None</option>
            </select>
          </div>
        </div>
      </div>
    `:B``}_entityChanged(t){this._config&&this._hass&&(this._config={...this._config,entity:t.detail.value},this._fireConfigChanged())}_titleChanged(t){this._config&&this._hass&&(this._config={...this._config,title:t.target.value},this._fireConfigChanged())}_toggleChanged(t){return e=>{this._config&&this._hass&&(this._config={...this._config,[t]:e.target.checked},this._fireConfigChanged())}}_minDelayChanged(t){if(!this._config||!this._hass)return;const e=parseInt(t.target.value,10)||0;this._config={...this._config,min_delay_to_show:e},this._fireConfigChanged()}_statusEntityChanged(t){this._config&&this._hass&&(this._config={...this._config,status_entity:t.detail.value},this._fireConfigChanged())}_refreshIntervalChanged(t){if(!this._config||!this._hass)return;const e=parseInt(t.target.value,10)||60;this._config={...this._config,refresh_interval:e},this._fireConfigChanged()}_tapActionChanged(t){this._config&&this._hass&&(this._config={...this._config,tap_action:{action:t.target.value}},this._fireConfigChanged())}_urlPathChanged(t){this._config&&this._hass&&(this._config={...this._config,tap_action:{...this._config.tap_action,url_path:t.target.value}},this._fireConfigChanged())}_navigationPathChanged(t){this._config&&this._hass&&(this._config={...this._config,tap_action:{...this._config.tap_action,navigation_path:t.target.value}},this._fireConfigChanged())}_holdActionChanged(t){this._config&&this._hass&&(this._config={...this._config,hold_action:{action:t.target.value}},this._fireConfigChanged())}_fireConfigChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}}),console.info("%c CFL-COMMUTE-CARD \n%c Version 2.0.0 ","color: cyan; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");class ht extends ot{static get properties(){return{hass:{type:Object},config:{type:Object},_trains:{type:Array},_origin:{type:String},_destination:{type:String},_hasDisruption:{type:Boolean},_disruptionSeverity:{type:String},_disruptionMessage:{type:String},_resolvedStatusEntityId:{type:String},_loading:{type:Boolean},_returnEntityId:{type:String},_showReturn:{type:Boolean},_currentTime:{type:String}}}static get styles(){return ct}constructor(){super(),this._trains=[],this._origin="",this._destination="",this._hasDisruption=!1,this._disruptionSeverity="",this._disruptionMessage="",this._resolvedStatusEntityId="",this._loading=!0,this._toastTimer=null,this._returnEntityId=null,this._showReturn=!1,this._returnEntityCacheKey=null,this._currentTime=this._getCurrentTime(),this._timeInterval=null}_getCurrentTime(){return(new Date).toLocaleTimeString("de-LU",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}connectedCallback(){super.connectedCallback(),this._timeInterval=setInterval(()=>{this._currentTime=this._getCurrentTime()},1e3)}disconnectedCallback(){super.disconnectedCallback(),this._timeInterval&&(clearInterval(this._timeInterval),this._timeInterval=null),this._toastTimer&&(clearTimeout(this._toastTimer),this._toastTimer=null)}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity&&""!==t.entity)throw new Error("Please select a CFL Commute summary sensor");this.config={hide_on_time_trains:!1,only_show_disrupted:!1,min_delay_to_show:0,auto_refresh:!0,refresh_interval:60,...t},t.colors&&(t.colors.on_time&&this.style.setProperty("--custom-on-time-color",t.colors.on_time),t.colors.minor_delay&&this.style.setProperty("--custom-minor-delay-color",t.colors.minor_delay),t.colors.major_delay&&this.style.setProperty("--custom-major-delay-color",t.colors.major_delay),t.colors.cancelled&&this.style.setProperty("--custom-cancelled-color",t.colors.cancelled))}set hass(t){if(this._hass=t,!this.config.entity)return this._loading=!1,void(this._trains=[]);const e=t.states[this.config.entity];if(!e)return console.error("Entity not found:",this.config.entity),this._loading=!1,void(this._trains=[]);const i=e.attributes.origin_name||e.attributes.origin||e.attributes.from_station||"",s=e.attributes.destination_name||e.attributes.destination||e.attributes.to_station||"",r=`${i}|${s}`;r!==this._returnEntityCacheKey?(this._returnEntityCacheKey=r,this._returnEntityId=this._findReturnEntity(t,i,s)):this._returnEntityId&&!t.states[this._returnEntityId]&&(this._returnEntityCacheKey=null,this._returnEntityId=this._findReturnEntity(t,i,s)),this._showReturn&&!this._returnEntityId&&(this._showReturn=!1);const n=this._showReturn&&this._returnEntityId?this._returnEntityId:this.config.entity,o=t.states[n];if(!o)return this._loading=!1,void(this._trains=[]);if(o.attributes.all_trains&&o.attributes.all_trains.length>0){const t=n.replace("sensor.","").replace("_summary","").replace("_commute_summary","");this._trains=o.attributes.all_trains.map((e,i)=>{const s=null!=e.train_number&&""!==e.train_number?String(e.train_number).toLowerCase().replace(/[^a-z0-9]/g,"_"):String(i+1);return{...e,train_id:`sensor.${t}_train_${s}`,platform:e.platform||""}})}else this._trains=this._getTrainsFromIndividualSensors(t,n);var a;let c;if(this._origin=this._showReturn?s:i,this._destination=this._showReturn?i:s,this._trains&&this._trains.length>0&&(this._trains=(a=this._trains)&&0!==a.length?[...a].sort((t,e)=>{const i=new Date(t.scheduled_departure).getTime(),s=new Date(e.scheduled_departure).getTime(),r=!isNaN(i),n=!isNaN(s);return r||n?r?n?i-s:-1:1:0}):[]),this._hasDisruption=!1,this._disruptionSeverity="",this._disruptionMessage="",this._resolvedStatusEntityId="",this._showReturn&&this._returnEntityId){const e=`sensor.${this._returnEntityId.replace("sensor.","").replace("_summary","").replace("_commute_summary","")}_status`;t.states[e]&&(c=e)}else if(c=this.config.status_entity,!c){const e=`sensor.${this.config.entity.replace("sensor.","").replace("_summary","").replace("_commute_summary","")}_status`;t.states[e]&&(c=e)}if(c){this._resolvedStatusEntityId=c;const e=t.states[c];if(e){const t=(e.state||"").toLowerCase().trim();"normal"!==t&&"unknown"!==t&&"unavailable"!==t&&""!==t&&(this._hasDisruption=!0,t.includes("critical")?this._disruptionSeverity="critical":t.includes("severe")?this._disruptionSeverity="severe":t.includes("major")?this._disruptionSeverity="major":this._disruptionSeverity="minor",this._disruptionMessage=e.attributes.message||e.attributes.reason||e.attributes.disruption_message||"")}}this._trains&&this._trains.length>0&&(this._trains=function(t,e){if(!t||0===t.length)return[];let i=[...t];return e.hide_on_time_trains&&(i=i.filter(t=>t.is_cancelled||t.is_no_service||t.delay_minutes>0||lt(t))),e.min_delay_to_show>0&&(i=i.filter(t=>t.is_cancelled||t.is_no_service||lt(t)||t.delay_minutes>=e.min_delay_to_show)),i}(this._trains,this.config)),this._loading=!1,this.requestUpdate()}_findReturnEntity(t,e,i){if(!e||!i)return null;const s=e.toLowerCase().trim(),r=i.toLowerCase().trim();for(const[e,i]of Object.entries(t.states)){if(e===this.config.entity)continue;if(!i.attributes)continue;const t=i.attributes;if(!(t.all_trains||t.origin_name||t.origin||t.from_station))continue;const n=(t.origin_name||t.origin||t.from_station||"").toLowerCase().trim(),o=(t.destination_name||t.destination||t.to_station||"").toLowerCase().trim();if(n&&o&&(n===r&&o===s))return e}return null}_toggleReturn(){this._showReturn=!this._showReturn,this._hass&&(this.hass=this._hass)}_getTrainsFromIndividualSensors(t,e){const i=(e||this.config.entity).replace("sensor.","").replace("_summary","").replace("_commute_summary",""),s=[`sensor.${i}_train_`,`sensor.${i}_train`,`sensor.${i.replace(/_/g,"-")}_train_`,`sensor.${i.replace(/_/g,"")}_train_`];let r=[];for(const e of s){const i=Object.keys(t.states).filter(t=>t.startsWith(e));if(i.length>0){r=i;break}}r.sort((t,e)=>parseInt(t.match(/train[_-]?(\d+)$/i)?.[1]||"0",10)-parseInt(e.match(/train[_-]?(\d+)$/i)?.[1]||"0",10));const n=r.map(e=>{const i=t.states[e];if(!i)return console.warn(`cfl-commute-card: train sensor not found: ${e}`),null;let s=i.attributes.calling_points||i.attributes.stops||i.attributes.calling_at||i.attributes["Calling at"]||[];"string"==typeof s&&(s=s.split(",").map(t=>t.trim()).filter(t=>t));const r=i.attributes.scheduled_departure||i.attributes.scheduled||i.attributes.departure||i.attributes.departure_time||i.attributes.std||i.attributes.aimed_departure_time||i.attributes["Scheduled Departure"]||i.state;return{train_id:e,scheduled_departure:r,expected_departure:i.attributes.expected_departure||i.attributes.expected||i.attributes.estimated||i.attributes.estimated_departure||i.attributes.etd||i.attributes.expected_arrival||i.attributes["Expected Departure"]||r,platform:i.attributes.platform||i.attributes.Platform||"",operator:i.attributes.operator||i.attributes.service_operator||i.attributes.Operator||"",direction:i.attributes.direction||i.attributes.destination||"",is_cancelled:i.attributes.is_cancelled||i.attributes.cancelled||"Cancelled"===i.state||"Canceled"===i.state||!1,is_no_service:i.attributes.is_no_service||i.attributes.no_service||"No service"===i.state||"No Service"===i.state||!1,delay_minutes:parseInt(i.attributes.delay_minutes||i.attributes.delay||i.attributes.minutes_late||i.attributes["Delay minutes"]||"0",10),delay_reason:i.attributes.delay_reason||i.attributes.reason||i.attributes["Delay reason"]||"",calling_points:s,journey_duration:i.attributes.journey_duration||i.attributes.duration||"",service_type:i.attributes.service_type||i.attributes.type||""}}).filter(t=>null!==t);return n}getCardSize(){return 2+(this._trains?.length||0)}render(){return this.config.entity?this._loading?this._renderLoading():(t=this._hasDisruption,this.config.only_show_disrupted&&!t?this._renderEmpty("No disruption detected","Trains will appear when there is disruption"):this._trains&&0!==this._trains.length?this._renderBoard():this._renderEmpty()):this._renderEmpty("No entity selected","Please select a CFL Commute summary sensor in the card configuration");var t}_renderHeader(){const t=this.config.title||"CFL Commute";return B`
      <div class="card-header">
        <div class="header-content">
          <ha-icon icon="mdi:train"></ha-icon>
          <span class="header-title">${t}</span>
          ${this._returnEntityId?B`
            <button
              class="return-toggle ${this._showReturn?"active":""}"
              @click="${this._toggleReturn}"
              title="${this._showReturn?"Show outbound journey":"Show return journey"}"
            >
              <ha-icon icon="mdi:swap-horizontal"></ha-icon>
            </button>
          `:""}
        </div>
        ${this._origin&&this._destination?B`
          <div class="route">
            ${this._origin} → ${this._destination}
          </div>
        `:""}
      </div>
    `}_renderDisruptionBanner(){if(!this._hasDisruption)return"";const t={minor:{cls:"disruption-minor",label:"Minor Delays",icon:"mdi:alert"},major:{cls:"disruption-major",label:"Major Delays",icon:"mdi:alert"},severe:{cls:"disruption-severe",label:"Severe Disruption",icon:"mdi:alert-circle"},critical:{cls:"disruption-critical",label:"Critical Disruption",icon:"mdi:alert-octagon"}},{cls:e,label:i,icon:s}=t[this._disruptionSeverity]||t.minor,r=!!this._resolvedStatusEntityId;return B`
      <div
        class="disruption-banner ${e} ${r?"disruption-clickable":""}"
        @click="${r?()=>this._showDisruptionMoreInfo():null}"
        role="${r?"button":"alert"}"
      >
        <ha-icon icon="${s}" class="disruption-icon"></ha-icon>
        <div class="disruption-content">
          <span class="disruption-label">${i} on this route</span>
          ${this._disruptionMessage?B`
            <span class="disruption-message">${this._disruptionMessage}</span>
          `:""}
        </div>
        ${r?B`
          <ha-icon icon="mdi:chevron-right" class="disruption-chevron"></ha-icon>
        `:""}
      </div>
    `}_showDisruptionMoreInfo(){if(!this._resolvedStatusEntityId)return;const t=new Event("hass-more-info",{bubbles:!0,composed:!0});t.detail={entityId:this._resolvedStatusEntityId},this.dispatchEvent(t)}_renderBoard(){return B`
      <ha-card class="departure-board">
        <div class="board-header-row">
          <span class="col-time">${this._currentTime}</span>
          <span class="col-title">Départ/Abfahrt</span>
          <span class="col-logo">
            <svg viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(685, 175)">
                <path fill="#ffffff" d="m -408.46071,-141.30974 h -102.15373 l -46.27892,70.658093 h 41.84846 l 32.09233,-48.666393 h 34.1583 c 16.29871,0 31.49546,-8.28704 40.33356,-21.9917"/>
                <path fill="#ffffff" d="m -387.96127,-92.643346 53.48716,-82.916484 h -41.82548 l -67.67391,104.908183 h 121.25286 c 16.29871,0 31.49546,-8.287034 40.33339,-21.991699 z m 0,0"/>
                <path fill="#ffffff" d="m -642.28911,-92.643346 39.3004,-60.924784 h 175.56628 c 16.3217,0 31.49547,-8.28703 40.35655,-21.9917 h -226.89569 c -10.39898,0 -20.08648,5.27987 -25.7335,14.02601 l -43.18013,66.985257 c -6.65718,10.307193 0.73463,23.896916 13.01601,23.896916 h 102.38311 l 14.18676,-21.991699 z m 0,0"/>
              </g>
            </svg>
          </span>
        </div>
        ${this._renderDisruptionBanner()}

        <div class="board-content">
          ${this._trains.map((t,e)=>this._renderBoardRow(t,e))}
        </div>
      </ha-card>
    `}_renderBoardRow(t,e){const i=e%2==0,s=function(t){return t?t.is_cancelled?"cancelled":t.is_no_service?"no-service":t.delay_minutes>=10?"major-delay":t.delay_minutes>0||lt(t)?"minor-delay":"on-time":"unknown"}(t),r=t.expected_departure&&t.expected_departure!==t.scheduled_departure,n=function(t){if(!t)return"";if(t.train_category)return t.train_category;if(t.service_type)return t.service_type;if(t.train_number){const e=String(t.train_number);if(e.startsWith("IC"))return"IC";if(e.startsWith("RE"))return"RE";if(e.startsWith("RB"))return"RB";if(e.startsWith("TER"))return"TER";if(e.startsWith("TGV"))return"TGV";if(e.startsWith("ICE"))return"ICE";if(e.startsWith("RJ"))return"RJ"}return""}(t),o=function(t){if(!t)return"";if(t.train_number)return String(t.train_number).replace(/^[A-Z]+/,"");if(t.train_id){const e=t.train_id.match(/train[_-]?(\d+)$/i);if(e)return e[1]}return""}(t),a=t.calling_points||[];return B`
      <div
        class="board-row ${i?"board-row-even":"board-row-odd"} ${s}"
        @click="${()=>this._handleTap(t)}"
        @touchstart="${this._handleTouchStart}"
        @touchend="${this._handleTouchEnd}"
        @touchmove="${this._handleTouchMove}"
      >
        <div class="row-time">
          ${dt(t.scheduled_departure)}
        </div>

        <div class="row-expected">
          ${r?dt(t.expected_departure):""}
        </div>

        <div class="row-dest">
          <span class="destination">${t.direction||this._destination||""}</span>
          ${t.is_cancelled?B`
            <span class="cancelled-label">Train supprimé</span>
          `:""}
          ${!t.is_cancelled&&a.length>0?B`
            <span class="calling-stations">${function(t,e=999){if(!t||0===t.length)return"";const i=t.slice(0,e),s=t.length-e;let r=i.join(" • ");return s>0&&(r+=` +${s}`),r}(a)}</span>
          `:""}
          ${!t.is_cancelled&&t.delay_reason?B`
            <span class="delay-reason">${t.delay_reason}</span>
          `:""}
        </div>

        <div class="row-train">
          ${n?B`
            <span class="category">${n}</span>
          `:""}
          ${o?B`
            <span class="number">${o}</span>
          `:""}
        </div>

        <div class="row-platform">
          ${t.platform||"—"}
        </div>
      </div>
    `}_renderEmpty(t="No trains found",e="Check your time window or stations"){return B`
      <ha-card>
        ${this._renderHeader()}

        <div class="card-content empty">
          <ha-icon icon="mdi:train-variant" class="empty-icon"></ha-icon>
          <div class="empty-message">${t}</div>
          <div class="empty-submessage">${e}</div>
        </div>
      </ha-card>
    `}_renderLoading(){return B`
      <ha-card>
        ${this._renderHeader()}

        <div class="card-content loading">
          <div class="loading-spinner"></div>
          <div class="loading-message">Loading train information...</div>
        </div>
      </ha-card>
    `}_handleTap(t){switch(this.config.tap_action?.action||"more-info"){case"more-info":this._showMoreInfo(t);break;case"url":this._openUrl(t);break;case"navigate":this._navigate(t)}}_showMoreInfo(t){const e=new Event("hass-more-info",{bubbles:!0,composed:!0}),i=t?.train_id||this.config.entity;e.detail={entityId:i},this.dispatchEvent(e)}_openUrl(t){const e=this.config.tap_action?.url_path;if(e)window.open(e,"_blank");else{const t=`https://www.cfl.lu/fr-fr/search/searchresult?SearchDeparture=${this._origin||""}&SearchArrival=${this._destination||""}`;window.open(t,"_blank")}}_navigate(t){const e=this.config.tap_action?.navigation_path;if(e){window.history.pushState(null,"",e);const t=new Event("location-changed",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}_handleTouchStart(t){const e=t.currentTarget;e._pressTimer=setTimeout(()=>{e._pressTimer=null,this._handleHold()},500)}_handleTouchEnd(t){const e=t.currentTarget;e._pressTimer&&(clearTimeout(e._pressTimer),e._pressTimer=null)}_handleTouchMove(t){const e=t.currentTarget;e._pressTimer&&(clearTimeout(e._pressTimer),e._pressTimer=null)}_handleHold(){"refresh"===(this.config.hold_action?.action||"refresh")&&this._refreshData()}_refreshData(){this._hass&&(this._hass.callService("homeassistant","update_entity",{entity_id:this.config.entity}),this._showRefreshFeedback())}_showRefreshFeedback(){const t=document.createElement("div");t.className="refresh-toast",t.textContent="Refreshing...",this.shadowRoot.appendChild(t),this._toastTimer=setTimeout(()=>{this._toastTimer=null,t.isConnected&&t.remove()},2e3)}static getConfigElement(){return document.createElement("cfl-commute-card-editor")}static getStubConfig(){return{entity:""}}}customElements.define("cfl-commute-card",ht),window.customCards=window.customCards||[],window.customCards.push({type:"cfl-commute-card",name:"CFL Commute Card",description:"Display CFL train departures in a station departure board style",preview:!0,documentationURL:"https://github.com/ogerardin/lovelace-cfl-commute-card"});export{ht as default};
