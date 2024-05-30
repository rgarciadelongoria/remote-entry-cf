import{DOCUMENT as m}from"@angular/common";import*as o from"@angular/core";import{inject as d,ANIMATION_MODULE_TYPE as g,ViewEncapsulation as D,ɵRuntimeError as F}from"@angular/core";var i=function(s){return s[s.State=0]="State",s[s.Transition=1]="Transition",s[s.Sequence=2]="Sequence",s[s.Group=3]="Group",s[s.Animate=4]="Animate",s[s.Keyframes=5]="Keyframes",s[s.Style=6]="Style",s[s.Trigger=7]="Trigger",s[s.Reference=8]="Reference",s[s.AnimateChild=9]="AnimateChild",s[s.AnimateRef=10]="AnimateRef",s[s.Query=11]="Query",s[s.Stagger=12]="Stagger",s}(i||{}),k="*";function O(s,t){return{type:i.Trigger,name:s,definitions:t,options:{}}}function j(s,t=null){return{type:i.Animate,styles:t,timings:s}}function x(s,t=null){return{type:i.Group,steps:s,options:t}}function S(s,t=null){return{type:i.Sequence,steps:s,options:t}}function q(s){return{type:i.Style,styles:s,offset:null}}function L(s,t,e){return{type:i.State,name:s,styles:t,options:e}}function $(s){return{type:i.Keyframes,steps:s}}function B(s,t,e=null){return{type:i.Transition,expr:s,animation:t,options:e}}function G(s,t=null){return{type:i.Reference,animation:s,options:t}}function K(s=null){return{type:i.AnimateChild,options:s}}function N(s,t=null){return{type:i.AnimateRef,animation:s,options:t}}function Q(s,t,e=null){return{type:i.Query,selector:s,animation:t,options:e}}function T(s,t){return{type:i.Stagger,timings:s,animation:t}}var E=(()=>{class s{static{this.ɵfac=function(n){return new(n||s)}}static{this.ɵprov=o.ɵɵdefineInjectable({token:s,factory:()=>d(P),providedIn:"root"})}}return s})(),l=class{},P=(()=>{class s extends E{constructor(e,n){super(),this.animationModuleType=d(g,{optional:!0}),this._nextAnimationId=0;let r={id:"0",encapsulation:D.None,styles:[],data:{animation:[]}};if(this._renderer=e.createRenderer(n.body,r),this.animationModuleType===null&&!b(this._renderer))throw new F(3600,!1)}build(e){let n=this._nextAnimationId;this._nextAnimationId++;let r=Array.isArray(e)?S(e):e;return y(this._renderer,null,n,"register",[r]),new u(n,this._renderer)}static{this.ɵfac=function(n){return new(n||s)(o.ɵɵinject(o.RendererFactory2),o.ɵɵinject(m))}}static{this.ɵprov=o.ɵɵdefineInjectable({token:s,factory:s.ɵfac,providedIn:"root"})}}return s})(),u=class extends l{constructor(t,e){super(),this._id=t,this._renderer=e}create(t,e){return new c(this._id,t,e||{},this._renderer)}},c=class{constructor(t,e,n,r){this.id=t,this.element=e,this._renderer=r,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(t,e){return this._renderer.listen(this.element,`@@${this.id}:${t}`,e)}_command(t,...e){y(this._renderer,this.element,this.id,t,e)}onDone(t){this._listen("done",t)}onStart(t){this._listen("start",t)}onDestroy(t){this._listen("destroy",t)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(t){this._command("setPosition",t)}getPosition(){return v(this._renderer)?.engine?.players[this.id]?.getPosition()??0}};function y(s,t,e,n,r){s.setProperty(t,`@@${e}:${n}`,r)}function v(s){let t=s.ɵtype;return t===0?s:t===1?s.animationRenderer:null}function b(s){let t=s.ɵtype;return t===0||t===1}var _=class{constructor(t=0,e=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=t+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},f=class{constructor(t){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=t;let e=0,n=0,r=0,a=this.players.length;a==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(h=>{h.onDone(()=>{++e==a&&this._onFinish()}),h.onDestroy(()=>{++n==a&&this._onDestroy()}),h.onStart(()=>{++r==a&&this._onStart()})}),this.totalTime=this.players.reduce((h,p)=>Math.max(h,p.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let e=t*this.totalTime;this.players.forEach(n=>{let r=n.totalTime?Math.min(1,e/n.totalTime):1;n.setPosition(r)})}getPosition(){let t=this.players.reduce((e,n)=>e===null||n.totalTime>e.totalTime?n:e,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},U="!";export{k as AUTO_STYLE,E as AnimationBuilder,l as AnimationFactory,i as AnimationMetadataType,_ as NoopAnimationPlayer,j as animate,K as animateChild,G as animation,x as group,$ as keyframes,Q as query,S as sequence,T as stagger,L as state,q as style,B as transition,O as trigger,N as useAnimation,f as ɵAnimationGroupPlayer,P as ɵBrowserAnimationBuilder,U as ɵPRE_STYLE};/*! Bundled license information:

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v17.2.4
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/