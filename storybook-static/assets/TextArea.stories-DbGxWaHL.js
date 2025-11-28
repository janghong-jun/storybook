import{r as n,j as u}from"./datepicker-Dz1Ef8Gs.js";import{T as o}from"./TextArea-3aKn7_Np.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";const C={title:"Form/TextArea",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text"},labelHidden:{control:"boolean"},value:{control:{type:"select"},options:["empty","short","long","multiline"],mapping:{empty:"",short:"초기값이 있는 TextArea입니다.",long:"여러 줄에 걸친 긴 텍스트를 입력할 수 있습니다. 이것은 더 긴 내용의 예시입니다.",multiline:`여러 줄에 걸친
긴 텍스트를
입력할 수 있습니다.

줄바꿈도 가능합니다.`},description:"TextArea 초기값"},placeholder:{control:"text"},maxLength:{control:"number"},showCounter:{control:"boolean"},clearable:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},error:{control:"text"},onChange:{action:"changed"}}},c={render:e=>{const[s,t]=n.useState(e.value||""),[r,l]=n.useState(0);return n.useEffect(()=>{t(e.value||""),l(a=>a+1)},[e.value]),u.jsx(o,{...e,value:s,onChange:a=>{t(a.target.value),e.onChange?.(a)}},r)},args:{label:"내용 입력",placeholder:"내용을 입력하세요",maxLength:200,clearable:!0,labelHidden:!1,showCounter:!0,error:"",value:"empty"}},h={render:e=>{const[s,t]=n.useState(e.value||""),[r,l]=n.useState(0);return n.useEffect(()=>{t(e.value||""),l(a=>a+1)},[e.value]),u.jsx(o,{...e,value:s,onChange:a=>{t(a.target.value),e.onChange?.(a)}},r)},args:{label:"내용 입력",placeholder:"내용을 입력하세요",maxLength:200,clearable:!0,showCounter:!0,value:"short"}},v={render:e=>{const[s,t]=n.useState(e.value||""),[r,l]=n.useState(0);return n.useEffect(()=>{t(e.value||""),l(a=>a+1)},[e.value]),u.jsx(o,{...e,value:s,onChange:a=>{t(a.target.value),e.onChange?.(a)}},r)},args:{label:"내용 입력",placeholder:"내용 입력 필요",maxLength:200,showCounter:!0,error:"필수 입력 항목입니다.",value:"empty"}},i={render:e=>{const[s,t]=n.useState(e.value||""),[r,l]=n.useState(0);return n.useEffect(()=>{t(e.value||""),l(a=>a+1)},[e.value]),u.jsx(o,{...e,value:s,onChange:a=>{t(a.target.value),e.onChange?.(a)}},r)},args:{label:"읽기 전용",placeholder:"읽기 전용",readOnly:!0,maxLength:200,showCounter:!0,clearable:!1,value:"short"}},g={render:e=>{const[s,t]=n.useState(e.value||""),[r,l]=n.useState(0);return n.useEffect(()=>{t(e.value||""),l(a=>a+1)},[e.value]),u.jsx(o,{...e,value:s,onChange:a=>{t(a.target.value),e.onChange?.(a)}},r)},args:{label:"비활성화",placeholder:"비활성화",disabled:!0,maxLength:200,showCounter:!0,value:"short"}},d={render:e=>{const[s,t]=n.useState(e.value||""),[r,l]=n.useState(0);return n.useEffect(()=>{t(e.value||""),l(a=>a+1)},[e.value]),u.jsx(o,{...e,value:s,onChange:a=>{t(a.target.value),e.onChange?.(a)}},r)},args:{label:"검색어",placeholder:"검색어 입력",labelHidden:!0,maxLength:200,showCounter:!0,value:"empty"}},p={render:e=>{const[s,t]=n.useState(e.value||""),[r,l]=n.useState(0);return n.useEffect(()=>{t(e.value||""),l(a=>a+1)},[e.value]),u.jsx(o,{...e,value:s,onChange:a=>{t(a.target.value),e.onChange?.(a)}},r)},args:{label:"메모",placeholder:"메모를 입력하세요",clearable:!1,maxLength:200,showCounter:!0,value:"empty"}},k={render:e=>{const[s,t]=n.useState(e.value||""),[r,l]=n.useState(0);return n.useEffect(()=>{t(e.value||""),l(a=>a+1)},[e.value]),u.jsx(o,{...e,value:s,onChange:a=>{t(a.target.value),e.onChange?.(a)}},r)},args:{label:"긴 텍스트",placeholder:"긴 내용을 입력하세요",maxLength:500,showCounter:!0,rows:10,value:"multiline"}},m={render:e=>{const[s,t]=n.useState(e.value||""),[r,l]=n.useState(0);return n.useEffect(()=>{t(e.value||""),l(a=>a+1)},[e.value]),u.jsx(o,{...e,value:s,onChange:a=>{t(a.target.value),e.onChange?.(a)}},r)},args:{label:"카운터 없음",placeholder:"글자 수 카운터가 표시되지 않습니다",maxLength:200,showCounter:!1,value:"empty"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value || '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [key, setKey] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <TextArea key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '내용 입력',
    placeholder: '내용을 입력하세요',
    maxLength: 200,
    clearable: true,
    labelHidden: false,
    showCounter: true,
    error: '',
    value: 'empty'
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value || '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [key, setKey] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <TextArea key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '내용 입력',
    placeholder: '내용을 입력하세요',
    maxLength: 200,
    clearable: true,
    showCounter: true,
    value: 'short'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value || '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [key, setKey] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <TextArea key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '내용 입력',
    placeholder: '내용 입력 필요',
    maxLength: 200,
    showCounter: true,
    error: '필수 입력 항목입니다.',
    value: 'empty'
  }
}`,...v.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value || '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [key, setKey] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <TextArea key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '읽기 전용',
    placeholder: '읽기 전용',
    readOnly: true,
    maxLength: 200,
    showCounter: true,
    clearable: false,
    value: 'short'
  }
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value || '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [key, setKey] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <TextArea key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '비활성화',
    placeholder: '비활성화',
    disabled: true,
    maxLength: 200,
    showCounter: true,
    value: 'short'
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value || '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [key, setKey] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <TextArea key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '검색어',
    placeholder: '검색어 입력',
    labelHidden: true,
    maxLength: 200,
    showCounter: true,
    value: 'empty'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value || '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [key, setKey] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <TextArea key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '메모',
    placeholder: '메모를 입력하세요',
    clearable: false,
    maxLength: 200,
    showCounter: true,
    value: 'empty'
  }
}`,...p.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value || '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [key, setKey] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <TextArea key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '긴 텍스트',
    placeholder: '긴 내용을 입력하세요',
    maxLength: 500,
    showCounter: true,
    rows: 10,
    value: 'multiline'
  }
}`,...k.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(args.value || '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [key, setKey] = useState(0);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <TextArea key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '카운터 없음',
    placeholder: '글자 수 카운터가 표시되지 않습니다',
    maxLength: 200,
    showCounter: false,
    value: 'empty'
  }
}`,...m.parameters?.docs?.source}}};const S=["Default","WithInitialValue","ErrorState","ReadOnly","Disabled","LabelHidden","NoneClearable","LongText","NoCounter"];export{c as Default,g as Disabled,v as ErrorState,d as LabelHidden,k as LongText,m as NoCounter,p as NoneClearable,i as ReadOnly,h as WithInitialValue,S as __namedExportsOrder,C as default};
