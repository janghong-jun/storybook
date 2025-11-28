import{j as o}from"./datepicker-Dz1Ef8Gs.js";import{S as a}from"./Switch-DMSloCs8.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";const{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,i={title:"Form/Switch",component:a,parameters:{layout:"centered"},tags:["autodocs"]},n={render:e=>{const[,r]=u();return o.jsx(a,{...e,onChange:s=>r({checked:s})})},args:{label:"토글 스위치",checked:!1,disabled:!1}},c={render:e=>{const[,r]=u();return o.jsx(a,{...e,onChange:s=>r({checked:s})})},args:{label:"체크된 스위치",checked:!0,disabled:!1}},t={render:e=>{const[,r]=u();return o.jsx(a,{...e,onChange:s=>r({checked:s})})},args:{label:"비활성화 스위치",checked:!1,disabled:!0}},d={render:e=>{const[,r]=u();return o.jsx(a,{...e,onChange:s=>r({checked:s})})},args:{checked:!1,disabled:!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs<SwitchProps>();
    return <Switch {...args} onChange={checked => updateArgs({
      checked
    })} />;
  },
  args: {
    label: '토글 스위치',
    checked: false,
    disabled: false
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs<SwitchProps>();
    return <Switch {...args} onChange={checked => updateArgs({
      checked
    })} />;
  },
  args: {
    label: '체크된 스위치',
    checked: true,
    disabled: false
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs<SwitchProps>();
    return <Switch {...args} onChange={checked => updateArgs({
      checked
    })} />;
  },
  args: {
    label: '비활성화 스위치',
    checked: false,
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs<SwitchProps>();
    return <Switch {...args} onChange={checked => updateArgs({
      checked
    })} />;
  },
  args: {
    checked: false,
    disabled: false
  }
}`,...d.parameters?.docs?.source}}};const m=["Default","Checked","Disabled","NoLabel"];export{c as Checked,n as Default,t as Disabled,d as NoLabel,m as __namedExportsOrder,i as default};
