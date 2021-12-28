"use strict";(self.webpackChunkmetaverse=self.webpackChunkmetaverse||[]).push([[920],{920:(ci,X,u)=>{u.r(X),u.d(X,{YearsModule:()=>ri});var c=u(583),s=u(639),M=(u(215),u(709));function w(t,n=0){return function(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}(t)?Number(t):n}let Y;u(917),u(257),u(393),u(345);try{Y="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(t){Y=!1}let z,h=(()=>{class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?(0,c.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!Y)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(s.Lbi))},t.\u0275prov=s.Yz7({factory:function(){return new t(s.LFG(s.Lbi))},token:t,providedIn:"root"}),t})(),V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({}),t})();var ee=u(574),te=u(319);class ht extends te.w{constructor(n,e){super()}schedule(n,e=0){return this}}let ne=(()=>{class t{constructor(e,i=t.now){this.SchedulerAction=e,this.now=i}schedule(e,i=0,o){return new this.SchedulerAction(this,e).schedule(o,i)}}return t.now=()=>Date.now(),t})();class g extends ne{constructor(n,e=ne.now){super(n,()=>g.delegate&&g.delegate!==this?g.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(n,e=0,i){return g.delegate&&g.delegate!==this?g.delegate.schedule(n,e,i):super.schedule(n,e,i)}flush(n){const{actions:e}=this;if(this.active)return void e.push(n);let i;this.active=!0;do{if(i=n.execute(n.state,n.delay))break}while(n=e.shift());if(this.active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}}new g(class extends ht{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){if(this.closed)return this;this.state=n;const i=this.id,o=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(o,i,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(null!==i&&this.delay===i&&!1===this.pending)return e;clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(n,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let o,i=!1;try{this.work(n)}catch(r){i=!0,o=!!r&&r||new Error(r)}if(i)return this.unsubscribe(),o}_unsubscribe(){const n=this.id,e=this.scheduler,i=e.actions,o=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==o&&i.splice(o,1),null!=n&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null}}),"undefined"!=typeof Element&&Element;const _e="cdk-high-contrast-black-on-white",be="cdk-high-contrast-white-on-black",j="cdk-high-contrast-active";let ye=(()=>{class t{constructor(e,i){this._platform=e,this._document=i}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const i=this._document.defaultView||window,o=i&&i.getComputedStyle?i.getComputedStyle(e):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(e),r){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(j),e.remove(_e),e.remove(be),this._hasCheckedHighContrastMode=!0;const i=this.getHighContrastMode();1===i?(e.add(j),e.add(_e)):2===i&&(e.add(j),e.add(be))}}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(h),s.LFG(c.K0))},t.\u0275prov=s.Yz7({factory:function(){return new t(s.LFG(h),s.LFG(c.K0))},token:t,providedIn:"root"}),t})(),Me=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({}),t})();const Ee=new s.GfV("12.2.13");var b=u(735);const ke=new s.GfV("12.2.13"),Wt=new s.OlP("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}});let y,m=(()=>{class t{constructor(e,i,o){this._hasDoneGlobalChecks=!1,this._document=o,e._applyBodyHighContrastModeCssClasses(),this._sanityChecks=i,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return!(!(0,s.X6Q)()||"undefined"!=typeof __karma__&&__karma__||"undefined"!=typeof jasmine&&jasmine||"undefined"!=typeof jest&&jest||"undefined"!=typeof Mocha&&Mocha)&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[e])}_checkDoctypeIsDefined(){this._checkIsEnabled("doctype")&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}_checkThemeIsPresent(){if(!this._checkIsEnabled("theme")||!this._document.body||"function"!=typeof getComputedStyle)return;const e=this._document.createElement("div");e.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(e);const i=getComputedStyle(e);i&&"none"!==i.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),this._document.body.removeChild(e)}_checkCdkVersionMatch(){this._checkIsEnabled("version")&&ke.full!==Ee.full&&console.warn("The Angular Material version ("+ke.full+") does not match the Angular CDK version ("+Ee.full+").\nPlease ensure the versions of these two packages exactly match.")}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(ye),s.LFG(Wt,8),s.LFG(c.K0))},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[Me],Me]}),t})();function J(t,n){return class extends t{constructor(...e){super(...e),this.defaultColor=n,this.color=n}get color(){return this._color}set color(e){const i=e||this.defaultColor;i!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),i&&this._elementRef.nativeElement.classList.add(`mat-${i}`),this._color=i)}}}try{y="undefined"!=typeof Intl}catch(t){y=!1}let Ie=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[m,V],m]}),t})(),Cn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[Ie,m],m]}),t})();var Dn=u(796),wn=u(105),In=u(2);function Ne(t,n,e,i){return(0,wn.m)(e)&&(i=e,e=void 0),i?Ne(t,n,e).pipe((0,In.U)(o=>(0,Dn.k)(o)?i(...o):i(o))):new ee.y(o=>{Be(t,n,function(a){o.next(arguments.length>1?Array.prototype.slice.call(arguments):a)},o,e)})}function Be(t,n,e,i,o){let r;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(t)){const a=t;t.addEventListener(n,e,o),r=()=>a.removeEventListener(n,e,o)}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(t)){const a=t;t.on(n,e),r=()=>a.off(n,e)}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(t)){const a=t;t.addListener(n,e),r=()=>a.removeListener(n,e)}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(let a=0,l=t.length;a<l;a++)Be(t[a],n,e,i,o)}i.add(r)}var On=u(435);const Rn=["primaryValueBar"],Ln=J(class{constructor(t){this._elementRef=t}},"primary"),Nn=new s.OlP("mat-progress-bar-location",{providedIn:"root",factory:function(){const t=(0,s.f3M)(c.K0),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}});let Pn=0,Un=(()=>{class t extends Ln{constructor(e,i,o,r){super(e),this._ngZone=i,this._animationMode=o,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new s.vpe,this._animationEndSubscription=te.w.EMPTY,this.mode="determinate",this.progressbarId="mat-progress-bar-"+Pn++;const a=r?r.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${a}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===o}get value(){return this._value}set value(e){this._value=Pe(w(e)||0)}get bufferValue(){return this._bufferValue}set bufferValue(e){this._bufferValue=Pe(e||0)}_primaryTransform(){return{transform:`scale3d(${this.value/100}, 1, 1)`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scale3d(${this.bufferValue/100}, 1, 1)`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const e=this._primaryValueBar.nativeElement;this._animationEndSubscription=Ne(e,"transitionend").pipe((0,On.h)(i=>i.target===e)).subscribe(()=>{("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(s.R0b),s.Y36(b.Qb,8),s.Y36(Nn,8))},t.\u0275cmp=s.Xpm({type:t,selectors:[["mat-progress-bar"]],viewQuery:function(e,i){if(1&e&&s.Gf(Rn,5),2&e){let o;s.iGM(o=s.CRH())&&(i._primaryValueBar=o.first)}},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-progress-bar"],hostVars:4,hostBindings:function(e,i){2&e&&(s.uIk("aria-valuenow","indeterminate"===i.mode||"query"===i.mode?null:i.value)("mode",i.mode),s.ekj("_mat-animation-noopable",i._isNoopAnimation))},inputs:{color:"color",mode:"mode",value:"value",bufferValue:"bufferValue"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[s.qOj],decls:10,vars:4,consts:[["aria-hidden","true"],["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(e,i){1&e&&(s.TgZ(0,"div",0),s.O4$(),s.TgZ(1,"svg",1),s.TgZ(2,"defs"),s.TgZ(3,"pattern",2),s._UZ(4,"circle",3),s.qZA(),s.qZA(),s._UZ(5,"rect",4),s.qZA(),s.kcU(),s._UZ(6,"div",5),s._UZ(7,"div",6,7),s._UZ(9,"div",8),s.qZA()),2&e&&(s.xp6(3),s.Q6J("id",i.progressbarId),s.xp6(2),s.uIk("fill",i._rectangleFillValue),s.xp6(1),s.Q6J("ngStyle",i._bufferTransform()),s.xp6(1),s.Q6J("ngStyle",i._primaryTransform()))},directives:[c.PC],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}\n'],encapsulation:2,changeDetection:0}),t})();function Pe(t,n=0,e=100){return Math.max(n,Math.min(e,t))}let Yn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[c.ez,m],m]}),t})();function Vn(t,n){if(1&t&&(s.O4$(),s._UZ(0,"circle",3)),2&t){const e=s.oxw();s.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+e._spinnerAnimationLabel)("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),s.uIk("r",e._getCircleRadius())}}function Zn(t,n){if(1&t&&(s.O4$(),s._UZ(0,"circle",3)),2&t){const e=s.oxw();s.Udp("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),s.uIk("r",e._getCircleRadius())}}function Gn(t,n){if(1&t&&(s.O4$(),s._UZ(0,"circle",3)),2&t){const e=s.oxw();s.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+e._spinnerAnimationLabel)("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),s.uIk("r",e._getCircleRadius())}}function zn(t,n){if(1&t&&(s.O4$(),s._UZ(0,"circle",3)),2&t){const e=s.oxw();s.Udp("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),s.uIk("r",e._getCircleRadius())}}const Ue=".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor;stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n",Hn=J(class{constructor(t){this._elementRef=t}},"primary"),Ye=new s.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});class p extends Hn{constructor(n,e,i,o,r){super(n),this._document=i,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const a=p._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),a.has(i.head)||a.set(i.head,new Set([100])),this._fallbackAnimation=e.EDGE||e.TRIDENT,this._noopAnimations="NoopAnimations"===o&&!!r&&!r._forceAnimations,r&&(r.diameter&&(this.diameter=r.diameter),r.strokeWidth&&(this.strokeWidth=r.strokeWidth))}get diameter(){return this._diameter}set diameter(n){this._diameter=w(n),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(n){this._strokeWidth=w(n)}get value(){return"determinate"===this.mode?this._value:0}set value(n){this._value=Math.max(0,Math.min(100,w(n)))}ngOnInit(){const n=this._elementRef.nativeElement;this._styleRoot=function(t){if(function(){if(null==z){const t="undefined"!=typeof document?document.head:null;z=!(!t||!t.createShadowRoot&&!t.attachShadow)}return z}()){const n=t.getRootNode?t.getRootNode():null;if("undefined"!=typeof ShadowRoot&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}(n)||this._document.head,this._attachStyleNode(),n.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const n=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${n} ${n}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const n=this._styleRoot,e=this._diameter,i=p._diameters;let o=i.get(n);if(!o||!o.has(e)){const r=this._document.createElement("style");r.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),r.textContent=this._getAnimationText(),n.appendChild(r),o||(o=new Set,i.set(n,o)),o.add(e)}}_getAnimationText(){const n=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*n).replace(/END_VALUE/g,""+.2*n).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}p.\u0275fac=function(n){return new(n||p)(s.Y36(s.SBq),s.Y36(h),s.Y36(c.K0,8),s.Y36(b.Qb,8),s.Y36(Ye))},p.\u0275cmp=s.Xpm({type:p,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(n,e){2&n&&(s.uIk("aria-valuemin","determinate"===e.mode?0:null)("aria-valuemax","determinate"===e.mode?100:null)("aria-valuenow","determinate"===e.mode?e.value:null)("mode",e.mode),s.Udp("width",e.diameter,"px")("height",e.diameter,"px"),s.ekj("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[s.qOj],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(n,e){1&n&&(s.O4$(),s.TgZ(0,"svg",0),s.YNc(1,Vn,1,9,"circle",1),s.YNc(2,Zn,1,7,"circle",2),s.qZA()),2&n&&(s.Udp("width",e.diameter,"px")("height",e.diameter,"px"),s.Q6J("ngSwitch","indeterminate"===e.mode),s.uIk("viewBox",e._getViewBox()),s.xp6(1),s.Q6J("ngSwitchCase",!0),s.xp6(1),s.Q6J("ngSwitchCase",!1))},directives:[c.RF,c.n9],styles:[Ue],encapsulation:2,changeDetection:0}),p._diameters=new WeakMap;let Wn=(()=>{class t extends p{constructor(e,i,o,r,a){super(e,i,o,r,a),this.mode="indeterminate"}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(h),s.Y36(c.K0,8),s.Y36(b.Qb,8),s.Y36(Ye))},t.\u0275cmp=s.Xpm({type:t,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(e,i){2&e&&(s.Udp("width",i.diameter,"px")("height",i.diameter,"px"),s.ekj("_mat-animation-noopable",i._noopAnimations))},inputs:{color:"color"},features:[s.qOj],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,i){1&e&&(s.O4$(),s.TgZ(0,"svg",0),s.YNc(1,Gn,1,9,"circle",1),s.YNc(2,zn,1,7,"circle",2),s.qZA()),2&e&&(s.Udp("width",i.diameter,"px")("height",i.diameter,"px"),s.Q6J("ngSwitch","indeterminate"===i.mode),s.uIk("viewBox",i._getViewBox()),s.xp6(1),s.Q6J("ngSwitchCase",!0),s.xp6(1),s.Q6J("ngSwitchCase",!1))},directives:[c.RF,c.n9],styles:[Ue],encapsulation:2,changeDetection:0}),t})(),$n=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[m,c.ez],m]}),t})();var N=u(931);let B=(()=>{class t{constructor(){this.uuidcode=Math.random().toString(36).substr(2,6).toLocaleUpperCase(),this.runOverSource=new M.xQ,this.runOver$=this.runOverSource.asObservable()}runOver(e){this.runOverSource.next(e)}getCode(){return this.uuidcode}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();const qn=["audio1"];function Qn(t,n){if(1&t){const e=s.EpF();s.TgZ(0,"p",9),s.NdJ("click",function(){return s.CHM(e),s.oxw().onClickstart()}),s._uU(1),s.qZA()}if(2&t){const e=s.oxw();s.xp6(1),s.hij(" ",e.message," ")}}function ei(t,n){if(1&t){const e=s.EpF();s.TgZ(0,"p",10),s.NdJ("click",function(){return s.CHM(e),s.oxw().onClick()}),s._uU(1," \u542f\u52a8\u5931\u8d25 \u70b9\u51fb\u91cd\u8bd5 "),s.qZA()}}function ti(t,n){if(1&t&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&t){const e=n.$implicit;s.xp6(1),s.Oqu(e)}}const ni=function(t){return{opacity:t}};function ii(t,n){if(1&t&&(s.TgZ(0,"div"),s._UZ(1,"mat-spinner",11),s.TgZ(2,"h3"),s._uU(3),s.qZA(),s.TgZ(4,"span",12),s._uU(5),s.qZA(),s.qZA()),2&t){const e=s.oxw();s.xp6(3),s.Oqu(e.idCode),s.xp6(1),s.Q6J("ngStyle",s.VKq(3,ni,e.popacity)),s.xp6(1),s.hij("\u5f53\u524d\u6392\u961f\u4eba\u6570",e.peopleNum,"\u4eba")}}const si=[{path:"",component:(()=>{class t{constructor(e,i){this.yearsService=e,this.router=i,this.title="Metaverse",this.yearsService.runOver$.subscribe(o=>{console.log(o),this.router.navigateByUrl("/years/y1")})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(B),s.Y36(N.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-years"]],decls:6,vars:1,consts:[[1,"com"],[2,"text-align","center","width","100%","position","absolute"]],template:function(e,i){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"h1"),s._uU(3),s.qZA(),s.TgZ(4,"div"),s._UZ(5,"router-outlet"),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(3),s.hij(" Welcome to ",i.title,"! "))},directives:[N.lC],styles:[".com[_ngcontent-%COMP%]{color:#5ac43a}"]}),t})(),children:[{path:"y0",component:(()=>{class t{constructor(e){this.yearsService=e,this.num=0,this.message="\u70b9\u51fb\u542f\u52a8\u7cfb\u7edf",this.restarttag=!1,this.successtag=!1,this.popacity=0,this.reinfo="\u542f\u52a8\u5931\u8d25 \u70b9\u51fb\u91cd\u8bd5!",this.idCode="\u6807\u8bc6\u7801\u751f\u6210\u4e2d\u2026\u2026",this.message2="",this.peopleNum=Math.floor(1e3*Math.random())+100,this.list=[],this.listarr=["\u7cfb\u7edf\u542f\u52a8","\u5947\u70b9\u51fa\u73b0","\u5927\u7206\u70b8\u5f00\u542f","\u8d85\u529b\u51fa\u73b0","\u5b87\u5b99\u4e0d\u65ad\u81a8\u80c0","\u5f15\u529b\u548c\u7535\u78c1\u529b\u3001\u5f31\u6838\u529b\u3001\u5f3a\u6838\u529b\u5206\u79bb","\u5b87\u5b99\u7ee7\u7eed\u81a8\u80c0","\u5938\u514b-\u53cd\u5938\u514b\u7c92\u5b50\u51fa\u73b0","\u80f6\u5b50\u3001\u5f15\u529b\u5b50\u3001\u5e0c\u683c\u65af\u73bb\u8272\u5b50\u7b49\u7c92\u5b50\u51fa\u73b0","\u5f3a\u6838\u529b\u4e0e\u7535\u5f31\u529b\u5206\u79bb","\u5f3a\u5b50,\u8d28\u5b50\u548c\u4e2d\u5b50\u51fa\u73b0","\u7535\u5b50\u3001\u4e2d\u5fae\u5b50\u548c\u53cd\u8f7b\u5b50\u51fa\u73b0","\u8d28\u5b50\u548c\u4e2d\u5fae\u5b50\u7ee7\u7eed\u81a8\u80c0","\u5149\u5b50\u65f6\u671f\u51fa\u73b0","\u6c26\u6838\u51fa\u73b0","\u539f\u5b50\u51fa\u73b0","\u6c2e\u6838\u51fa\u73b0","\u7b2c\u4e00\u4e2a\u6052\u661f\u51fa\u73b0","\u7b2c\u4e00\u4e2a\u661f\u7cfb\u5f62\u6210","\u7b2c\u4e00\u4e2a\u884c\u661f\u51fa\u73b0","\u6d77\u6d0b\u51fa\u73b0","\u7b2c\u4e00\u4e2a\u6d77\u6d0b\u5f62\u6210","\u539f\u6838\u7ec6\u80de\u5f62\u6210","\u591a\u7ec6\u80de\u751f\u7269\u51fa\u73b0","\u6d77\u6d0b\u751f\u7269\u51fa\u73b0","\u6050\u9f99\u8bde\u751f","\u7b2c\u4e00\u4e2a\u733f\u7c7b\u51fa\u73b0","\u2026\u2026","\u4eba\u7c7b\u6587\u660e\u8bde\u751f","\u2026\u2026","\u5927\u6e05\u4ea1\u4e86","\u2026\u2026","\u5143\u5b87\u5b99\u5143\u5e74","\u2026\u2026"],this.code="",this.sendMessage=new s.vpe,this.code=this.yearsService.getCode()}ngOnInit(){}onClickstart(){var e;"\u70b9\u51fb\u542f\u52a8\u7cfb\u7edf"==this.message&&(this.message="\u7cfb\u7edf\u542f\u52a8\u4e2d......",this.start(),null===(e=this.audio1.nativeElement)||void 0===e||e.play())}onClick(){var e;this.start(),null===(e=this.audio1.nativeElement)||void 0===e||e.play()}start(){this.num=0,this.list=[],this.message="\u7cfb\u7edf\u542f\u52a8\u4e2d......",this.message2="",this.restarttag=!1,document.body.style.backgroundColor="#000000",setTimeout(()=>{this.seti1=setInterval(()=>{if(this.num++,this.num%3==0){let i=this.listarr[this.num/3];i&&(this.list[0]=i)}100==this.num&&(clearInterval(this.seti1),this.failOrSuccess()?this.startSuccess():this.startFail())},100)},1e3)}failOrSuccess(){return(new Date).getMinutes()%10==0||Math.random()>.8}startFail(){var e;this.restarttag=!0,this.num=-1,document.body.style.backgroundColor="#000c9f",this.message2="\u542f\u52a8\u662f\u4e2a\u5341\u6709\u516b\u4e5d\u4f1a\u5931\u8d25\u7684\u8fc7\u7a0b\uff0c\u8bf7\u8010\u5fc3\u5c1d\u8bd5\u3002",null===(e=this.audio1.nativeElement)||void 0===e||e.pause()}startSuccess(){var e;this.message="\u7cfb\u7edf\u542f\u52a8\u6210\u529f!",null===(e=this.audio1.nativeElement)||void 0===e||e.pause(),this.restarttag=!1,this.successtag=!0,document.body.style.backgroundColor="#000000",this.message2="\u606d\u559c\u60a8\u6210\u529f\u542f\u52a8\u7cfb\u7edf\uff0c\u8bf7\u7b49\u5f85\u7cfb\u7edf\u4e3a\u60a8\u5206\u914d\u552f\u4e00\u6807\u8bc6\u7801!";let i=setInterval(()=>{this.peopleNum-=Math.floor(50*Math.random()),this.peopleNum<=0&&(this.peopleNum=0,clearInterval(i),this.idCode="\u60a8\u7684\u6807\u8bc6\u7801\u4e3a: "+this.code,this.popacity=0,this.begin()),this.popacity<1&&(this.popacity+=.1)},2e3)}begin(){this.yearsService.runOver({code:this.code})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(B))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-m0"]],viewQuery:function(e,i){if(1&e&&s.Gf(qn,5),2&e){let o;s.iGM(o=s.CRH())&&(i.audio1=o.first)}},outputs:{sendMessage:"sendMessage"},decls:14,vars:6,consts:[[3,"click",4,"ngIf"],["style","color: #e15241;",3,"click",4,"ngIf"],["color","#00ff00","mode","determinate",2,"height","12px",3,"value"],[1,"list"],[4,"ngFor","ngForOf"],[4,"ngIf"],["loop",""],["audio1",""],["src","assets/sound/start.mp3","type","audio/mp3"],[3,"click"],[2,"color","#e15241",3,"click"],[2,"margin","auto"],[3,"ngStyle"]],template:function(e,i){1&e&&(s.TgZ(0,"div"),s.YNc(1,Qn,2,1,"p",0),s.YNc(2,ei,2,0,"p",1),s.TgZ(3,"h1"),s._UZ(4,"mat-progress-bar",2),s.qZA(),s.qZA(),s.TgZ(5,"div",3),s.YNc(6,ti,2,1,"span",4),s.qZA(),s.TgZ(7,"div"),s.TgZ(8,"h3"),s._uU(9),s.qZA(),s.YNc(10,ii,6,5,"div",5),s.qZA(),s.TgZ(11,"audio",6,7),s._UZ(13,"source",8),s.qZA()),2&e&&(s.xp6(1),s.Q6J("ngIf",!i.restarttag),s.xp6(1),s.Q6J("ngIf",i.restarttag),s.xp6(2),s.s9C("value",i.num),s.xp6(2),s.Q6J("ngForOf",i.list),s.xp6(3),s.Oqu(i.message2),s.xp6(1),s.Q6J("ngIf",i.successtag))},directives:[c.O5,Un,c.sg,Wn,c.PC],styles:[".mat-progress-bar-fill:after{background-color:#5ac43a}  .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#5ac43a}  .mat-progress-bar-buffer{background:#eee}.list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin-left:20px;text-align:left;min-height:30px;animation:mymove .5s linear 0s forwards}@keyframes mymove{0%{opacity:0}80%{opacity:1}to{opacity:0}}"]}),t})()},{path:"y1",component:(()=>{class t{constructor(e){this.yearsService=e,this.title="\u7cfb\u7edf\u7ef4\u62a4\u4e2d\u2026\u2026",this.code="",this.code=this.yearsService.getCode(),this.yearsService.runOver$.subscribe(i=>{console.log(this.code)})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(B))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-y1"]],decls:6,vars:2,consts:[[2,"letter-spacing","4px","font-size","26px"]],template:function(e,i){1&e&&(s.TgZ(0,"p"),s._uU(1),s.qZA(),s.TgZ(2,"p"),s._uU(3,"\u8bf7\u7262\u8bb0\u60a8\u7684\u6807\u8bc6\u7801: "),s.TgZ(4,"span",0),s._uU(5),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.hij(" ",i.title," "),s.xp6(4),s.Oqu(i.code))},encapsulation:2}),t})()},{path:"",redirectTo:"y0",pathMatch:"full"},{path:"**",redirectTo:"y0"}]}];let oi=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[N.Bz.forChild(si)],N.Bz]}),t})(),ri=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[B],imports:[[Cn,Yn,$n,c.ez,oi]]}),t})()}}]);