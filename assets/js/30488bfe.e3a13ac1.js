"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[385],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),s=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},d=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=s(n),f=r,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return n?o.createElement(h,c(c({ref:e},d),{},{components:n})):o.createElement(h,c({ref:e},d))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7190:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},c="Contract Walkthrough",i={unversionedId:"contract/contract-walkthrough",id:"contract/contract-walkthrough",title:"Contract Walkthrough",description:"Promoter",source:"@site/docs/contract/contract-walkthrough.mdx",sourceDirName:"contract",slug:"/contract/contract-walkthrough",permalink:"/docs/contract/contract-walkthrough",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contract",permalink:"/docs/category/contract"},next:{title:"Smart Contract Overview",permalink:"/docs/contract/smart-contract-overview"}},l={},s=[{value:"Promoter",id:"promoter",level:2},{value:"Integration Council",id:"integration-council",level:2},{value:"integrations",id:"integrations",level:2},{value:"NonProfit Council",id:"nonprofit-council",level:2},{value:"Pool",id:"pool",level:2},{value:"Contract address and networks",id:"contract-address-and-networks",level:2}],d={toc:s};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-walkthrough"},"Contract Walkthrough"),(0,r.kt)("h2",{id:"promoter"},"Promoter"),(0,r.kt)("p",null,"Promoters can add donation tokens (usually USDC) on the donation pool."),(0,r.kt)("h2",{id:"integration-council"},"Integration Council"),(0,r.kt)("p",null,"The Integration Council is a multsig wallet that can add or remove balances from integrations.",(0,r.kt)("br",{parentName:"p"}),"\n","The sum of the balances the integrations cannot exceed the total tokens of the contract."),(0,r.kt)("h2",{id:"integrations"},"integrations"),(0,r.kt)("p",null,"Integrations can distribute donation tokens based on the amount of balance they have.",(0,r.kt)("br",{parentName:"p"}),"\n","Integrations attach user's encrypted email on donation event and send donation token to a whitelisted nonprofit."),(0,r.kt)("h2",{id:"nonprofit-council"},"NonProfit Council"),(0,r.kt)("p",null,"The NonProfit Council is a multsig wallet that can add or remove NonProfits from the whitelist."),(0,r.kt)("h2",{id:"pool"},"Pool"),(0,r.kt)("p",null,"Pool is a contract dynamic created that was able to receive funds and can donate just to whitelisted nonprofit.\nEach pool has your own whitelist. Each pool can receive funds of just one type of token that is setted in the creation."),(0,r.kt)("h2",{id:"contract-address-and-networks"},"Contract address and networks"),(0,r.kt)("p",null,"Polygon Mainnet\nManager: 0x411DF13350D6aB065Fc2d1Fd026b6d7f4133e9Df\nPool: 0x841cad54aaeAdFc9191fb14EB09232af8E20be0F\nToken: 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174 USDC\nGovernance Council: 0xb4e5F0073e81a9783b0480e0Ae422aE2e1dB85Fd\nIntegration Council: 0x9033d2afa81498762B57C6220208C4d7e40274B6\nNonProfit Council: 0x9033d2afa81498762B57C6220208C4d7e40274B6"),(0,r.kt)("p",null,"Polygon Testnet\nManager: 0xEdB6C84d8e604e6D60CE607e92fD37F1a6774f7e\nPool: 0xA932851982118bd5Fa99E16B144afE4622eb2A49\nToken: 0xfe4f5145f6e09952a5ba9e956ed0c25e3fa4c7f1\nGovernance Council: 0xb4e5F0073e81a9783b0480e0Ae422aE2e1dB85Fd\nIntegration Council: 0x9F9241629E8C1FE2b466754843A629b675Dd36Ab\nNonProfit Council: 0x9F9241629E8C1FE2b466754843A629b675Dd36Ab\nNonProfit example: 0x9F9241629E8C1FE2b466754843A629b675Dd36Ab"))}u.isMDXComponent=!0}}]);