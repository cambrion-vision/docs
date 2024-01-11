"use strict";(self.webpackChunkcambrion_doc=self.webpackChunkcambrion_doc||[]).push([[147],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?i.createElement(y,p(p({ref:n},c),{},{components:t})):i.createElement(y,p({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[d]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<a;s++)p[s]=t[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const a={description:"Directly call a pipeline",sidebar_position:1},p="Calling a pipeline",o={unversionedId:"pipelines/pipeline",id:"pipelines/pipeline",title:"Calling a pipeline",description:"Directly call a pipeline",source:"@site/docs/pipelines/pipeline.md",sourceDirName:"pipelines",slug:"/pipelines/pipeline",permalink:"/docs/pipelines/pipeline",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Directly call a pipeline",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Pipelines",permalink:"/docs/category/pipelines"},next:{title:"Using an execution",permalink:"/docs/pipelines/executions"}},l={},s=[{value:"List pipelines",id:"list-pipelines",level:2},{value:"Idempotence of a pipeline",id:"idempotence-of-a-pipeline",level:2},{value:"Underlying concept",id:"underlying-concept",level:2},{value:"Asynchronously calling a pipeline",id:"asynchronously-calling-a-pipeline",level:2}],c={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"calling-a-pipeline"},"Calling a pipeline"),(0,r.kt)("p",null,"Calling the pipeline directly is the simplest way to interact with the API. You can feed data into the pipeline by using the pipeline endpoint and the pipeline is triggered to be executed with your data. Once the pipeline finished processing your data, the results are delivered in the response body of the API call. Either as an ",(0,r.kt)("a",{parentName:"p",href:"./observations"},"observation"),", a JSON object derived from the observation or a JSONata transformed observation."),(0,r.kt)("p",null,"Here is a simple example of calling a pipeline with a PNG image as input media and returning the observation as result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import base64\nfrom io import BytesIO\nfrom PIL import Image\n\nimport json\nimport requests\n\nCAMBRION_API_KEY = \"INSERT_API_KEY\"\nheaders = {\n  'Accept': 'application/json',\n  'Content-Type': 'application/json',\n  'X-API-Key': CAMBRION_API_KEY\n}\n\nurl = \"https://api.cambrion.io/v1/pipelines/my-pipeline/executeSync\"\n\nimage = Image.open('./path/to/my/image/image.png')\n\nbuffered = BytesIO()\nimage.save(buffered, format=\"PNG\")\nimg_str = base64.b64encode(buffered.getvalue()).decode()\n\npayload = json.dumps({\n    \"media\": [img_str],\n})\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload)\n\nobservation = response.json()\n")),(0,r.kt)("p",null,"The response contains the observation as JSON produced by the pipeline with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"my-pipeline"),"."),(0,r.kt)("h2",{id:"list-pipelines"},"List pipelines"),(0,r.kt)("p",null,"To get a list of avaiable pipelines perform a GET request on the ",(0,r.kt)("inlineCode",{parentName:"p"},"pipelines")," endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nCAMBRION_API_KEY = \"INSERT_API_KEY\"\nheaders = {\n  'Accept': 'application/json',\n  'Content-Type': 'application/json',\n  'X-API-Key': CAMBRION_API_KEY\n}\n\nurl = \"https://api.cambrion.io/v1/pipelines\"\n\nresponse = requests.request(\"GET\", url, headers=headers)\n\npipelines = response.json()\n")),(0,r.kt)("h2",{id:"idempotence-of-a-pipeline"},"Idempotence of a pipeline"),(0,r.kt)("p",null,"Executing a pipeline multiple times on an execution is a non-idempotent process. That means that the results of any additional call will be appended to the observation. Calling a pipeline directly with the same data will however result in the same result in every subsequent call."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The uploaded media objects are ",(0,r.kt)("strong",{parentName:"p"},"not persisted")," when calling the pipeline directly!")),(0,r.kt)("h2",{id:"underlying-concept"},"Underlying concept"),(0,r.kt)("p",null,"Pipelines are based on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/architecture.html#ensemble-models"},"NVIDIA Triton Ensemble Models"),". "),(0,r.kt)("h2",{id:"asynchronously-calling-a-pipeline"},"Asynchronously calling a pipeline"),(0,r.kt)("p",null,"To implement background processing of documents one can execute a pipeline asynchronously by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeAsync")," endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import base64\nfrom io import BytesIO\nfrom PIL import Image\n\nimport json\nimport requests\n\nCAMBRION_API_KEY = \"INSERT_API_KEY\"\nheaders = {\n  'Accept': 'application/json',\n  'Content-Type': 'application/json',\n  'X-API-Key': CAMBRION_API_KEY\n}\n\nurl = \"https://api.cambrion.io/v1/pipelines/my-pipeline/executeAsync\"\n\nimage = Image.open('./path/to/my/image/image.png')\n\nbuffered = BytesIO()\nimage.save(buffered, format=\"PNG\")\nimg_str = base64.b64encode(buffered.getvalue()).decode()\n\npayload = json.dumps({\n    \"media\": [img_str],\n})\n\nresponse = requests.request(\"POST\", url, headers=headers, data=payload)\n\nobservation = response.json()\n")))}u.isMDXComponent=!0}}]);