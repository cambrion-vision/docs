"use strict";(self.webpackChunkcambrion_doc=self.webpackChunkcambrion_doc||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={description:"This is the guide",sidebar_position:1},a="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"This is the guide",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"This is the guide",sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Workflows",permalink:"/docs/docs/category/workflows"}},l={},c=[{value:"Executions",id:"executions",level:2},{value:"Pipelines",id:"pipelines",level:2},{value:"Observation",id:"observation",level:4},{value:"Transforms",id:"transforms",level:4},{value:"Linker",id:"linker",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Welcome to this introduction notebook for the Cambrion API. In the following tutorial we introduce the core functionalities of the API and demonstrate how to use it to extract information from complex documents. "),(0,i.kt)("h2",{id:"executions"},"Executions"),(0,i.kt)("p",null,"An execution represents a context that allows to manage and store multiple media files. At some point later in time these can be used as input for a pipeline to be processed in one single batch. The results of the pipeline will also be stored in the execution as an ",(0,i.kt)("strong",{parentName:"p"},"observation"),". As all the media files in an execution are stored in database it can also be used as a document archive."),(0,i.kt)("p",null,"Additionally an execution can be associated with arbitrary meta data. This meta data can be used to associate business objects with executions. Further a tag can be assigned to each execution. A tag can be used to filter executions belonging to certain class of process (e.g. distinction between import and export) when listing executions. Each execution also has an ID that can be set. This can be used to directly access executions by ID."),(0,i.kt)("p",null,"An example is a task list where each task involves taking one or more images of a document that contains information that needs to be bundled together. When listing executions each execution belongs to a task."),(0,i.kt)("h2",{id:"pipelines"},"Pipelines"),(0,i.kt)("p",null,"A pipeline is sequence of operations performed on the media files uploaded to an execution. A pipeline can also be run by just supplying it the media files in the request. In that case no execution is created."),(0,i.kt)("h4",{id:"observation"},"Observation"),(0,i.kt)("p",null,"The results of a pipeline are stored in object called observation. An observation is a complex data structure that models content of an image in a way that allows maximum flexibility. It contains a lot of information that can be used process the data further or allows visualization of the results. The exact depends on the definition of the pipeline and the undlying model(s). "),(0,i.kt)("p",null,"An observation can contain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All the text fragments recognized by the pipeline"),(0,i.kt)("li",{parentName:"ul"},"Labels for text fragments that have been classified"),(0,i.kt)("li",{parentName:"ul"},"Scores that correspond to uncertainties")),(0,i.kt)("h4",{id:"transforms"},"Transforms"),(0,i.kt)("p",null,"Sometimes an observation can be too complex and overwhelming. To mitigate that we introduced transforms. A transform is a simple statement specified in JSONata (",(0,i.kt)("a",{parentName:"p",href:"https://jsonata.org"},"https://jsonata.org"),")."),(0,i.kt)("h2",{id:"linker"},"Linker"),(0,i.kt)("p",null,"The linker allows you to link detected entities to data stored in an index."))}d.isMDXComponent=!0}}]);