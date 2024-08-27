"use strict";(self.webpackChunkcambrion_doc=self.webpackChunkcambrion_doc||[]).push([[986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={description:"Using extractions to create pipelines",sidebar_position:1},o="Extraction API Documentation",c={unversionedId:"pipelines/extractions",id:"pipelines/extractions",title:"Extraction API Documentation",description:"Using extractions to create pipelines",source:"@site/docs/pipelines/extractions.md",sourceDirName:"pipelines",slug:"/pipelines/extractions",permalink:"/docs/pipelines/extractions",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Using extractions to create pipelines",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Pipelines",permalink:"/docs/category/pipelines"},next:{title:"Processing documents",permalink:"/docs/pipelines/pipeline"}},l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Key Concepts",id:"key-concepts",level:2},{value:"Entities",id:"entities",level:3},{value:"Key Value Sets",id:"key-value-sets",level:3},{value:"Tables",id:"tables",level:3},{value:"Example: Creating an Extraction for Invoice Number",id:"example-creating-an-extraction-for-invoice-number",level:2},{value:"Example: Creating an Extraction for Commercial Invoice Line Items",id:"example-creating-an-extraction-for-commercial-invoice-line-items",level:2},{value:"Best Practices for Creating Extractions",id:"best-practices-for-creating-extractions",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extraction-api-documentation"},"Extraction API Documentation"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Extraction API provides a powerful interface for extracting structured information from unstructured documents such as PDFs and images. It's particularly useful for processing commercial invoices and other trade-related documents. Key features include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pipeline Execution"),": Run pre-defined or custom extraction pipelines to process documents and extract relevant information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Custom Extractions"),": Create tailored extraction schemas to target specific fields and tables within documents."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Document Linking"),": Connect extracted content with structured data stored in an index, enhancing the context and usability of the extracted information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Context-Aware Extraction"),": Utilize document context and specific hints to improve extraction accuracy for different document types and formats.")),(0,r.kt)("p",null,"This API is ideal for businesses involved in international trade, logistics, and supply chain management, as well as developers looking to automate document processing and improve data accuracy."),(0,r.kt)("h2",{id:"key-concepts"},"Key Concepts"),(0,r.kt)("p",null,"To effectively use the Extraction API, it's important to understand the following key concepts:"),(0,r.kt)("h3",{id:"entities"},"Entities"),(0,r.kt)("p",null,"Entities are the fundamental building blocks of extracted information. An entity represents a single piece of data within a document and has the following key properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"field_name"),": The name of the field as it appears in the document."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"field_key"),": A unique identifier for the field in the extraction schema."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type"),': The data type of the field (e.g., "Text", "Date", "Number", "Quantity").'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description"),": A detailed description of what the field represents and where it might be found in the document."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"examples"),": (Optional) Sample values for the field to aid in extraction.")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"invoice_number": {\n  "field_name": "invoice_number",\n  "field_key": "invoice_number",\n  "type": "Text",\n  "description": "The invoice number.",\n  "examples": ["A-12345"]\n}\n')),(0,r.kt)("h3",{id:"key-value-sets"},"Key Value Sets"),(0,r.kt)("p",null,"Key Value Sets represent logical groupings of related entities. In the context of our extraction schema, they are typically used for non-tabular data in the document. Each key-value pair consists of a field definition similar to an entity."),(0,r.kt)("h3",{id:"tables"},"Tables"),(0,r.kt)("p",null,"Tables represent structured data organized in rows and columns. In the Extraction API, tables are defined using the following structure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"key"),": A unique identifier for the table."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"description"),": A description of what the table represents."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"columns"),": An object containing definitions for each column in the table.")),(0,r.kt)("p",null,"Each column is defined similarly to an entity, with properties like field_name, field_key, type, and description."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"items": {\n  "key": "items",\n  "description": "The table of items in the invoice. The table contains the following columns:",\n  "columns": {\n    "purchase_order_number": {\n      "field_name": "purchase_order_number",\n      "field_key": "purchase_order_number",\n      "type": "Text",\n      "description": "The purchase order number (#PO) or customer purchase order number.",\n      "examples": ["3611245"]\n    },\n    // ... other columns\n  }\n}\n')),(0,r.kt)("h2",{id:"example-creating-an-extraction-for-invoice-number"},"Example: Creating an Extraction for Invoice Number"),(0,r.kt)("p",null,"Here's an example of how to create an extraction to extract an invoice number from a given invoice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'POST /extractions\n\n{\n  "description": "Extract invoice number from invoice",\n  "generationInstruct": {\n    "document_context": "The document is a commercial invoice with typical attributes common in international trade.",\n    "instruction": {\n      "invoice_number": {\n        "field_name": "invoice_number",\n        "field_key": "invoice_number",\n        "type": "Text",\n        "description": "The invoice number.",\n        "examples": []\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This extraction creates a simple pipeline to extract the invoice number. The API will use the provided description to identify and extract the invoice number from the document."),(0,r.kt)("h2",{id:"example-creating-an-extraction-for-commercial-invoice-line-items"},"Example: Creating an Extraction for Commercial Invoice Line Items"),(0,r.kt)("p",null,"Here's an example of how to create an extraction to extract line items from a commercial invoice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'POST /extractions\n\n{\n  "description": "Extract line items from commercial invoice",\n  "generationInstruct": {\n    "document_context": "The document is a commercial invoice with typical attributes common in international trade.",\n    "instruction": {\n      "items": {\n        "key": "items",\n        "description": "The table of items in the invoice. The table contains the following columns:",\n        "columns": {\n          "purchase_order_number": {\n            "field_name": "purchase_order_number",\n            "field_key": "purchase_order_number",\n            "type": "Text",\n            "description": "The purchase order number (PO#) or customer purchase order number. This is not the item number.",\n            "examples": ["3611245"]\n          },\n          "quantity": {\n            "field_name": "quantity",\n            "field_key": "quantity",\n            "type": "Quantity",\n            "description": "The number of items shipped.",\n            "examples": []\n          },\n          "article_description": {\n            "field_name": "article_description",\n            "field_key": "article_description",\n            "type": "Text",\n            "description": "The description of the article in the line.",\n            "examples": []\n          },\n          "unit_price": {\n            "field_name": "unit_price",\n            "field_key": "unit_price",\n            "type": "Number",\n            "description": "The price per item.",\n            "examples": []\n          },\n          "order_value": {\n            "field_name": "order_value",\n            "field_key": "order_value",\n            "type": "Number",\n            "description": "The amount of the item.",\n            "examples": []\n          },\n          "delivery_date": {\n            "field_name": "delivery_date",\n            "field_key": "delivery_date",\n            "type": "Date",\n            "description": "The date of the delivery of the item.",\n            "examples": []\n          },\n        }\n      }\n    },\n    "hints": [\n      "When the article description contains the word electronics, set the purchase_order_number to none."\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"This extraction creates a schema to extract line items from a commercial invoice. It defines a table structure with columns for purchase order number, quantity, article description, unit price, order value, and delivery date. An example of custom context is given in the hints section. The API will use this schema to identify and extract the line item data from the invoice document."),(0,r.kt)("h2",{id:"best-practices-for-creating-extractions"},"Best Practices for Creating Extractions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Provide Context"),": Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"document_context")," field to describe the type of document you're extracting information from.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Be Specific in Field Descriptions"),": Clearly describe what each field represents and where it might be found in the document.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Use Correct Data Types"),": Specify the correct data type for each field (Text, Number, Date, Quantity) to ensure proper parsing and formatting of extracted data.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Provide Examples"),": When possible, include examples for fields that might have specific formats or variations.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Define Structured Data"),": Use the table structure (like the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," field in the example) to define how repeated structured data should be extracted.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Include Custom Hints"),": The hints section can be used to provide additional context. For example if you're dealing with invoices from multiple companies, include hints about company-specific formats or labeling.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Handle Edge Cases"),": Include instructions for handling missing data or alternative formats."))),(0,r.kt)("p",null,"By following these practices and customizing your extraction schema to your specific needs, you can create highly accurate and reliable document extraction processes using the Extraction API."))}u.isMDXComponent=!0}}]);