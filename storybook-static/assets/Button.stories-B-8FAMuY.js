import{B as m}from"./Button-CXK4nf7q.js";import"./datepicker-Dz1Ef8Gs.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,b={title:"UI/Button",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},className:{control:"text"},level:{control:{type:"select"},options:["primary","secondary","tertiary"],table:{type:{summary:"string "}}},size:{control:{type:"select"},options:["x-small","small","medium","large","x-large"],table:{type:{summary:"string "}}},disabled:{control:"boolean"}},args:{onClick:i()}},e={args:{level:"primary",label:"Button"}},r={args:{level:"secondary",label:"Button"}},a={args:{size:"medium",label:"Button",level:"tertiary"}},s={args:{size:"x-small",label:"Button"},name:"X-Small"},o={args:{size:"small",label:"Button"}},t={args:{size:"medium",label:"Button"}},n={args:{size:"large",label:"Button"}},l={args:{size:"large",label:"Button"},name:"X-Large"},c={args:{label:"Button",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'primary',
    label: 'Button'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    level: 'secondary',
    label: 'Button'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    label: 'Button',
    level: 'tertiary'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'x-small',
    label: 'Button'
  },
  name: 'X-Small'
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    label: 'Button'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  },
  name: 'X-Large'
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};const y=["Primary","Secondary","Tertiary","XSmall","Small","Medium","Large","XLarge","Disabled"];export{c as Disabled,n as Large,t as Medium,e as Primary,r as Secondary,o as Small,a as Tertiary,l as XLarge,s as XSmall,y as __namedExportsOrder,b as default};
