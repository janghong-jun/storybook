import{j as t}from"./datepicker-Dz1Ef8Gs.js";import{D as r}from"./DateRangePicker-Bxns-PhW.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";const d={title:"Form/DateRangePicker",component:r,parameters:{layout:"centered"},tags:["autodocs"],decorators:[s=>t.jsx("div",{style:{position:"relative",minWidth:"100%",minHeight:"35rem"},children:t.jsx("div",{style:{margin:"auto"},children:t.jsx(s,{})})})],argTypes:{type:{control:{type:"select"},options:["single","range"],table:{type:{summary:"string"},defaultValue:{summary:"single"}}},holidays:{control:!1},label:{control:"text"}}},e={args:{type:"single"}},n={args:{type:"range"}},a={render:()=>t.jsx(r,{type:"range",holidays:[new Date(2025,0,1),new Date(2025,1,10),new Date(2025,4,5),new Date(2025,5,6),new Date(2025,8,27),new Date(2025,11,25)]}),parameters:{docs:{source:{code:`
<DateRangePicker
  type="range"
  holidays={[
    new Date(2025, 0, 1), // 신정
    new Date(2025, 1, 10), // 설날
    new Date(2025, 4, 5), // 어린이날
    new Date(2025, 5, 6), // 현충일
    new Date(2025, 8, 27), // 추석
    new Date(2025, 11, 25), // 크리스마스
  ]}
/>
        `.trim()}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'single'
  }
}`,...e.parameters?.docs?.source},description:{story:"날짜 선택",...e.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'range'
  }
}`,...n.parameters?.docs?.source},description:{story:"기간 범위 선택 (시작일 ~ 종료일)",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <DateRangePicker type="range" holidays={[new Date(2025, 0, 1),
  // 신정
  new Date(2025, 1, 10),
  // 설날
  new Date(2025, 4, 5),
  // 어린이날
  new Date(2025, 5, 6),
  // 현충일
  new Date(2025, 8, 27),
  // 추석
  new Date(2025, 11, 25) // 크리스마스
  ]} />,
  parameters: {
    docs: {
      source: {
        code: \`
<DateRangePicker
  type="range"
  holidays={[
    new Date(2025, 0, 1), // 신정
    new Date(2025, 1, 10), // 설날
    new Date(2025, 4, 5), // 어린이날
    new Date(2025, 5, 6), // 현충일
    new Date(2025, 8, 27), // 추석
    new Date(2025, 11, 25), // 크리스마스
  ]}
/>
        \`.trim()
      }
    }
  }
}`,...a.parameters?.docs?.source},description:{story:"공휴일이 강조된 기간 범위 선택",...a.parameters?.docs?.description}}};const m=["Single","Range","WithHolidays"];export{n as Range,e as Single,a as WithHolidays,m as __namedExportsOrder,d as default};
