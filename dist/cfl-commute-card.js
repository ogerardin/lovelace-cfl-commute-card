/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let s=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=r.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new s(r,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,_=f?f.emptyScript:"",m=u.reactiveElementPolyfillSupport,g=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const n=r?.call(this);s?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(e)i.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of r){const r=document.createElement("style"),s=t.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=r;const n=s.fromAttribute(e,t.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,e,i,r=!1,s){if(void 0!==t){const n=this.constructor;if(!1===r&&(s=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:s},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==s||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[g("elementProperties")]=new Map,$[g("finalized")]=new Map,m?.({ReactiveElement:$}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,x=t=>t,C=w.trustedTypes,E=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+S,k=`<${T}>`,z=document,I=()=>z.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,D="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,N=/>/g,j=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,H=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,q=z.createTreeWalker(z,129);function J(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,r=[];let s,n=2===e?"<svg>":3===e?"<math>":"",o=P;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,d=0;for(;d<i.length&&(o.lastIndex=d,c=o.exec(i),null!==c);)d=o.lastIndex,o===P?"!--"===c[1]?o=M:void 0!==c[1]?o=N:void 0!==c[2]?(L.test(c[2])&&(s=RegExp("</"+c[2],"g")),o=j):void 0!==c[3]&&(o=j):o===j?">"===c[0]?(o=s??P,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?j:'"'===c[3]?H:U):o===H||o===U?o=j:o===M||o===N?o=P:(o=j,s=void 0);const h=o===j&&t[e+1].startsWith("/>")?" ":"";n+=o===P?i+k:l>=0?(r.push(a),i.slice(0,l)+A+i.slice(l)+S+h):i+S+(-2===l?e:h)}return[J(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class G{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,n=0;const o=t.length-1,a=this.parts,[c,l]=K(t,e);if(this.el=G.createElement(c,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=q.nextNode())&&a.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(A)){const e=l[n++],i=r.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:o[2],strings:i,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?it:Q}),r.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:s}),r.removeAttribute(t));if(L.test(r.tagName)){const t=r.textContent.split(S),e=t.length-1;if(e>0){r.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],I()),q.nextNode(),a.push({type:2,index:++s});r.append(t[e],I())}}}else if(8===r.nodeType)if(r.data===T)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(S,t+1));)a.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,r){if(e===F)return e;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const n=O(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(e=Z(t,s._$AS(t,e.values),s,r)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??z).importNode(e,!0);q.currentNode=r;let s=q.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new rt(s,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(s=q.nextNode(),n++)}return q.currentNode=z,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),O(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new X(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new G(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new Y(this.O(I()),this.O(I()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,r){const s=this.strings;let n=!1;if(void 0===s)t=Z(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const r=t;let o,a;for(t=s[0],o=0;o<s.length-1;o++)a=Z(this,r[i+o],e,o),a===F&&(a=this._$AH[o]),n||=!O(a)||a!==this._$AH[o],a===W?t=W:t!==W&&(t+=(a??"")+s[o+1]),this._$AH[o]=a}n&&!r&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends Q{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===F)return;const i=this._$AH,r=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==W&&(i===W||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(G,Y),(w.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let s=r._$litPart$;if(void 0===s){const t=i?.renderBefore??null;r._$litPart$=s=new Y(e.insertBefore(I(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const at=nt.litElementPolyfillSupport;at?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.2");const ct=n`
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

  /* ==================== FULL VIEW ==================== */

  .train-row {
    padding: var(--row-padding) var(--card-padding);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .train-row:hover {
    background-color: var(--secondary-background-color, #f5f5f5);
  }

  .train-row:last-child {
    border-bottom: none;
  }

  .train-main {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 4px;
  }

  .train-time {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }

  .train-time ha-icon {
    --mdc-icon-size: 20px;
    color: var(--secondary-text-color, #757575);
  }

  .time {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--primary-text-color, #212121);
  }

  .expected-time {
    font-size: 1rem;
    color: var(--status-minor-delay);
    margin-left: 4px;
    min-width: 3.5rem;
  }

  .train-platform {
    font-size: 0.9rem;
    color: var(--secondary-text-color, #757575);
    flex: 0 0 auto;
  }

  .train-status {
    font-size: 0.9rem;
    font-weight: 500;
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .train-details {
    margin-left: 32px;
    font-size: 0.85rem;
    color: var(--secondary-text-color, #757575);
  }

  .operator {
    font-weight: 500;
  }

  .delay-reason {
    margin-top: 4px;
    color: var(--status-minor-delay);
  }

  .calling-points {
    margin-top: 4px;
  }

  .journey-time {
    margin-top: 4px;
    font-size: 0.8rem;
  }

  /* ==================== STATUS COLORS ==================== */

  .train-row.on-time .train-status {
    color: var(--status-on-time);
  }

  .train-row.minor-delay .train-status {
    color: var(--status-minor-delay);
  }

  .train-row.major-delay .train-status {
    color: var(--status-major-delay);
  }

  .train-row.cancelled {
    opacity: 0.6;
  }

  .train-row.cancelled .train-status {
    color: var(--status-cancelled);
  }

  .train-row.cancelled .time {
    text-decoration: line-through;
  }

  .train-row.no-service {
    opacity: 0.6;
  }

  .train-row.no-service .train-status {
    color: var(--status-no-service);
  }

  /* ==================== COMPACT VIEW ==================== */

  .card-content.compact {
    padding: 8px 0;
  }

  .train-row-compact {
    display: grid;
    grid-template-columns: 60px 1fr 70px;
    align-items: center;
    padding: 8px var(--card-padding);
    border-bottom: 1px solid var(--divider-color, #e0e0e0);
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .train-row-compact:hover {
    background-color: var(--secondary-background-color, #f5f5f5);
  }

  .train-row-compact:last-child {
    border-bottom: none;
  }

  .train-row-compact .time {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .train-row-compact .platform {
    font-size: 0.9rem;
    color: var(--secondary-text-color, #757575);
    text-align: center;
  }

  .train-row-compact .status {
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
  }

  .train-row-compact .status .status-icon {
    display: flex;
    align-items: center;
    line-height: 1;
  }

  .train-row-compact .status .delay-text {
    display: flex;
    align-items: center;
    line-height: 1;
  }

  .train-row-compact.on-time .status {
    color: var(--status-on-time);
  }

  .train-row-compact.minor-delay .status {
    color: var(--status-minor-delay);
  }

  .train-row-compact.major-delay .status {
    color: var(--status-major-delay);
  }

  .train-row-compact.cancelled .status {
    color: var(--status-cancelled);
  }

  .train-row-compact.cancelled .time {
    text-decoration: line-through;
    opacity: 0.6;
  }

  .train-row-compact.no-service .status {
    color: var(--status-no-service);
  }

  .train-row-compact.no-service .time {
    opacity: 0.6;
  }

  /* ==================== NEXT-ONLY VIEW ==================== */

  .card-content.next-only {
    padding: var(--card-padding);
    text-align: center;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .next-train-time {
    font-size: 3rem;
    font-weight: 700;
    margin: 16px 0;
    color: var(--primary-text-color, #212121);
  }

  .next-train-expected {
    font-size: 1rem;
    color: var(--status-minor-delay);
    margin-bottom: 16px;
  }

  .next-train-platform {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 12px 0;
    color: var(--primary-text-color, #212121);
  }

  .next-train-status {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .next-train-status.on-time {
    color: var(--status-on-time);
  }

  .next-train-status.minor-delay {
    color: var(--status-minor-delay);
  }

  .next-train-status.major-delay {
    color: var(--status-major-delay);
  }

  .next-train-status.cancelled {
    color: var(--status-cancelled);
  }

  .next-train-status.no-service {
    color: var(--status-no-service);
  }

  .next-train-operator {
    font-size: 1rem;
    color: var(--secondary-text-color, #757575);
    margin: 12px 0;
  }

  .next-train-calling {
    margin-top: 16px;
    font-size: 0.9rem;
    text-align: left;
    padding: 12px;
    background: var(--secondary-background-color, #f5f5f5);
    border-radius: var(--border-radius);
    color: var(--primary-text-color, #212121);
  }

  .next-train-calling strong {
    display: block;
    margin-bottom: 8px;
  }

  /* ==================== DEPARTURE BOARD VIEW (CFL Station Style) ==================== */

  ha-card.departure-board {
    background: #000000;
    color: #ffffff;
    font-family: Helvetica, Arial, sans-serif;
  }

  .board-header {
    display: none;
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

  /* Time column - scheduled */
  .board-row .row-time {
    width: 10%;
    display: flex;
    align-items: flex-start;
    font-size: 1.4rem;
    color: #ffffff;
  }

  /* Expected time column */
  .board-row .row-expected {
    width: 7%;
    display: flex;
    align-items: flex-start;
    font-size: 1.4rem;
    color: #ffcc00;
  }

  /* Destination column */
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

  /* Train info column */
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

  /* Platform column */
  .board-row .row-platform {
    width: 8%;
    text-align: right;
    font-size: 1.4rem;
    color: #ffffff;
  }

  

  /* ==================== FOOTER ==================== */

  .card-footer {
    padding: 8px var(--card-padding);
    border-top: 1px solid var(--divider-color, #e0e0e0);
    font-size: 0.8rem;
    color: var(--secondary-text-color, #757575);
    text-align: center;
    background: var(--card-background-color, #fff);
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

  /* ==================== ANIMATIONS ==================== */

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

  .train-row,
  .train-row-compact {
    animation: slideIn 0.3s ease-out;
  }

  /* Disable animations if user prefers reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* ==================== RESPONSIVE ==================== */

  @media (max-width: 600px) {
    .train-main {
      flex-wrap: wrap;
    }

    .time {
      font-size: 1.3rem;
    }

    .next-train-time {
      font-size: 2.5rem;
    }

    .board-row > span {
      padding: 6px 8px;
      font-size: 0.85rem;
    }

    .col-dest {
      width: 35%;
    }

    .col-status {
      width: 30%;
    }
  }

  @media (max-width: 400px) {
    .train-platform {
      flex-basis: 100%;
      margin-left: 32px;
    }

    .card-padding {
      --card-padding: 12px;
    }
  }

  /* ==================== COMPACT HEIGHT MODE ==================== */

  ha-card.compact-height .train-row {
    padding: 8px var(--card-padding);
  }

  ha-card.compact-height .train-main {
    margin-bottom: 0;
  }

  ha-card.compact-height .train-details {
    display: none;
  }

  ha-card.compact-height .card-content.next-only {
    min-height: 150px;
    padding: 12px;
  }

  ha-card.compact-height .next-train-time {
    font-size: 2rem;
    margin: 8px 0;
  }

  /* ==================== FONT SIZE VARIANTS ==================== */

  :host([font-size="small"]) .time {
    font-size: 1.2rem;
  }

  :host([font-size="small"]) .next-train-time {
    font-size: 2.5rem;
  }

  :host([font-size="large"]) .time {
    font-size: 1.8rem;
  }

  :host([font-size="large"]) .next-train-time {
    font-size: 3.5rem;
  }

  :host([font-size="large"]) .train-details,
  :host([font-size="large"]) .operator {
    font-size: 1rem;
  }

  /* ==================== NO ANIMATIONS MODE ==================== */

  :host([no-animations]) .train-row,
  :host([no-animations]) .train-row-compact,
  :host([no-animations]) * {
    animation: none !important;
    transition: none !important;
  }
`;function lt(t){if(!t||"unknown"===t||"Unknown"===t)return"—";const e=String(t).trim();if(!e)return"—";const i=e.match(/(\d{1,2}):(\d{2})(?::\d{2})?/);if(i)return`${i[1].padStart(2,"0")}:${i[2]}`;try{const t=new Date(e);return isNaN(t.getTime())?e:t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch(t){return console.warn("formatTime: could not parse time value:",e,t),e}}function dt(t){return!(!t||!t.expected_departure)&&(t.expected_departure!==t.scheduled_departure&&!/\d{1,2}:\d{2}/.test(t.expected_departure))}function ht(t){return t?t.is_cancelled?"cancelled":t.is_no_service?"no-service":t.delay_minutes>=10?"major-delay":t.delay_minutes>0||dt(t)?"minor-delay":"on-time":"unknown"}function pt(t,e=!0){return e&&t?t.is_cancelled?"❌":t.is_no_service?"⊗":t.delay_minutes>=10?"🔴":t.delay_minutes>0||dt(t)?"⚠️":"✓":""}function ut(t){return t?t.is_cancelled?"Cancelled":t.is_no_service?"No service":t.delay_minutes>0?`Delayed ${t.delay_minutes} min${1!==t.delay_minutes?"s":""}`:dt(t)?"Delayed":"On time":"Unknown"}function ft(t){return null==t||""===t?"":String("object"==typeof t?t.text||t.name||t.number||JSON.stringify(t):t)}customElements.define("cfl-commute-card-editor",class extends ot{static get properties(){return{hass:{type:Object},_config:{type:Object}}}static get styles(){return n`
      .card-config {
        padding: 16px;
      }

      .option {
        margin-bottom: 16px;
      }

      .option-label {
        font-weight: 500;
        margin-bottom: 4px;
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
        <!-- Basic Configuration -->
        <div class="section-header">Basic Configuration</div>

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

        <!-- View & Display -->
        <div class="section-header">View & Display</div>

        <div class="option">
          <span class="native-select-label">View Mode</span>
          <div class="native-select-container">
            <select @change=${this._viewChanged}>
              <option value="full" ?selected=${"full"===(this._config.view||"full")}>Full View</option>
              <option value="compact" ?selected=${"compact"===(this._config.view||"full")}>Compact View</option>
              <option value="next-only" ?selected=${"next-only"===(this._config.view||"full")}>Next Train Only</option>
              <option value="board" ?selected=${"board"===(this._config.view||"full")}>Departure Board</option>
            </select>
          </div>
          <div class="info">Choose how to display train information</div>
        </div>

        <div class="option">
          <span class="native-select-label">Font Size</span>
          <div class="native-select-container">
            <select @change=${this._fontSizeChanged}>
              <option value="small" ?selected=${"small"===(this._config.font_size||"medium")}>Small</option>
              <option value="medium" ?selected=${"medium"===(this._config.font_size||"medium")}>Medium</option>
              <option value="large" ?selected=${"large"===(this._config.font_size||"medium")}>Large</option>
            </select>
          </div>
        </div>

        <!-- Display Options -->
        <div class="section-header">Display Options</div>

        <div class="switches">
          <ha-formfield label="Show Card Header">
            <ha-switch
              .checked=${!1!==this._config.show_header}
              @change=${this._toggleChanged("show_header")}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Route Information">
            <ha-switch
              .checked=${!1!==this._config.show_route}
              @change=${this._toggleChanged("show_route")}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Last Updated Time">
            <ha-switch
              .checked=${!0===this._config.show_last_updated}
              @change=${this._toggleChanged("show_last_updated")}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Platform Numbers">
            <ha-switch
              .checked=${!1!==this._config.show_platform}
              @change=${this._toggleChanged("show_platform")}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Train Operator">
            <ha-switch
              .checked=${!1!==this._config.show_operator}
              @change=${this._toggleChanged("show_operator")}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Calling Points">
            <ha-switch
              .checked=${!0===this._config.show_calling_points}
              @change=${this._toggleChanged("show_calling_points")}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Delay Reasons">
            <ha-switch
              .checked=${!1!==this._config.show_delay_reason}
              @change=${this._toggleChanged("show_delay_reason")}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Journey Time">
            <ha-switch
              .checked=${!0===this._config.show_journey_time}
              @change=${this._toggleChanged("show_journey_time")}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Status Icons">
            <ha-switch
              .checked=${!1!==this._config.status_icons}
              @change=${this._toggleChanged("status_icons")}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Compact Height Mode">
            <ha-switch
              .checked=${!0===this._config.compact_height}
              @change=${this._toggleChanged("compact_height")}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Animations">
            <ha-switch
              .checked=${!1!==this._config.show_animations}
              @change=${this._toggleChanged("show_animations")}
            ></ha-switch>
          </ha-formfield>
        </div>

        <!-- Filtering Options -->
        <div class="section-header">Filtering Options</div>

        <div class="switches">
          <ha-formfield label="Hide On-Time Trains">
            <ha-switch
              .checked=${!0===this._config.hide_on_time_trains}
              @change=${this._toggleChanged("hide_on_time_trains")}
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

        <div class="option">
          <ha-textfield
            label="Max Calling Points to Display"
            type="number"
            min="1"
            max="20"
            .value=${this._config.max_calling_points||3}
            @input=${this._maxCallingPointsChanged}
          ></ha-textfield>
        </div>

        <!-- Advanced Options -->
        <div class="section-header">Advanced Options</div>

        <div class="option">
          <ha-entity-picker
            label="Status Sensor (Optional)"
            .hass=${this._hass}
            .value=${this._config.status_entity||""}
            .includeDomains=${["sensor"]}
            @value-changed=${this._statusEntityChanged}
            allow-custom-entity
          ></ha-entity-picker>
          <div class="info">Sensor whose state drives the disruption banner. Expected states: Normal, Minor Delays, Major Delays, Severe Disruption, Critical. Auto-discovered from the summary entity name if not set.</div>
        </div>

        <div class="switches">
          <ha-formfield label="Only Show When Disrupted">
            <ha-switch
              .checked=${!0===this._config.only_show_disrupted}
              @change=${this._toggleChanged("only_show_disrupted")}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="option">
          <ha-textfield
            label="Auto Refresh Interval (seconds)"
            type="number"
            min="10"
            max="600"
            .value=${this._config.refresh_interval||60}
            @input=${this._refreshIntervalChanged}
          ></ha-textfield>
        </div>

        <!-- Tap Actions -->
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
    `:B``}_entityChanged(t){this._config&&this._hass&&(this._config={...this._config,entity:t.detail.value},this._fireConfigChanged())}_titleChanged(t){this._config&&this._hass&&(this._config={...this._config,title:t.target.value},this._fireConfigChanged())}_viewChanged(t){this._config&&this._hass&&(this._config={...this._config,view:t.target.value},this._fireConfigChanged())}_fontSizeChanged(t){this._config&&this._hass&&(this._config={...this._config,font_size:t.target.value},this._fireConfigChanged())}_toggleChanged(t){return e=>{this._config&&this._hass&&(this._config={...this._config,[t]:e.target.checked},this._fireConfigChanged())}}_minDelayChanged(t){if(!this._config||!this._hass)return;const e=parseInt(t.target.value,10)||0;this._config={...this._config,min_delay_to_show:e},this._fireConfigChanged()}_maxCallingPointsChanged(t){if(!this._config||!this._hass)return;const e=parseInt(t.target.value,10)||3;this._config={...this._config,max_calling_points:e},this._fireConfigChanged()}_statusEntityChanged(t){this._config&&this._hass&&(this._config={...this._config,status_entity:t.detail.value},this._fireConfigChanged())}_refreshIntervalChanged(t){if(!this._config||!this._hass)return;const e=parseInt(t.target.value,10)||60;this._config={...this._config,refresh_interval:e},this._fireConfigChanged()}_tapActionChanged(t){this._config&&this._hass&&(this._config={...this._config,tap_action:{action:t.target.value}},this._fireConfigChanged())}_urlPathChanged(t){this._config&&this._hass&&(this._config={...this._config,tap_action:{...this._config.tap_action,url_path:t.target.value}},this._fireConfigChanged())}_navigationPathChanged(t){this._config&&this._hass&&(this._config={...this._config,tap_action:{...this._config.tap_action,navigation_path:t.target.value}},this._fireConfigChanged())}_holdActionChanged(t){this._config&&this._hass&&(this._config={...this._config,hold_action:{action:t.target.value}},this._fireConfigChanged())}_fireConfigChanged(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}}),console.info("%c CFL-COMMUTE-CARD \n%c Version 1.0.0 ","color: cyan; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");class _t extends ot{static get properties(){return{hass:{type:Object},config:{type:Object},_trains:{type:Array},_origin:{type:String},_destination:{type:String},_lastUpdated:{type:String},_hasDisruption:{type:Boolean},_disruptionSeverity:{type:String},_disruptionMessage:{type:String},_resolvedStatusEntityId:{type:String},_loading:{type:Boolean},_returnEntityId:{type:String},_showReturn:{type:Boolean},_currentTime:{type:String}}}static get styles(){return ct}constructor(){super(),this._trains=[],this._origin="",this._destination="",this._lastUpdated="",this._hasDisruption=!1,this._disruptionSeverity="",this._disruptionMessage="",this._resolvedStatusEntityId="",this._loading=!0,this._toastTimer=null,this._returnEntityId=null,this._showReturn=!1,this._returnEntityCacheKey=null,this._currentTime=this._getCurrentTime(),this._timeInterval=null}_getCurrentTime(){return(new Date).toLocaleTimeString("de-LU",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}connectedCallback(){super.connectedCallback(),this._timeInterval=setInterval(()=>{this._currentTime=this._getCurrentTime()},1e3)}disconnectedCallback(){super.disconnectedCallback(),this._timeInterval&&(clearInterval(this._timeInterval),this._timeInterval=null)}setConfig(t){if(!t)throw new Error("Invalid configuration");if(!t.entity&&""!==t.entity)throw new Error("Please select a CFL Commute summary sensor");this.config={view:"full",show_header:!0,show_route:!0,show_last_updated:!1,show_platform:!0,show_operator:!0,show_calling_points:!1,show_delay_reason:!0,show_journey_time:!1,show_service_type:!1,max_calling_points:3,hide_on_time_trains:!1,only_show_disrupted:!1,min_delay_to_show:0,auto_refresh:!0,refresh_interval:60,card_style:"departure-board",font_size:"medium",compact_height:!1,show_animations:!0,status_icons:!0,...t},t.colors&&(t.colors.on_time&&this.style.setProperty("--custom-on-time-color",t.colors.on_time),t.colors.minor_delay&&this.style.setProperty("--custom-minor-delay-color",t.colors.minor_delay),t.colors.major_delay&&this.style.setProperty("--custom-major-delay-color",t.colors.major_delay),t.colors.cancelled&&this.style.setProperty("--custom-cancelled-color",t.colors.cancelled)),t.font_size&&this.setAttribute("font-size",t.font_size),!1===t.show_animations&&this.setAttribute("no-animations","")}set hass(t){if(this._hass=t,!this.config.entity)return this._loading=!1,void(this._trains=[]);const e=t.states[this.config.entity];if(!e)return console.error("Entity not found:",this.config.entity),this._loading=!1,void(this._trains=[]);const i=e.attributes.origin_name||e.attributes.origin||e.attributes.from_station||"",r=e.attributes.destination_name||e.attributes.destination||e.attributes.to_station||"",s=`${i}|${r}`;s!==this._returnEntityCacheKey?(this._returnEntityCacheKey=s,this._returnEntityId=this._findReturnEntity(t,i,r)):this._returnEntityId&&!t.states[this._returnEntityId]&&(this._returnEntityCacheKey=null,this._returnEntityId=this._findReturnEntity(t,i,r)),this._showReturn&&!this._returnEntityId&&(this._showReturn=!1);const n=this._showReturn&&this._returnEntityId?this._returnEntityId:this.config.entity,o=t.states[n];if(!o)return this._loading=!1,void(this._trains=[]);if(o.attributes.all_trains&&o.attributes.all_trains.length>0){const t=n.replace("sensor.","").replace("_summary","").replace("_commute_summary","");this._trains=o.attributes.all_trains.map((e,i)=>{const r=null!=e.train_number&&""!==e.train_number?String(e.train_number).toLowerCase().replace(/[^a-z0-9]/g,"_"):String(i+1);return{...e,train_id:`sensor.${t}_train_${r}`,platform:ft(e.platform)}})}else this._trains=this._getTrainsFromIndividualSensors(t,n);var a;let c;if(this._origin=this._showReturn?r:i,this._destination=this._showReturn?i:r,this._lastUpdated=o.attributes.last_updated||o.last_updated||o.last_changed||"",this._trains&&this._trains.length>0&&(this._trains=(a=this._trains)&&0!==a.length?[...a].sort((t,e)=>{const i=new Date(t.scheduled_departure).getTime(),r=new Date(e.scheduled_departure).getTime(),s=!isNaN(i),n=!isNaN(r);return s||n?s?n?i-r:-1:1:0}):[]),this._hasDisruption=!1,this._disruptionSeverity="",this._disruptionMessage="",this._resolvedStatusEntityId="",this._showReturn&&this._returnEntityId){const e=`sensor.${this._returnEntityId.replace("sensor.","").replace("_summary","").replace("_commute_summary","")}_status`;t.states[e]&&(c=e)}else if(c=this.config.status_entity,!c){const e=`sensor.${this.config.entity.replace("sensor.","").replace("_summary","").replace("_commute_summary","")}_status`;t.states[e]&&(c=e)}if(c){this._resolvedStatusEntityId=c;const e=t.states[c];if(e){const t=(e.state||"").toLowerCase().trim();"normal"!==t&&"unknown"!==t&&"unavailable"!==t&&""!==t&&(this._hasDisruption=!0,t.includes("critical")?this._disruptionSeverity="critical":t.includes("severe")?this._disruptionSeverity="severe":t.includes("major")?this._disruptionSeverity="major":this._disruptionSeverity="minor",this._disruptionMessage=e.attributes.message||e.attributes.reason||e.attributes.disruption_message||"")}}this._trains&&this._trains.length>0&&(this._trains=function(t,e){if(!t||0===t.length)return[];let i=[...t];return e.hide_on_time_trains&&(i=i.filter(t=>t.is_cancelled||t.is_no_service||t.delay_minutes>0||dt(t))),e.min_delay_to_show>0&&(i=i.filter(t=>t.is_cancelled||t.is_no_service||dt(t)||t.delay_minutes>=e.min_delay_to_show)),i}(this._trains,this.config)),this._loading=!1,this.requestUpdate()}_findReturnEntity(t,e,i){if(!e||!i)return null;const r=e.toLowerCase().trim(),s=i.toLowerCase().trim();for(const[e,i]of Object.entries(t.states)){if(e===this.config.entity)continue;if(!i.attributes)continue;const t=i.attributes;if(!(t.all_trains||t.origin_name||t.origin||t.from_station))continue;const n=(t.origin_name||t.origin||t.from_station||"").toLowerCase().trim(),o=(t.destination_name||t.destination||t.to_station||"").toLowerCase().trim();if(n&&o&&(n===s&&o===r))return e}return null}_toggleReturn(){this._showReturn=!this._showReturn,this._hass&&(this.hass=this._hass)}_getTrainsFromIndividualSensors(t,e){const i=(e||this.config.entity).replace("sensor.","").replace("_summary","").replace("_commute_summary",""),r=[`sensor.${i}_train_`,`sensor.${i}_train`,`sensor.${i.replace(/_/g,"-")}_train_`,`sensor.${i.replace(/_/g,"")}_train_`];let s=[];for(const e of r){const i=Object.keys(t.states).filter(t=>t.startsWith(e));if(i.length>0){s=i;break}}s.sort((t,e)=>parseInt(t.match(/train[_-]?(\d+)$/i)?.[1]||"0",10)-parseInt(e.match(/train[_-]?(\d+)$/i)?.[1]||"0",10));const n=s.map(e=>{const i=t.states[e];if(!i)return console.warn(`cfl-commute-card: train sensor not found: ${e}`),null;let r=i.attributes.calling_points||i.attributes.stops||i.attributes.calling_at||i.attributes["Calling at"]||[];"string"==typeof r&&(r=r.split(",").map(t=>t.trim()).filter(t=>t));const s=i.attributes.scheduled_departure||i.attributes.scheduled||i.attributes.departure||i.attributes.departure_time||i.attributes.std||i.attributes.aimed_departure_time||i.attributes["Scheduled Departure"]||i.state;return{train_id:e,scheduled_departure:s,expected_departure:i.attributes.expected_departure||i.attributes.expected||i.attributes.estimated||i.attributes.estimated_departure||i.attributes.etd||i.attributes.expected_arrival||i.attributes["Expected Departure"]||s,platform:ft(i.attributes.platform||i.attributes.Platform||""),operator:i.attributes.operator||i.attributes.service_operator||i.attributes.Operator||"",direction:i.attributes.direction||i.attributes.destination||"",is_cancelled:i.attributes.is_cancelled||i.attributes.cancelled||"Cancelled"===i.state||"Canceled"===i.state||!1,is_no_service:i.attributes.is_no_service||i.attributes.no_service||"No service"===i.state||"No Service"===i.state||!1,delay_minutes:parseInt(i.attributes.delay_minutes||i.attributes.delay||i.attributes.minutes_late||i.attributes["Delay minutes"]||"0",10),delay_reason:i.attributes.delay_reason||i.attributes.reason||i.attributes["Delay reason"]||"",calling_points:r,journey_duration:i.attributes.journey_duration||i.attributes.duration||"",service_type:i.attributes.service_type||i.attributes.type||""}}).filter(t=>null!==t);return n}getCardSize(){const t=this.config.view||"full",e=this._trains?.length||0;switch(t){case"compact":return 1+Math.ceil(.5*e);case"next-only":return 3;default:return 2+e}}render(){if(!this.config.entity)return this._renderEmpty("No entity selected","Please select a rail commute summary sensor in the card configuration");if(this._loading)return this._renderLoading();if(t=this._hasDisruption,this.config.only_show_disrupted&&!t)return this._renderEmpty("No disruption detected","Trains will appear when there is disruption");var t;if(!this._trains||0===this._trains.length)return this._renderEmpty();switch(this.config.view||"full"){case"compact":return this._renderCompact();case"next-only":return this._renderNextOnly();case"board":return this._renderBoard();default:return this._renderFull()}}_renderHeader(){const t=!1!==this.config.show_header,e=!1!==this.config.show_route;if(!t)return"";const i=this.config.title||"CFL Commute";return B`
      <div class="card-header">
        <div class="header-content">
          <ha-icon icon="mdi:train"></ha-icon>
          <span class="header-title">${i}</span>
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
        ${e&&this._origin&&this._destination?B`
          <div class="route">
            ${this._origin} → ${this._destination}
          </div>
        `:""}
      </div>
    `}_renderDisruptionBanner(){if(!this._hasDisruption)return"";const t={minor:{cls:"disruption-minor",label:"Minor Delays",icon:"mdi:alert"},major:{cls:"disruption-major",label:"Major Delays",icon:"mdi:alert"},severe:{cls:"disruption-severe",label:"Severe Disruption",icon:"mdi:alert-circle"},critical:{cls:"disruption-critical",label:"Critical Disruption",icon:"mdi:alert-octagon"}},{cls:e,label:i,icon:r}=t[this._disruptionSeverity]||t.minor,s=!!this._resolvedStatusEntityId;return B`
      <div
        class="disruption-banner ${e} ${s?"disruption-clickable":""}"
        @click="${s?()=>this._showDisruptionMoreInfo():null}"
        role="${s?"button":"alert"}"
      >
        <ha-icon icon="${r}" class="disruption-icon"></ha-icon>
        <div class="disruption-content">
          <span class="disruption-label">${i} on this route</span>
          ${this._disruptionMessage?B`
            <span class="disruption-message">${this._disruptionMessage}</span>
          `:""}
        </div>
        ${s?B`
          <ha-icon icon="mdi:chevron-right" class="disruption-chevron"></ha-icon>
        `:""}
      </div>
    `}_showDisruptionMoreInfo(){if(!this._resolvedStatusEntityId)return;const t=new Event("hass-more-info",{bubbles:!0,composed:!0});t.detail={entityId:this._resolvedStatusEntityId},this.dispatchEvent(t)}_renderFooter(){return!1===this.config.show_last_updated?"":B`
      <div class="card-footer">
        <span class="last-updated">
          Last updated: ${function(t){if(!t)return"Unknown";try{const e=new Date,i=new Date(t),r=Math.floor((e-i)/1e3);if(r<0)return"Just now";if(r<60)return"Just now";if(r<3600){const t=Math.floor(r/60);return`${t} minute${1!==t?"s":""} ago`}if(r<86400){const t=Math.floor(r/3600);return`${t} hour${1!==t?"s":""} ago`}const s=Math.floor(r/86400);return`${s} day${1!==s?"s":""} ago`}catch(t){return console.error("Error calculating relative time:",t),"Unknown"}}(this._lastUpdated)}
        </span>
      </div>
    `}_renderFull(){const t=this.config.compact_height?"compact-height":"";return B`
      <ha-card class="${t}">
        ${this._renderHeader()}
        ${this._renderDisruptionBanner()}

        <div class="card-content">
          ${this._trains.map(t=>this._renderTrainRow(t))}
        </div>

        ${this._renderFooter()}
      </ha-card>
    `}_renderTrainRow(t){const e=ht(t),i=!1!==this.config.status_icons?pt(t):"",r=!1!==this.config.show_platform,s=!1!==this.config.show_operator,n=!1!==this.config.show_delay_reason,o=!0===this.config.show_calling_points,a=!0===this.config.show_journey_time;return B`
      <div
        class="train-row ${e}"
        @click="${()=>this._handleTap(t)}"
        @touchstart="${this._handleTouchStart}"
        @touchend="${this._handleTouchEnd}"
        @touchmove="${this._handleTouchMove}"
      >
        <div class="train-main">
          <div class="train-time">
            <ha-icon icon="${function(t){return t?t.is_cancelled?"mdi:close-circle":t.delay_minutes>0?"mdi:train-variant":"mdi:train":"mdi:train"}(t)}"></ha-icon>
            <span class="time">${lt(t.scheduled_departure)}</span>
            <span class="expected-time">${t.expected_departure&&t.expected_departure!==t.scheduled_departure?lt(t.expected_departure):""}</span>
          </div>

          ${r?B`
            <div class="train-platform">
              Platform ${ft(t.platform)||"—"}
            </div>
          `:""}

          <div class="train-status">
            ${i}
            ${ut(t)}
          </div>
        </div>

        <div class="train-details">
          ${s&&t.operator?B`
            <span class="operator">${t.operator}</span>
          `:""}

          ${n&&t.delay_reason?B`
            <div class="delay-reason">
              → ${t.delay_reason}
            </div>
          `:""}

          ${o&&t.calling_points&&t.calling_points.length>0?B`
            <div class="calling-points">
              Calling at: ${function(t,e=3){if(!t||0===t.length)return"";const i=t.slice(0,e),r=t.length-e;let s=i.join(", ");return r>0&&(s+=` +${r} more`),s}(t.calling_points,this.config.max_calling_points)}
            </div>
          `:""}

          ${a&&t.journey_duration?B`
            <div class="journey-time">
              Journey time: ${t.journey_duration} mins
            </div>
          `:""}
        </div>
      </div>
    `}_renderCompact(){return B`
      <ha-card class="${this.config.compact_height?"compact-height":""}">
        ${this._renderHeader()}
        ${this._renderDisruptionBanner()}

        <div class="card-content compact">
          ${this._trains.map(t=>B`
            <div
              class="train-row-compact ${ht(t)}"
              @click="${()=>this._handleTap(t)}"
              @touchstart="${this._handleTouchStart}"
              @touchend="${this._handleTouchEnd}"
              @touchmove="${this._handleTouchMove}"
            >
              <span class="time">${lt(t.scheduled_departure)}</span>
              <span class="platform">Plat ${ft(t.platform)||"—"}</span>
              <span class="status">
                ${!1!==this.config.status_icons?B`<span class="status-icon">${pt(t)}</span>`:""}
                ${t.delay_minutes>0?B`<span class="delay-text">+${t.delay_minutes}m</span>`:""}
              </span>
            </div>
          `)}
        </div>

        ${this._renderFooter()}
      </ha-card>
    `}_renderNextOnly(){const t=this._trains[0];if(!t)return this._renderEmpty();const e=ht(t),i=!1!==this.config.status_icons?pt(t):"";return B`
      <ha-card class="${this.config.compact_height?"compact-height":""}">
        ${this._renderHeader()}
        ${this._renderDisruptionBanner()}

        <div class="card-content next-only">
          <div class="next-train-time">
            ${lt(t.scheduled_departure)}
          </div>

          ${t.expected_departure&&t.expected_departure!==t.scheduled_departure?B`
            <div class="next-train-expected">
              Expected: ${lt(t.expected_departure)}
            </div>
          `:""}

          <div class="next-train-platform">
            Platform ${ft(t.platform)||"—"}
          </div>

          <div class="next-train-status ${e}">
            ${i} ${ut(t)}
          </div>

          ${t.operator?B`
            <div class="next-train-operator">
              ${t.operator}
            </div>
          `:""}

          ${t.calling_points&&t.calling_points.length>0?B`
            <div class="next-train-calling">
              <strong>Calling at:</strong><br>
              ${t.calling_points.join(", ")}
            </div>
          `:""}
        </div>

        ${this._renderFooter()}
      </ha-card>
    `}_renderBoard(){return B`
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
    `}_renderBoardRow(t,e){const i=e%2==0,r=ht(t),s=t.expected_departure&&t.expected_departure!==t.scheduled_departure,n=function(t){if(!t)return"";if(t.train_category)return t.train_category;if(t.service_type)return t.service_type;if(t.train_number){const e=String(t.train_number);if(e.startsWith("IC"))return"IC";if(e.startsWith("RE"))return"RE";if(e.startsWith("RB"))return"RB";if(e.startsWith("TER"))return"TER";if(e.startsWith("TGV"))return"TGV";if(e.startsWith("ICE"))return"ICE";if(e.startsWith("RJ"))return"RJ"}return""}(t),o=function(t){if(!t)return"";if(t.train_number)return String(t.train_number).replace(/^[A-Z]+/,"");if(t.train_id){const e=t.train_id.match(/train[_-]?(\d+)$/i);if(e)return e[1]}return""}(t),a=t.calling_points||[];return B`
      <div
        class="board-row ${i?"board-row-even":"board-row-odd"} ${r}"
        @click="${()=>this._handleTap(t)}"
        @touchstart="${this._handleTouchStart}"
        @touchend="${this._handleTouchEnd}"
        @touchmove="${this._handleTouchMove}"
      >
        <div class="row-time">
          ${lt(t.scheduled_departure)}
        </div>

        <div class="row-expected">
          ${s?lt(t.expected_departure):""}
        </div>

        <div class="row-dest">
          <span class="destination">${t.direction||this._destination||""}</span>
          ${t.is_cancelled?B`
            <span class="cancelled-label">Train supprimé</span>
          `:""}
          ${!t.is_cancelled&&a.length>0?B`
            <span class="calling-stations">${function(t,e=999){if(!t||0===t.length)return"";const i=t.slice(0,e),r=t.length-e;let s=i.join(" • ");return r>0&&(s+=` +${r}`),s}(a)}</span>
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
          ${ft(t.platform)||"—"}
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
    `}_handleTap(t){switch(this.config.tap_action?.action||"more-info"){case"more-info":this._showMoreInfo(t);break;case"url":this._openUrl(t);break;case"navigate":this._navigate(t)}}_showMoreInfo(t){const e=new Event("hass-more-info",{bubbles:!0,composed:!0}),i=t?.train_id||this.config.entity;e.detail={entityId:i},this.dispatchEvent(e)}_openUrl(t){const e=this.config.tap_action?.url_path;if(e)window.open(e,"_blank");else{const t=`https://www.cfl.lu/fr-fr/search/searchresult?SearchDeparture=${this._origin||""}&SearchArrival=${this._destination||""}`;window.open(t,"_blank")}}_navigate(t){const e=this.config.tap_action?.navigation_path;if(e){window.history.pushState(null,"",e);const t=new Event("location-changed",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}_handleTouchStart(t){const e=t.currentTarget;e._pressTimer=setTimeout(()=>{e._pressTimer=null,this._handleHold()},500)}_handleTouchEnd(t){const e=t.currentTarget;e._pressTimer&&(clearTimeout(e._pressTimer),e._pressTimer=null)}_handleTouchMove(t){const e=t.currentTarget;e._pressTimer&&(clearTimeout(e._pressTimer),e._pressTimer=null)}_handleHold(){"refresh"===(this.config.hold_action?.action||"refresh")&&this._refreshData()}_refreshData(){this._hass&&(this._hass.callService("homeassistant","update_entity",{entity_id:this.config.entity}),this._showRefreshFeedback())}_showRefreshFeedback(){const t=document.createElement("div");t.className="refresh-toast",t.textContent="Refreshing...",this.shadowRoot.appendChild(t),this._toastTimer=setTimeout(()=>{this._toastTimer=null,t.isConnected&&t.remove()},2e3)}disconnectedCallback(){super.disconnectedCallback(),this._toastTimer&&(clearTimeout(this._toastTimer),this._toastTimer=null)}static getConfigElement(){return document.createElement("cfl-commute-card-editor")}static getStubConfig(){return{entity:"",view:"full",show_platform:!0,show_operator:!0,show_calling_points:!1}}}customElements.define("cfl-commute-card",_t),window.customCards=window.customCards||[],window.customCards.push({type:"cfl-commute-card",name:"CFL Commute Card",description:"Display CFL train departure information in a beautiful station-board interface",preview:!0,documentationURL:"https://github.com/ogerardin/lovelace-cfl-commute-card"});export{_t as default};
