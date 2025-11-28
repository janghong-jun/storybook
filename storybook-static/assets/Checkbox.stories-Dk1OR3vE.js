import{j as c}from"./datepicker-Dz1Ef8Gs.js";import{C as t}from"./Checkbox-E_wWkiQ4.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,h={title:"Form/Checkbox",component:t,parameters:{layout:"centered"},tags:["autodocs"]},a={render:e=>{const[,r]=d();return c.jsx(t,{...e,onChange:s=>r({checked:s})})},args:{label:"체크박스",checked:!1,showLabel:!0,disabled:!1}},n={render:e=>{const[,r]=d();return c.jsx(t,{...e,onChange:s=>r({checked:s})})},args:{label:"비활성화 체크박스",checked:!0,showLabel:!0,disabled:!0}},o={render:e=>{const[,r]=d();return c.jsx(t,{...e,onChange:s=>r({checked:s})})},args:{checked:!1,showLabel:!1,disabled:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs<CheckboxProps>();
    return <Checkbox {...args} onChange={checked => updateArgs({
      checked
    })} />;
  },
  args: {
    label: '체크박스',
    checked: false,
    showLabel: true,
    disabled: false
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs<CheckboxProps>();
    return <Checkbox {...args} onChange={checked => updateArgs({
      checked
    })} />;
  },
  args: {
    label: '비활성화 체크박스',
    checked: true,
    showLabel: true,
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [, updateArgs] = useArgs<CheckboxProps>();
    return <Checkbox {...args} onChange={checked => updateArgs({
      checked
    })} />;
  },
  args: {
    checked: false,
    showLabel: false,
    disabled: false
  }
}`,...o.parameters?.docs?.source}}};const b=["Default","Disabled","NoLabel"];export{a as Default,n as Disabled,o as NoLabel,b as __namedExportsOrder,h as default};
