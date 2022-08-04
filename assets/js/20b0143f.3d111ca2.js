"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8976],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=o(a),k=r,m=c["".concat(s,".").concat(k)]||c[k]||u[k]||i;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},75362:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={id:"sequence.auth",title:"Namespace: auth",sidebar_label:"auth",custom_edit_url:null},l=void 0,p={unversionedId:"api/namespaces/sequence.auth",id:"api/namespaces/sequence.auth",title:"Namespace: auth",description:"sequence.auth",source:"@site/docs/api/namespaces/sequence.auth.md",sourceDirName:"api/namespaces",slug:"/api/namespaces/sequence.auth",permalink:"/api/namespaces/sequence.auth",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sequence.auth",title:"Namespace: auth",sidebar_label:"auth",custom_edit_url:null},sidebar:"sidebar",previous:{title:"api",permalink:"/api/namespaces/sequence.api"},next:{title:"config",permalink:"/api/namespaces/sequence.config"}},s={},o=[{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"SessionJWT",id:"sessionjwt",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"SessionMeta",id:"sessionmeta",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"Variables",id:"variables",level:2},{value:"DEFAULT_SESSION_EXPIRATION",id:"default_session_expiration",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"ErrAccountIsRequired",id:"erraccountisrequired",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"LONG_SESSION_EXPIRATION",id:"long_session_expiration",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Functions",id:"functions",level:2},{value:"ValidateSequenceDeployedWalletProof",id:"validatesequencedeployedwalletproof",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"ValidateSequenceUndeployedWalletProof",id:"validatesequenceundeployedwalletproof",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"signAuthorization",id:"signauthorization",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-7",level:4}],d={toc:o};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/namespaces/sequence"},"sequence"),".auth"),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/classes/sequence.auth.AuthError"},"AuthError")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/classes/sequence.auth.Session"},"Session"))),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/interfaces/sequence.auth.AuthorizationOptions"},"AuthorizationOptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/interfaces/sequence.auth.SessionDump"},"SessionDump"))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"sessionjwt"},"SessionJWT"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SessionJWT"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expiration")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"token")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/auth/src/session.ts#L27"},"sequence.js/packages/auth/src/session.ts:27")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sessionmeta"},"SessionMeta"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"SessionMeta"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expiration?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/auth/src/session.ts#L19"},"sequence.js/packages/auth/src/session.ts:19")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"default_session_expiration"},"DEFAULT","_","SESSION","_","EXPIRATION"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"DEFAULT","_","SESSION","_","EXPIRATION"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/auth/src/session.ts#L50"},"sequence.js/packages/auth/src/session.ts:50")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"erraccountisrequired"},"ErrAccountIsRequired"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"ErrAccountIsRequired"),": ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/sequence.auth.AuthError"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthError"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/auth/src/authorization.ts#L59"},"sequence.js/packages/auth/src/authorization.ts:59")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"long_session_expiration"},"LONG","_","SESSION","_","EXPIRATION"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"LONG","_","SESSION","_","EXPIRATION"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"30000000")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/auth/src/session.ts#L53"},"sequence.js/packages/auth/src/session.ts:53")),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"validatesequencedeployedwalletproof"},"ValidateSequenceDeployedWalletProof"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"ValidateSequenceDeployedWalletProof"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"provider"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"proof"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"address?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"isValid"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"  }",">"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"provider")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"JsonRpcProvider"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chainId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"proof")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Proof"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"address?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"isValid"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"  }",">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,"sequence.js/node_modules/@0xsequence/ethauth/dist/validate.d.ts:3"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"validatesequenceundeployedwalletproof"},"ValidateSequenceUndeployedWalletProof"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"ValidateSequenceUndeployedWalletProof"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"context?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatorFunc")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"context?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/sequence.network.WalletContext"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletContext")))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ValidatorFunc")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/auth/src/proof.ts#L35"},"sequence.js/packages/auth/src/proof.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"signauthorization"},"signAuthorization"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"signAuthorization"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"signer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.provider.ETHAuthProof"},(0,r.kt)("inlineCode",{parentName:"a"},"ETHAuthProof")),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Signer"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/api/interfaces/sequence.auth.AuthorizationOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"AuthorizationOptions")))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/sequence.provider.ETHAuthProof"},(0,r.kt)("inlineCode",{parentName:"a"},"ETHAuthProof")),">"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/20b68cbb/packages/auth/src/authorization.ts#L20"},"sequence.js/packages/auth/src/authorization.ts:20")))}u.isMDXComponent=!0}}]);