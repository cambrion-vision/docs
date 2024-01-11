"use strict";(self.webpackChunkcambrion_doc=self.webpackChunkcambrion_doc||[]).push([[167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(f,r(r({ref:t},l),{},{components:n})):i.createElement(f,r({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const o={description:"Using executions",sidebar_position:3},r="Using an execution",s={unversionedId:"pipelines/executions",id:"pipelines/executions",title:"Using an execution",description:"Using executions",source:"@site/docs/pipelines/executions.md",sourceDirName:"pipelines",slug:"/pipelines/executions",permalink:"/docs/pipelines/executions",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Using executions",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Calling a pipeline",permalink:"/docs/pipelines/pipeline"},next:{title:"Link business data",permalink:"/docs/pipelines/linker"}},c={},u=[{value:"An execution is a state",id:"an-execution-is-a-state",level:2},{value:"Attach executions to document workflows",id:"attach-executions-to-document-workflows",level:2},{value:"Execution meta data",id:"execution-meta-data",level:2},{value:"Using executions as a document archive",id:"using-executions-as-a-document-archive",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-an-execution"},"Using an execution"),(0,a.kt)("p",null,"Before running the pipeline you can populate the execution with media files (e.g. images, pdf etc.) which subsequently can be used in a pipeline. This enables a simple and efficient way for ",(0,a.kt)("strong",{parentName:"p"},"batch processing"),"."),(0,a.kt)("h2",{id:"an-execution-is-a-state"},"An execution is a state"),(0,a.kt)("p",null,"When executing a pipeline we use the execution as a store to persist input documents (",(0,a.kt)("a",{parentName:"p",href:"/api#tag/Executions/paths/~1executions~1%7BexecutionId%7D~1observation~1media/pos"},"media objects"),") and also to store results (as an ",(0,a.kt)("a",{parentName:"p",href:"./observations"},"observation"),") from one or more pipeline runs on those documents."),(0,a.kt)("h2",{id:"attach-executions-to-document-workflows"},"Attach executions to document workflows"),(0,a.kt)("p",null,"Sometimes a document workflow contains multiple pipelines with non-overlapping functionality. When we need to run these pipelines on the same document we can use executions to organize that."),(0,a.kt)("h2",{id:"execution-meta-data"},"Execution meta data"),(0,a.kt)("p",null,"You can add meta data fields to any execution when creating it. There are three levels of meta data that can be added via the API:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate an ID and set it in the ",(0,a.kt)("inlineCode",{parentName:"li"},"executionId")," field"),(0,a.kt)("li",{parentName:"ol"},"Add a tag  in the ",(0,a.kt)("inlineCode",{parentName:"li"},"tag")," field. When querying executions the tag can be used as a filter option."),(0,a.kt)("li",{parentName:"ol"},"Attach a generic JSON object to the execution. This can be anything as long as it's compatible with JSON.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nurl = "https://api.cambrion.io/v1/executions"\n\nCAMBRION_API_KEY = "INSERT_API_KEY"\nheaders = {\n  \'Accept\': \'application/json\',\n  \'Content-Type\': \'application/json\',\n  \'X-API-Key\': CAMBRION_API_KEY\n}\n\npayload = json.dumps({\n  "executionId": "my-process-12345", # this can be used\n  "tag": "special-workflow",\n  "metaData": {\n    "good_is_danger": False,\n    "user": "Lisa Meier"\n  }\n})\n\nrequests.request("POST", url, headers=headers, data=payload)\n')),(0,a.kt)("p",null,"Later the execution can be accessed via the ",(0,a.kt)("inlineCode",{parentName:"p"},"executionId"),". "),(0,a.kt)("h2",{id:"using-executions-as-a-document-archive"},"Using executions as a document archive"),(0,a.kt)("p",null,"As you add documents in form of media files to executions it is just natural to use executions as way to organize and store documents."))}d.isMDXComponent=!0}}]);