import{a as v,b as k}from"./chunk-LDERJZVM.mjs";import{A as F,G as b,c as o,e as g,q as i,r as _,t as h,v as R,x as E}from"./chunk-5VL35PN6.mjs";import{c as a}from"./chunk-ELYU6EKT.mjs";a.__framer_importFromPackage=(t,s)=>()=>o(R,{error:'Package component not supported: "'+s+'" in "'+t+'"'});a.process={...a.process,env:{...a.process?a.process.env:void 0,NODE_ENV:"production"}};E();(async()=>{let t={augiA20Il:{elements:{DrWnc37Af:"buy"},page:i(()=>import("./0fXdZcqEyn7uS81d-aHhcqgl7u0Lc3LCY8v4Cx2w63s.WNM7DGGQ.mjs")),path:"/"}},s={},d=[{code:"en",id:"default",name:"English",slug:""}],y=i(()=>import("./__framer-not-found-page.TUEXZJFU.mjs")),n=document.getElementById("main"),r,c,l,m=!1;if("framerHydrateV2"in n.dataset){let e=JSON.parse(n.dataset.framerHydrateV2);r=e.routeId,c=e.localeId,l=e.pathVariables,m=!0}else{let e=h(t,decodeURIComponent(location.pathname),!0,d);r=e.routeId,c=e.localeId,l=e.pathVariables}let u=await t[r].page.preload();t[r].page=u;let I=o(b,{RootComponent:u,isWebsite:!0,routeId:r,pathVariables:l,routes:t,collectionUtils:s,notFoundPage:y,isReducedMotion:void 0,localeId:c,locales:d,preserveQueryParams:void 0}),P=o(F,{children:I,value:{imgSizesWorkaroundEnabled:!1}}),p=o(_,{children:P,value:{routes:{}}});a.__framer_events=a.__framer_events||[];function D(){a.__framer_events.push(arguments)}function f(e,{componentStack:V}){D("published_site_load_recoverable_error",{message:String(e),stack:e instanceof Error&&typeof e.stack=="string"?e.stack:null,componentStack:V}),console.error(e)}m?g(()=>{k(n,p,{onRecoverableError:f})}):v(n,{onRecoverableError:f}).render(p)})().catch(t=>{throw track("published_site_load_error",{message:String(t),stack:t instanceof Error&&typeof t.stack=="string"?t.stack:null}),t});
//# sourceMappingURL=default_script0.ZWEOLFOM.mjs.map
