import{r as o,j as s}from"./datepicker-Dz1Ef8Gs.js";import{P as g}from"./Pagination-BaaoGIS3.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";const m={title:"UI/Pagination",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{currentPage:{control:"number"},total:{control:"number"},perPage:{control:"number"},showCount:{control:"number"}}},r={render:e=>{const[n,t]=o.useState(e.currentPage||1);return o.useEffect(()=>{e.currentPage!==n&&t(e.currentPage||1)},[e.currentPage]),s.jsx(g,{...e,currentPage:n,onPageChange:a=>{e.onPageChange?.(a),t(a)}})},args:{total:100,perPage:10,currentPage:1,showCount:5,onPageChange:()=>{}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
    useEffect(() => {
      if (args.currentPage !== currentPage) {
        setCurrentPage(args.currentPage || 1);
      }
    }, [args.currentPage]);
    return <Pagination {...args} currentPage={currentPage} onPageChange={page => {
      args.onPageChange?.(page);
      setCurrentPage(page);
    }} />;
  },
  args: {
    total: 100,
    perPage: 10,
    currentPage: 1,
    showCount: 5,
    onPageChange: () => {}
  }
}`,...r.parameters?.docs?.source}}};const i=["Default"];export{r as Default,i as __namedExportsOrder,m as default};
