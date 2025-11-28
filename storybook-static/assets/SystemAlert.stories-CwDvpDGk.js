import{j as e,r as n}from"./datepicker-Dz1Ef8Gs.js";import{S as a}from"./SystemAlert-DoxoeFCJ.js";import{B as o}from"./Button-CXK4nf7q.js";import"./Accordion-Df7MQ9M_.js";import"./Tooltip-Cp-PtiUd.js";import"./Tab-CcTHlKzT.js";import"./Toast-CqV_NGdi.js";import"./Breadcrumb-BFGz9K-G.js";import"./Pagination-BaaoGIS3.js";import"./Table-D-zznb_h.js";import"./Divider-BDrM-FjD.js";import"./Switch-DMSloCs8.js";import"./Checkbox-E_wWkiQ4.js";import"./TextArea-3aKn7_Np.js";import"./RadioGroup-CE5nwBXW.js";import"./Selectbox-CmqXNL1u.js";import"./Input-CKW91mN5.js";import"./DateRangePicker-Bxns-PhW.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";import"./iframe-B7ALOmHm.js";import"./preload-helper-PPVm8Dsz.js";import"./use-merged-ref-UB3wosNa.js";const R={title:"UI/SystemAlert",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[t=>e.jsx("div",{style:{display:"flex",position:"relative",minWidth:"100%",minHeight:"30rem",justifyContent:"center",alignContent:"center"},children:e.jsx("div",{style:{margin:"auto"},children:e.jsx(t,{})})})],argTypes:{title:{control:"text",table:{type:{summary:"string | false"}}},message:{control:"object",table:{type:{summary:"string | React.ReactNode"}}},hasConfirm:{control:"boolean"},hasCancel:{control:"boolean"},confirmLabel:{control:"text"},cancelLabel:{control:"text"},type:{control:{type:"select"},options:["info","success","warning","error"],table:{type:{summary:"string "}}}}},l={args:{title:"알림",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",hasConfirm:!0,hasCancel:!1},render:t=>{const[r,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Alert 열기",onClick:()=>s(!0)}),r&&e.jsx(a,{...t,visible:r,onClose:()=>s(!1),onConfirm:()=>s(!1)})]})}},i={args:{title:"알림",message:e.jsxs("p",{children:["첫 번째 줄",e.jsx("br",{}),"두 번째 줄",e.jsx("br",{}),"세 번째 줄"]}),hasConfirm:!0,hasCancel:!0,confirmLabel:"삭제",cancelLabel:"취소"},render:t=>{const[r,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Confirm 열기",onClick:()=>s(!0)}),r&&e.jsx(a,{...t,visible:r,onClose:()=>s(!1),onConfirm:()=>s(!1),onCancel:()=>s(!1)})]})}},m={args:{title:"알림",message:"버튼 없이 표시되는 알림입니다.",hasConfirm:!1,hasCancel:!1},render:t=>{const[r,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Alert 열기",onClick:()=>s(!0)}),r&&e.jsx(a,{...t,visible:r,onClose:()=>s(!1)})]})}},p={args:{title:!1,message:"제목 없이 표시되는 알림입니다.",hasConfirm:!0,hasCancel:!1},render:t=>{const[r,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Alert 열기",onClick:()=>s(!0)}),r&&e.jsx(a,{...t,visible:r,onClose:()=>s(!1),onConfirm:()=>s(!1)})]})}},c={args:{title:"경고",message:"경고 타입 알림입니다.",type:"warning",hasConfirm:!0,hasCancel:!1},render:t=>{const[r,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Alert 열기",onClick:()=>s(!0)}),r&&e.jsx(a,{...t,visible:r,onClose:()=>s(!1),onConfirm:()=>s(!1)})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: '알림',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    hasConfirm: true,
    hasCancel: false
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button label="Alert 열기" onClick={() => setIsOpen(true)} />\r
        {isOpen && <SystemAlert {...args} visible={isOpen} onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} />}\r
      </>;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: '알림',
    message: <p>\r
        첫 번째 줄<br />\r
        두 번째 줄<br />세 번째 줄\r
      </p>,
    hasConfirm: true,
    hasCancel: true,
    confirmLabel: '삭제',
    cancelLabel: '취소'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button label="Confirm 열기" onClick={() => setIsOpen(true)} />\r
        {isOpen && <SystemAlert {...args} visible={isOpen} onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} onCancel={() => setIsOpen(false)} />}\r
      </>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: '알림',
    message: '버튼 없이 표시되는 알림입니다.',
    hasConfirm: false,
    hasCancel: false
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button label="Alert 열기" onClick={() => setIsOpen(true)} />\r
        {isOpen && <SystemAlert {...args} visible={isOpen} onClose={() => setIsOpen(false)} />}\r
      </>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: false,
    message: '제목 없이 표시되는 알림입니다.',
    hasConfirm: true,
    hasCancel: false
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button label="Alert 열기" onClick={() => setIsOpen(true)} />\r
        {isOpen && <SystemAlert {...args} visible={isOpen} onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} />}\r
      </>;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: '경고',
    message: '경고 타입 알림입니다.',
    type: 'warning',
    hasConfirm: true,
    hasCancel: false
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>\r
        <Button label="Alert 열기" onClick={() => setIsOpen(true)} />\r
        {isOpen && <SystemAlert {...args} visible={isOpen} onClose={() => setIsOpen(false)} onConfirm={() => setIsOpen(false)} />}\r
      </>;
  }
}`,...c.parameters?.docs?.source}}};const q=["Alert","Confirm","NoButtons","NoTitle","TypeVariants"];export{l as Alert,i as Confirm,m as NoButtons,p as NoTitle,c as TypeVariants,q as __namedExportsOrder,R as default};
