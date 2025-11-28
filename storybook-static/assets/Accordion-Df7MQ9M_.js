import{r as u,j as r}from"./datepicker-Dz1Ef8Gs.js";const I=({items:f,allowMultipleOpen:y=!1,defaultOpenIndex:c,className:a})=>{const[t,i]=u.useState(c!==void 0?[c]:[]),d=u.useId(),l=n=>{t.includes(n)?i(t.filter(e=>e!==n)):i(y?[...t,n]:[n])};return r.jsx("div",{className:`accordion${a?` ${a}`:""}`,role:"presentation",children:f.map((n,e)=>{const p=`accordion_header_${d}_${e}`,m=`accordion_content_${d}_${e}`,o=t.includes(e);return r.jsxs("div",{className:`accordion-item${o?" active":""}`,children:[r.jsx("strong",{className:"accordion-header",children:r.jsx("button",{type:"button",id:p,className:"accordion-trigger","aria-expanded":o,"aria-controls":m,onClick:()=>l(e),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),l(e))},children:n.title})}),r.jsx("div",{id:m,role:"region","aria-labelledby":p,className:"accordion-content",...o?{}:{inert:!0},children:n.content})]},e)})})};I.__docgenInfo={description:"Accordion UI 컴포넌트",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItem"}],raw:"AccordionItem[]"},description:`아코디언에 표시할 아이템 배열\r
\r
\`\`\`jsx\r
items = [\r
  {\r
    title: '첫 번째 항목',\r
    content: <p>첫 번째 내용입니다.</p>\r
  },\r
  {\r
    title: '두 번째 항목',\r
    content: <p>두 번째 내용입니다.</p>\r
  }\r
]\r
\`\`\``},allowMultipleOpen:{required:!1,tsType:{name:"boolean"},description:"여러 항목을 동시에 열 수 있는지 여부 (기본: false)",defaultValue:{value:"false",computed:!1}},defaultOpenIndex:{required:!1,tsType:{name:"number"},description:"기본으로 열려있는 항목의 인덱스 (기본: 없음)"},className:{required:!1,tsType:{name:"string"},description:"커스텀 CSS 클래스"}}};export{I as A};
