import{j as e,r}from"./datepicker-Dz1Ef8Gs.js";import{T as a}from"./Toast-CqV_NGdi.js";import{B as l}from"./Button-CXK4nf7q.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";const p={title:"UI/Toast",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{message:{table:{type:{summary:"string | React.ReactNode"}},control:"text"},duration:{control:"number"},visible:{control:!1},onClose:{action:"closed"},className:{control:"text"},triggerRef:{control:!1}},decorators:[s=>e.jsx("div",{style:{display:"flex",position:"relative",minWidth:"100%",minHeight:"20rem",justifyContent:"center",alignContent:"center"},children:e.jsx("div",{style:{margin:"auto"},children:e.jsx(s,{})})})]},o={render:s=>{const[n,t]=r.useState(s.visible??!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:()=>t(!0),label:"토스트 열기"}),e.jsx(a,{...s,visible:n,onClose:()=>{t(!1),s.onClose?.()}})]})},args:{message:"작업이 완료되었습니다!",visible:!1,duration:3e3,onClose:()=>{}},parameters:{docs:{source:{code:`
<Toast
  message="작업이 완료되었습니다!"
  visible={showToast}
  onClose={() => setShowToast(false)}
/>`}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [showToast, setShowToast] = useState(args.visible ?? false);
    return <>\r
        <Button onClick={() => setShowToast(true)} label="토스트 열기" />\r
        <Toast {...args} visible={showToast} onClose={() => {
        setShowToast(false);
        args.onClose?.();
      }} />\r
      </>;
  },
  args: {
    message: '작업이 완료되었습니다!',
    visible: false,
    duration: 3000,
    onClose: () => {}
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Toast
  message="작업이 완료되었습니다!"
  visible={showToast}
  onClose={() => setShowToast(false)}
/>\`
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const f=["Default"];export{o as Default,f as __namedExportsOrder,p as default};
