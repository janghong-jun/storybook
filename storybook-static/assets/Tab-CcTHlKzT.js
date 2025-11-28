import{r as o,j as a}from"./datepicker-Dz1Ef8Gs.js";const y=({items:n,className:u,onChange:d})=>{const[l,m]=o.useState(0),c=o.useId(),s=o.useRef([]);o.useEffect(()=>{s.current=s.current.slice(0,n.length)},[n.length]);const f=r=>{m(r),d&&d(n[r].label)};return a.jsxs("div",{className:`tab${u?` ${u}`:""}`,children:[a.jsx("div",{role:"tablist","aria-label":"탭 목록",className:"tab-list",children:n.map((r,e)=>{const i=`tab_${c}_${e}`,p=`panel_${c}_${e}`;return a.jsxs("button",{id:i,role:"tab",type:"button","aria-selected":l===e,"aria-controls":p,ref:t=>{s.current[e]=t},disabled:r.disabled??!1,className:`tab-trigger${l===e?" active":""}`,onClick:()=>f(e),onKeyDown:t=>{if(t.key==="ArrowRight"){t.preventDefault();const b=(e+1)%n.length;s.current[b]?.focus()}else if(t.key==="ArrowLeft"){t.preventDefault();const b=(e-1+n.length)%n.length;s.current[b]?.focus()}else(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),f(e))},children:[r.label,l===e&&a.jsx("span",{className:"sr-only",children:"선택됨"})]},e)})}),a.jsx("div",{className:"tab-content-wrap",children:n.map((r,e)=>{const i=`tab_${c}_${e}`,p=`panel_${c}_${e}`,t=l===e;return a.jsxs("section",{id:p,role:"tabpanel","aria-labelledby":i,...t?{}:{inert:!0},className:`tab-content${t?" active":""}`,children:[a.jsx("h3",{className:"sr-only",children:r.label}),r.content]},e)})})]})};y.__docgenInfo={description:"Tab UI 컴포넌트",methods:[],displayName:"Tab",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:`탭에 표시할 아이템 배열\r
\r
\`\`\`ts\r
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
\`\`\``},className:{required:!1,tsType:{name:"string"},description:"커스텀 CSS 클래스"},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string) => void",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"void"}}},description:"탭 변경시 콜백"}}};export{y as T};
