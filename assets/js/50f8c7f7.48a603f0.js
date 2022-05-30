"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[967],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,f=h["".concat(u,".").concat(d)]||h[d]||l[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5165:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},u="Api hooks",c={unversionedId:"interface/api-requests/api-hooks",id:"interface/api-requests/api-hooks",title:"Api hooks",description:"In order to organize better our requests and reuse them in multiple pages, it is a good practice to create",source:"@site/docs/interface/api-requests/api-hooks.mdx",sourceDirName:"interface/api-requests",slug:"/interface/api-requests/api-hooks",permalink:"/docs/interface/api-requests/api-hooks",draft:!1,editUrl:"https://github.com/RibonDAO/docs/docs/interface/api-requests/api-hooks.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Creating a request",permalink:"/docs/interface/api-requests/creating-a-request"},next:{title:"Contract",permalink:"/docs/category/contract"}},p={},l=[{value:"The useApi hook",id:"the-useapi-hook",level:2}],h={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-hooks"},"Api hooks"),(0,a.kt)("p",null,"In order to organize better our requests and reuse them in multiple pages, it is a good practice to create\napi hooks that encapsulate those requests (see how to create them on the previous section)."),(0,a.kt)("p",null,"These hooks are located at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/hooks/apiHooks")),(0,a.kt)("h2",{id:"the-useapi-hook"},"The useApi hook"),(0,a.kt)("p",null,"We created an useApi hook that uses ",(0,a.kt)("inlineCode",{parentName:"p"},"react-query")," and has some pre-definitions that makes easier to cache and make requests inside hooks.\nNormally you will encapsulate your request inside the useApi hook, and return the data among other functions\nthat a component/page would need to consume this api."),(0,a.kt)("p",null,"You can use it as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'const { data: someNameToYourData, isLoading, refetch } = useApi<TypeReturnedFromTheRequest>({\n    key: "keyToCacheTheRequest",\n    fetchMethod: () => {\n      return someMethodThatCallsTheApi # created on previous section\n    }\n});\n')),(0,a.kt)("p",null,"This hook exposes as well the ",(0,a.kt)("inlineCode",{parentName:"p"},"isLoading")," boolean, which tells if the request is still loading (useful to show loading states in the page) and ",(0,a.kt)("inlineCode",{parentName:"p"},"refecth")," method, that can be called again\nin the page to force the request to be made again."),(0,a.kt)("p",null,"A good example of this kind of hook is the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/hooks/apiHooks/useNonProfits/index.ts")," hook. It gets information about the\nnon-profits of the app and returns it to the pages."))}d.isMDXComponent=!0}}]);