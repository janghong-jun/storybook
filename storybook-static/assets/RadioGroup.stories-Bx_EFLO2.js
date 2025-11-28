import{j as a,r as d}from"./datepicker-Dz1Ef8Gs.js";import{R as t}from"./RadioGroup-CE5nwBXW.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";const v={title:"Form/RadioGroup",component:t,parameters:{layout:"centered"},tags:["autodocs"]},o=e=>{const[p,u]=d.useState(e.selectedValue||"");return a.jsx(t,{...e,selectedValue:p,onChange:c=>{u(c)}})},r={render:e=>a.jsx(o,{...e}),args:{groupLabel:"좋아하는 과일 선택",options:[{label:"사과",value:"apple"},{label:"바나나",value:"banana"},{label:"체리",value:"cherry",disabled:!0}]}},l={render:e=>a.jsx(o,{...e}),args:{groupLabel:"좋아하는 과일 선택",options:[{label:"사과",value:"apple"},{label:"바나나",value:"banana"},{label:"체리",value:"cherry",disabled:!0}],selectedValue:"apple"}},n={render:e=>a.jsx(o,{...e}),args:{groupLabel:"좋아하는 과일 선택",options:[{label:"사과",value:"apple"},{label:"바나나",value:"banana"},{label:"체리",value:"cherry"}],showLabel:!0}},s={render:e=>a.jsx(o,{...e}),args:{options:[{label:"사과",value:"apple"},{label:"바나나",value:"banana"},{label:"체리",value:"cherry",disabled:!0}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroupWrapper {...args} />,
  args: {
    groupLabel: '좋아하는 과일 선택',
    options: [{
      label: '사과',
      value: 'apple'
    }, {
      label: '바나나',
      value: 'banana'
    }, {
      label: '체리',
      value: 'cherry',
      disabled: true
    }]
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroupWrapper {...args} />,
  args: {
    groupLabel: '좋아하는 과일 선택',
    options: [{
      label: '사과',
      value: 'apple'
    }, {
      label: '바나나',
      value: 'banana'
    }, {
      label: '체리',
      value: 'cherry',
      disabled: true
    }],
    selectedValue: 'apple'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroupWrapper {...args} />,
  args: {
    groupLabel: '좋아하는 과일 선택',
    options: [{
      label: '사과',
      value: 'apple'
    }, {
      label: '바나나',
      value: 'banana'
    }, {
      label: '체리',
      value: 'cherry'
    }],
    showLabel: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroupWrapper {...args} />,
  args: {
    options: [{
      label: '사과',
      value: 'apple'
    }, {
      label: '바나나',
      value: 'banana'
    }, {
      label: '체리',
      value: 'cherry',
      disabled: true
    }]
  }
}`,...s.parameters?.docs?.source}}};const h=["Default","DefaultSelection","ShowLabel","DisabledItem"];export{r as Default,l as DefaultSelection,s as DisabledItem,n as ShowLabel,h as __namedExportsOrder,v as default};
