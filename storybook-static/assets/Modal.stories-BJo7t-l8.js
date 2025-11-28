import{j as e,r as p}from"./datepicker-Dz1Ef8Gs.js";import{M as s}from"./SystemAlert-DoxoeFCJ.js";import{B as l}from"./Button-CXK4nf7q.js";import"./Accordion-Df7MQ9M_.js";import"./Tooltip-Cp-PtiUd.js";import"./Tab-CcTHlKzT.js";import"./Toast-CqV_NGdi.js";import"./Breadcrumb-BFGz9K-G.js";import"./Pagination-BaaoGIS3.js";import"./Table-D-zznb_h.js";import"./Divider-BDrM-FjD.js";import"./Switch-DMSloCs8.js";import"./Checkbox-E_wWkiQ4.js";import"./TextArea-3aKn7_Np.js";import"./RadioGroup-CE5nwBXW.js";import"./Selectbox-CmqXNL1u.js";import"./Input-CKW91mN5.js";import"./DateRangePicker-Bxns-PhW.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";import"./iframe-B7ALOmHm.js";import"./preload-helper-PPVm8Dsz.js";import"./use-merged-ref-UB3wosNa.js";const _={title:"UI/Modal",component:s,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{label:{control:"text"},children:{control:"text"},isOpen:{control:!1}},decorators:[r=>e.jsx("div",{style:{display:"flex",position:"relative",minWidth:"100%",minHeight:"30rem",justifyContent:"center",alignContent:"center"},children:e.jsx("div",{style:{margin:"auto"},children:e.jsx(r,{})})})]},a=r=>{const[i,n]=p.useState(r.isOpen??!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>n(!0),label:"모달 열기"}),e.jsx(s,{...r,isOpen:i,onClose:()=>n(!1)})]})},t={render:a,args:{label:"테스트 모달",children:e.jsx("p",{children:"여기에 모달 내용"}),isOpen:!1}},o={render:a,args:{children:e.jsx("p",{children:"여기에 모달 내용"}),isOpen:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: ModalIndependentTemplate,
  args: {
    label: '테스트 모달',
    children: <p>여기에 모달 내용</p>,
    isOpen: false
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: ModalIndependentTemplate,
  args: {
    children: <p>여기에 모달 내용</p>,
    isOpen: false
  }
}`,...o.parameters?.docs?.source}}};const k=["Default","NoHeader"];export{t as Default,o as NoHeader,k as __namedExportsOrder,_ as default};
