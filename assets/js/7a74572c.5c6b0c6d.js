"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[968],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(d,".").concat(u)]||c[u]||s[u]||o;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8314:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Smart Contract Overview",l={unversionedId:"contract/smart-contract-overview",id:"contract/smart-contract-overview",title:"Smart Contract Overview",description:"Functions",source:"@site/docs/contract/smart-contract-overview.mdx",sourceDirName:"contract",slug:"/contract/smart-contract-overview",permalink:"/docs/contract/smart-contract-overview",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Contract Walkthrough",permalink:"/docs/contract/contract-walkthrough"},next:{title:"Integrations Dashboard",permalink:"/docs/integrations-dashboard"}},d={},p=[{value:"Functions",id:"functions",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"createPool",id:"createpool",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"fetchPools",id:"fetchpools",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"addNonProfitToWhitelist",id:"addnonprofittowhitelist",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"removeNonProfitToWhitelist",id:"removenonprofittowhitelist",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"addPoolBalance",id:"addpoolbalance",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"addIntegrationBalance",id:"addintegrationbalance",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"removeIntegrationBalance",id:"removeintegrationbalance",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"removeIntegrationBalance",id:"removeintegrationbalance-1",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"donateThroughIntegration",id:"donatethroughintegration",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"setNonProfitCouncil",id:"setnonprofitcouncil",level:3},{value:"Parameters:",id:"parameters-10",level:4},{value:"setIntegrationCouncil",id:"setintegrationcouncil",level:3},{value:"Parameters:",id:"parameters-11",level:4},{value:"setGovernanceCouncil",id:"setgovernancecouncil",level:3},{value:"Parameters:",id:"parameters-12",level:4},{value:"transferPoolBalance",id:"transferpoolbalance",level:3},{value:"Parameters:",id:"parameters-13",level:4}],m={toc:p};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contract-overview"},"Smart Contract Overview"),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"All write functions emit an event which is traked on the graph to easily query this information."),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  constructor(\n    address _governanceCouncil,\n    address _integrationCouncil,\n    address _nonProfitCouncil\n  ) {\n    governanceCouncil = _governanceCouncil;\n    integrationCouncil = _integrationCouncil;\n    nonProfitCouncil = _nonProfitCouncil;\n  }\n")),(0,r.kt)("p",null,"To deploy the contract you need to send the following parameters:"),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"governanceCouncil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"IERC20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The governance council multsig wallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integrationCouncil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The integration council multsig wallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nonProfitCouncil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The non profit council multsig wallet")))),(0,r.kt)("h3",{id:"createpool"},"createPool"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Non Profit Council")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  function createPool(address _token) external {\n    require(msg.sender == nonProfitCouncil, "You are not the non profit council");\n    address pool = address(new Pool(_token, msg.sender));\n    pools.push(pool);\n    emit PoolCreated(pool, _token);\n  }\n')),(0,r.kt)("p",null,"Just the non profit council multsig wallet can call this function.",(0,r.kt)("br",{parentName:"p"}),"\n","This function add a create a pool.  "),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"token    ")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The token that will be accepted")))),(0,r.kt)("h3",{id:"fetchpools"},"fetchPools"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Anyone")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  function fetchPools(uint256 _index, uint256 _length) external view returns (address[] memory _pools, uint256 _newIndex) {\n    if (_length > pools.length - _index) {\n        _length = pools.length - _index;\n    }\n\n    _pools = new address[](_length);\n    for (uint256 i = 0; i < _length; i++) {\n        _pools[i] = pools[_index + i];\n    }\n\n    return (_pools, _index + _length);\n  }\n")),(0,r.kt)("p",null,"Anyone can call this method. You should send the length and the index to receive an array of address."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"index")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Index that will be the begin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"length")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many pools you want")))),(0,r.kt)("h3",{id:"addnonprofittowhitelist"},"addNonProfitToWhitelist"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Non Profit Council")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  function addNonProfitToWhitelist(address _pool, address _nonProfit) external {\n    require(msg.sender == nonProfitCouncil, "You are not the non profit council");\n\n    IPool pool = IPool(_pool);\n    pool.addNonProfitToWhitelist(_nonProfit);\n\n    emit NonProfitAdded(_pool, _nonProfit);\n  }\n')),(0,r.kt)("p",null,"Just the non profit council multsig wallet can call this function.",(0,r.kt)("br",{parentName:"p"}),"\n","This function add a non profit to the whitelist map as true, this means that this non profit can receive funds in a specific pool.  "),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The pool address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nonProfit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The non profit wallet address")))),(0,r.kt)("h3",{id:"removenonprofittowhitelist"},"removeNonProfitToWhitelist"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Non Profit Council")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  function removeNonProfitFromWhitelist(address _pool, address _nonProfit) external {\n    require(msg.sender == nonProfitCouncil, "You are not the non profit council");\n\n    IPool pool = IPool(_pool);\n    pool.removeNonProfitFromWhitelist(_nonProfit);\n\n    emit NonProfitAdded(_pool, _nonProfit);\n  }\n\n')),(0,r.kt)("p",null,"Just the non profit council multsig wallet can call this function.",(0,r.kt)("br",{parentName:"p"}),"\n","This function remove a non profit from whitelist map setting as false, this means that this non profit cannot receive funds in a specific pool.  "),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The pool address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nonProfit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The non profit wallet address")))),(0,r.kt)("h3",{id:"addpoolbalance"},"addPoolBalance"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Promoter")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  function addPoolBalance(address _pool, uint256 _amount) external {\n    require(_amount > 0, "Amount must be greater than 0");\n    \n\n    IPool pool = IPool(_pool);\n    IERC20 token = IERC20(pool.token());\n    \n    token.safeTransferFrom(msg.sender, _pool, _amount);\n\n    emit PoolBalanceIncreased(msg.sender, _pool, _amount);\n  }\n')),(0,r.kt)("p",null,"Anyone can call this function.",(0,r.kt)("br",{parentName:"p"}),"\n","This function send the donation token from the promoter to the contract and increases the specified pool."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pool  ")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The pool address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of donation tokens that will be sent")))),(0,r.kt)("h3",{id:"addintegrationbalance"},"addIntegrationBalance"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Integration council")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  function addIntegrationBalance(address _integration, uint256 _amount)\n    external\n  {\n    require(\n      msg.sender == integrationCouncil,\n      "You are not the integration council"\n    );\n    require(_amount > 0, "Amount must be greater than 0");\n\n    integrations[_integration] += _amount;\n\n    emit IntegrationBalanceAdded(_integration, _amount);\n  }\n')),(0,r.kt)("p",null,"Just the integration council multsig wallet can call this function.",(0,r.kt)("br",{parentName:"p"}),"\n","This function will give the power to integration to distribute the specified amount."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integration  ")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The integration address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount that should be increased on balance")))),(0,r.kt)("h3",{id:"removeintegrationbalance"},"removeIntegrationBalance"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Integration council")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  function removeIntegrationBalance(address _integration, uint256 _amount)\n    external\n  {\n    require(\n      msg.sender == integrationCouncil,\n      "You are not the integration council"\n    );\n    require(\n      integrations[_integration] >= _amount,\n      "Balance must be greater than amount"\n    );\n    require(_amount > 0, "Amount must be greater than 0");\n\n    integrations[_integration] -= _amount;\n\n    emit IntegrationBalanceRemoved(_integration, _amount);\n  }\n')),(0,r.kt)("p",null,"Just the integration council multsig wallet can call this function.",(0,r.kt)("br",{parentName:"p"}),"\n","This function send the donation token from the promoter to the contract and increases the specified pool."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integration  ")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The integration address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount that should be removed from balance")))),(0,r.kt)("h3",{id:"removeintegrationbalance-1"},"removeIntegrationBalance"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Integration council")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  function removeIntegrationBalance(address _integration, uint256 _amount)\n    external\n  {\n    require(\n      msg.sender == integrationCouncil,\n      "You are not the integration council"\n    );\n    require(\n      integrations[_integration] >= _amount,\n      "Balance must be greater than amount"\n    );\n    require(_amount > 0, "Amount must be greater than 0");\n\n    integrations[_integration] -= _amount;\n\n    emit IntegrationBalanceRemoved(_integration, _amount);\n  }\n')),(0,r.kt)("p",null,"Just the integration council multsig wallet can call this function.",(0,r.kt)("br",{parentName:"p"}),"\n","This function send the donation token from the promoter to the contract and increases the specified pool."),(0,r.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integration  ")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The integration address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount that should be removed from balance")))),(0,r.kt)("h3",{id:"donatethroughintegration"},"donateThroughIntegration"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Integration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  function donateThroughIntegration(\n    address _pool,\n    address _nonProfit,\n    bytes32 _user,\n    uint256 _amount\n  ) external {\n    require(\n      integrations[msg.sender] >= _amount,\n      "Balance must greater than amount"\n    );\n    require(_amount > 0, "Amount must be greater than 0");\n\n    integrations[msg.sender] -= _amount;\n\n    IPool pool = IPool(_pool);\n    pool.donateThroughIntegration(_nonProfit, msg.sender, _user, _amount);\n\n    emit DonationAdded(_pool, _user, msg.sender, _nonProfit, _amount);\n  }\n')),(0,r.kt)("p",null,"Just the integration wallet can call this function.",(0,r.kt)("br",{parentName:"p"}),"\n","This function send the token from the pool to the non profit stamping the user on the donation."),(0,r.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The pool address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nonProfit")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The non profit address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The user hashed email with keccak256")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount that should be sended to the non profit")))),(0,r.kt)("h3",{id:"setnonprofitcouncil"},"setNonProfitCouncil"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Governance Council")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  function setNonProfitCouncil(address _nonProfitCouncil) external {\n    require(\n      msg.sender == governanceCouncil,\n      "You are not the governance council"\n    );\n\n    nonProfitCouncil = _nonProfitCouncil;\n\n    emit NonProfitCouncilChanged(nonProfitCouncil);\n  }\n')),(0,r.kt)("p",null,"Just the governance council wallet can call this function.",(0,r.kt)("br",{parentName:"p"}),"\n","This function change the non profit council"),(0,r.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nonProfitCouncil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The new nonProfitCouncil address")))),(0,r.kt)("h3",{id:"setintegrationcouncil"},"setIntegrationCouncil"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Governance Council")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  function setIntegrationCouncil(address _integrationCouncil) external {\n    require(\n      msg.sender == governanceCouncil,\n      "You are not the governance council"\n    );\n\n    integrationCouncil = _integrationCouncil;\n\n    emit IntegrationCouncilChanged(integrationCouncil);\n  }\n')),(0,r.kt)("p",null,"Just the governance council wallet can call this function.",(0,r.kt)("br",{parentName:"p"}),"\n","This function change the integration council"),(0,r.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integrationCouncil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The new integrationCouncil address")))),(0,r.kt)("h3",{id:"setgovernancecouncil"},"setGovernanceCouncil"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Governance Council")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  function setGovernanceCouncil(address _governanceCouncil) external {\n    require(\n      msg.sender == governanceCouncil,\n      "You are not the governance council"\n    );\n\n    governanceCouncil = _governanceCouncil;\n\n    emit GovernanceCouncilChanged(governanceCouncil);\n  }\n')),(0,r.kt)("p",null,"Just the governance council wallet can call this function.",(0,r.kt)("br",{parentName:"p"}),"\n","This function change the governanceCouncil council"),(0,r.kt)("h4",{id:"parameters-12"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"governanceCouncil")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The new governanceCouncil address")))),(0,r.kt)("h3",{id:"transferpoolbalance"},"transferPoolBalance"),(0,r.kt)("admonition",{title:"Who uses this function",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Governance Council")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  function transferPoolBalance(address _pool, address _wallet) external {\n    require(\n      msg.sender == governanceCouncil,\n      "You are not the governance council"\n    );\n\n    IPool pool = IPool(_pool);\n    pool.transferBalance(_wallet);\n\n    emit PoolBalanceTransfered(_pool, _wallet);\n  }\n')),(0,r.kt)("p",null,"Just the governance council wallet can call this function.",(0,r.kt)("br",{parentName:"p"}),"\n","This function move funds from the pool to the specified wallet."),(0,r.kt)("h4",{id:"parameters-13"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pool")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The pool address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"wallet")),(0,r.kt)("td",{parentName:"tr",align:"left"},"address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The wallet that will receive the funds")))))}s.isMDXComponent=!0}}]);