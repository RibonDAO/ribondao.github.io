"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[310],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||h[d]||a;return r?o.createElement(f,i(i({ref:t},l),{},{components:r})):o.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:4},i="The Graph",s={unversionedId:"interface/the-graph",id:"interface/the-graph",title:"The Graph",description:"To retrieve data from The Graph in the interface we use the api located inside src/services/apiTheGraph directory.",source:"@site/docs/interface/the-graph.mdx",sourceDirName:"interface",slug:"/interface/the-graph",permalink:"/docs/docs/interface/the-graph",draft:!1,editUrl:"https://github.com/RibonDAO/docs/docs/interface/the-graph.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Code Quality",permalink:"/docs/docs/interface/code-quality"},next:{title:"How to test",permalink:"/docs/docs/category/how-to-test"}},c={},p=[{value:"Creating a request",id:"creating-a-request",level:2},{value:"Api hooks",id:"api-hooks",level:2}],l={toc:p};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-graph"},"The Graph"),(0,n.kt)("p",null,"To retrieve data from The Graph in the interface we use the api located inside ",(0,n.kt)("inlineCode",{parentName:"p"},"src/services/apiTheGraph")," directory.\nIn the index file are the configurations to communicate with The Graph's client. We are currently using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apollographql/apollo-client"},"ApolloClient")," library to make the requests."),(0,n.kt)("h2",{id:"creating-a-request"},"Creating a request"),(0,n.kt)("p",null,"In order to create a new request, you can create a new subfolder to assemble the queries and make the request for the entity mapped in the graph.\nThe folder name should be the plural entity name + Api. For example, we have an entity called PromoterDonation, the name of the subfolder in the interface should be PromoterDonationsApi."),(0,n.kt)("p",null,"You should normally use the gql and ApolloQueryResult to create a query, they can be imported from @apollo/client.\nA good file to look for an example is the following: ",(0,n.kt)("inlineCode",{parentName:"p"},"src\\services\\apiTheGraph\\promoterDonationsApi\\index.tsx")),(0,n.kt)("h2",{id:"api-hooks"},"Api hooks"),(0,n.kt)("p",null,"In order to organize better our requests and reuse them in multiple pages, it is a good practice to create\napi hooks that encapsulate those requests."),(0,n.kt)("p",null,"These hooks are located at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/hooks/apiTheGraphHooks"),"."),(0,n.kt)("p",null,"We create a subfolder for each hook that can be used to call the service request and return the information of a certain entity.\nA good example of this kind of hook is the ",(0,n.kt)("inlineCode",{parentName:"p"},"src\\hooks\\apiTheGraphHooks\\usePromoterDonations\\index.tsx")," hook. It gets information about them promoterDonations of the subgraph and returns it to the pages."))}h.isMDXComponent=!0}}]);