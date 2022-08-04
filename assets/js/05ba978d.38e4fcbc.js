"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,g=d["".concat(c,".").concat(f)]||d[f]||o[f]||i;return n?r.createElement(g,u(u({ref:t},p),{},{components:n})):r.createElement(g,u({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>o,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={id:"sequence.guard.Request",title:"Interface: Request",sidebar_label:"Request",custom_edit_url:null},u=void 0,s={unversionedId:"api/interfaces/sequence.guard.Request",id:"api/interfaces/sequence.guard.Request",title:"Interface: Request",description:"sequence.guard.Request",source:"@site/docs/api/interfaces/sequence.guard.Request.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/sequence.guard.Request",permalink:"/api/interfaces/sequence.guard.Request",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sequence.guard.Request",title:"Interface: Request",sidebar_label:"Request",custom_edit_url:null},sidebar:"sidebar",previous:{title:"WalletState",permalink:"/api/interfaces/sequence.config.WalletState"},next:{title:"SignArgs",permalink:"/api/interfaces/sequence.guard.SignArgs"}},c={},l=[{value:"Properties",id:"properties",level:2},{value:"auxData",id:"auxdata",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"chainId",id:"chainid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"msg",id:"msg",level:3},{value:"Defined in",id:"defined-in-2",level:4}],p={toc:l};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence"},"sequence"),".",(0,a.kt)("a",{parentName:"p",href:"/api/namespaces/sequence.guard"},"guard"),".Request"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"auxdata"},"auxData"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"auxData"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/guard/src/guard.gen.ts#L23"},"sequence.js/packages/guard/src/guard.gen.ts:23")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"chainid"},"chainId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"chainId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/guard/src/guard.gen.ts#L21"},"sequence.js/packages/guard/src/guard.gen.ts:21")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"msg"},"msg"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"msg"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/guard/src/guard.gen.ts#L22"},"sequence.js/packages/guard/src/guard.gen.ts:22")))}o.isMDXComponent=!0}}]);