import{a as n,b as u,d as h}from"./chunk-FVBUAS3B.js";import{a as c,b as m}from"./chunk-DUEWQYKU.js";import"@angular/core";import{catchError as l,map as g,of as j,switchMap as I,tap as p}from"rxjs";import*as o from"@angular/core";import"@angular/core";import{map as f}from"rxjs";import*as a from"@angular/core";var v=(()=>{let t=class t extends h{getMe(){return this.Post("crowdfarmers/me",{}).pipe(f(r=>r.data))}login(r){return this.Post("crowdfarmers/login",r).pipe(f(e=>e.data.token))}};t.\u0275fac=(()=>{let r;return function(s){return(r||(r=a.\u0275\u0275getInheritedFactory(t)))(s||t)}})(),t.\u0275prov=a.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var K=(()=>{let t=class t{constructor(r,e,s,S){this.stateSrv=r,this.storageSrv=e,this.routerSrv=s,this.authApiSrv=S}init(){return this.authApiSrv.getMe().pipe(p(r=>this.stateSrv.update("user",r)),g(()=>!0),l(()=>(this.logOut(),j(!0))))}login(r){return this.authApiSrv.login(r).pipe(p(e=>this.storageSrv.setCookie(n.TOKEN,e,{days:7})),I(()=>this.authApiSrv.getMe()),p(e=>this.stateSrv.update("user",e)))}logOut(){this.stateSrv.reset(),this.storageSrv.deleteCookie(n.TOKEN),this.routerSrv.navigate([])}};t.\u0275fac=function(e){return new(e||t)(o.\u0275\u0275inject(m),o.\u0275\u0275inject(u),o.\u0275\u0275inject(c),o.\u0275\u0275inject(v))},t.\u0275prov=o.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{K as a};
