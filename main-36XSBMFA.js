import{a as s,b as i,c as a}from"./chunk-POLL2CVR.js";function p(e,t){return{imports:s(s({},e.imports),t.imports),scopes:s(s({},e.scopes),t.scopes)}}var f="__NATIVE_FEDERATION__",l=globalThis;l[f]??={externals:new Map,remoteNamesToRemote:new Map,baseUrlToRemoteNames:new Map};var u=l[f],d=u.externals;function y(e){return`${e.packageName}@${e.version}`}function E(e){let t=y(e);return d.get(t)}function g(e,t){let o=y(e);d.set(o,t)}function x(e){let t=e.split("/");return t.pop(),t.join("/")}function m(e,t){for(;e.endsWith("/");)e=e.substring(0,e.length-1);return t.startsWith("./")&&(t=t.substring(2,t.length)),`${e}/${t}`}var R=u.remoteNamesToRemote,I=u.baseUrlToRemoteNames;function M(e,t){R.set(e,t),I.set(t.baseUrl,e)}function b(e){document.body.appendChild(Object.assign(document.createElement("script"),{type:"importmap-shim",innerHTML:JSON.stringify(e)}))}function w(){return a(this,arguments,function*(e={}){let t=typeof e=="string"?yield k(e):e,o=yield _(),n=yield F(t),r=p(o,n);return b(r),r})}function k(e){return a(this,null,function*(){return yield fetch(e).then(t=>t.json())})}function F(e){return a(this,null,function*(){let t={imports:{},scopes:{}};for(let o of Object.keys(e))try{let n=e[o],r=yield T(n,o);t=p(t,r)}catch{console.error(`Error loading remote entry for ${o} from file ${e[o]}`)}return t})}function T(e,t){return a(this,null,function*(){let o=x(e),n=yield h(e);t||(t=n.name);let r=j(n,t,o);return M(t,i(s({},n),{baseUrl:o})),r})}function j(e,t,o){let n=U(e,t,o),r=$(e,o);return{imports:n,scopes:r}}function h(e){return a(this,null,function*(){return yield fetch(e).then(o=>o.json())})}function $(e,t){let o={},n={};for(let r of e.shared){let c=E(r)??m(t,r.outFileName);g(r,c),n[r.packageName]=c}return o[t+"/"]=n,o}function U(e,t,o){let n={};for(let r of e.exposes){let c=m(t,r.key),N=m(o,r.outFileName);n[c]=N}return n}function _(){return a(this,null,function*(){let e=yield h("./remoteEntry.json"),t=e.shared.reduce((o,n)=>i(s({},o),{[n.packageName]:"./"+n.outFileName}),{});for(let o of e.shared)g(o,"./"+o.outFileName);return{imports:t,scopes:{}}})}w().catch(e=>console.error(e)).then(e=>import("./chunk-CLNO7PMB.js")).catch(e=>console.error(e));
