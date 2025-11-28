import{j as a,r}from"./datepicker-Dz1Ef8Gs.js";import{S as s}from"./Selectbox-CmqXNL1u.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";const v={title:"Form/SelectBox",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object"},placeholder:{control:"text"},custom:{control:"boolean"},value:{table:{disable:!0}},onChange:{action:"changed"}},decorators:[e=>a.jsx("div",{style:{display:"flex",position:"relative",minWidth:"100%",minHeight:"30rem",justifyContent:"center",alignContent:"center"},children:a.jsx("div",{style:{margin:"auto"},children:a.jsx(e,{})})})]},n={args:{options:[{label:"옵션 1",value:1},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"}],placeholder:"선택하세요",value:"옵션 1"},render:e=>{const[l,t]=r.useState();return a.jsx(s,{...e,value:l,onChange:t})},parameters:{docs:{source:{code:`<SelectBox
  options={[
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '옵션 3', value: 'option3' },
  ]}
  placeholder="선택하세요"
  value={value}
  onChange={setValue}
/>`}}}},o={args:{options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"}],placeholder:"브라우저 기본 select",custom:!1,value:"option3"},render:e=>{const[l,t]=r.useState();return a.jsx(s,{...e,value:l,onChange:t})},parameters:{docs:{source:{code:`<SelectBox
  options={[
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '옵션 3', value: 'option3' },
  ]}
  placeholder="브라우저 기본 select"
  value={value}
  onChange={setValue}
  custom={false}
/>`}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: '옵션 1',
      value: 1
    }, {
      label: '옵션 2',
      value: 'option2'
    }, {
      label: '옵션 3',
      value: 'option3'
    }],
    placeholder: '선택하세요',
    value: '옵션 1'
  },
  render: args => {
    const [value, setValue] = useState<string | number>();
    return <SelectBox {...args} value={value} onChange={setValue} />;
  },
  parameters: {
    docs: {
      source: {
        code: \`<SelectBox
  options={[
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '옵션 3', value: 'option3' },
  ]}
  placeholder="선택하세요"
  value={value}
  onChange={setValue}
/>\`
      }
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"기본 SelectBox",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: '옵션 1',
      value: 'option1'
    }, {
      label: '옵션 2',
      value: 'option2'
    }, {
      label: '옵션 3',
      value: 'option3'
    }],
    placeholder: '브라우저 기본 select',
    custom: false,
    value: 'option3'
  },
  render: args => {
    const [value, setValue] = useState<string | number>();
    return <SelectBox {...args} value={value} onChange={setValue} />;
  },
  parameters: {
    docs: {
      source: {
        code: \`<SelectBox
  options={[
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
    { label: '옵션 3', value: 'option3' },
  ]}
  placeholder="브라우저 기본 select"
  value={value}
  onChange={setValue}
  custom={false}
/>\`
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"브라우저 기본 select",...o.parameters?.docs?.description}}};const d=["Default","Native"];export{n as Default,o as Native,d as __namedExportsOrder,v as default};
