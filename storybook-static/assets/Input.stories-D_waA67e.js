import{r as n,j as o}from"./datepicker-Dz1Ef8Gs.js";import{I as u}from"./Input-CKW91mN5.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";const k={title:"Form/Input",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select",options:["text","password","email","number"]},table:{type:{summary:"string"}}},clearable:{control:"boolean"},label:{control:"text"},labelHidden:{control:"boolean"},error:{control:"text"},value:{control:"text",description:"Input 초기값"},placeholder:{control:"text",description:"placeholder 값"},disabled:{control:"boolean",description:"비활성화 여부"},readOnly:{control:"boolean",description:"읽기 전용 여부"},onChange:{action:"changed"}}},c={render:e=>{const[t,l]=n.useState(e.value||""),[r,s]=n.useState(0);return n.useEffect(()=>{l(e.value||""),s(a=>a+1)},[e.value]),o.jsx(u,{...e,value:t,onChange:a=>{l(a.target.value),e.onChange?.(a)}},r)},args:{label:"이름",placeholder:"이름을 입력하세요",clearable:!0,labelHidden:!1,error:"",value:""}},v={render:e=>{const[t,l]=n.useState(e.value||""),[r,s]=n.useState(0);return n.useEffect(()=>{l(e.value||""),s(a=>a+1)},[e.value]),o.jsx(u,{...e,value:t,onChange:a=>{l(a.target.value),e.onChange?.(a)}},r)},args:{label:"이름",placeholder:"이름을 입력하세요",clearable:!0,labelHidden:!1,value:"홍길동"}},d={render:e=>{const[t,l]=n.useState(e.value||""),[r,s]=n.useState(0);return n.useEffect(()=>{l(e.value||""),s(a=>a+1)},[e.value]),o.jsx(u,{...e,value:t,onChange:a=>{l(a.target.value),e.onChange?.(a)}},r)},args:{label:"검색어",placeholder:"검색어 입력",clearable:!0,labelHidden:!0,error:"",value:""}},p={render:e=>{const[t,l]=n.useState(e.value||""),[r,s]=n.useState(0);return n.useEffect(()=>{l(e.value||""),s(a=>a+1)},[e.value]),o.jsx(u,{...e,value:t,onChange:a=>{l(a.target.value),e.onChange?.(a)}},r)},args:{label:"이메일",placeholder:"이메일 입력",clearable:!0,labelHidden:!1,error:"잘못된 이메일 형식입니다.",value:"invalid-email"}},g={render:e=>{const[t,l]=n.useState(e.value||""),[r,s]=n.useState(0);return n.useEffect(()=>{l(e.value||""),s(a=>a+1)},[e.value]),o.jsx(u,{...e,value:t,onChange:a=>{l(a.target.value),e.onChange?.(a)}},r)},args:{type:"password",label:"비밀번호",placeholder:"비밀번호 입력",clearable:!0,labelHidden:!1,value:""}},y={render:e=>{const[t,l]=n.useState(e.value||""),[r,s]=n.useState(0);return n.useEffect(()=>{l(e.value||""),s(a=>a+1)},[e.value]),o.jsx(u,{...e,value:t,onChange:a=>{l(a.target.value),e.onChange?.(a)}},r)},args:{type:"email",label:"이메일",placeholder:"example@email.com",clearable:!0,labelHidden:!1,value:""}},i={render:e=>{const[t,l]=n.useState(e.value||""),[r,s]=n.useState(0);return n.useEffect(()=>{l(e.value||""),s(a=>a+1)},[e.value]),o.jsx(u,{...e,value:t,onChange:a=>{l(a.target.value),e.onChange?.(a)}},r)},args:{type:"number",label:"나이",placeholder:"나이를 입력하세요",clearable:!0,labelHidden:!1,value:""}},b={render:e=>{const[t,l]=n.useState(e.value||""),[r,s]=n.useState(0);return n.useEffect(()=>{l(e.value||""),s(a=>a+1)},[e.value]),o.jsx(u,{...e,value:t,onChange:a=>{l(a.target.value),e.onChange?.(a)}},r)},args:{label:"비활성화",placeholder:"수정할 수 없습니다",clearable:!0,labelHidden:!1,disabled:!0,value:"비활성화된 값"}},m={render:e=>{const[t,l]=n.useState(e.value||""),[r,s]=n.useState(0);return n.useEffect(()=>{l(e.value||""),s(a=>a+1)},[e.value]),o.jsx(u,{...e,value:t,onChange:a=>{l(a.target.value),e.onChange?.(a)}},r)},args:{label:"읽기 전용",placeholder:"읽기만 가능합니다",clearable:!1,labelHidden:!1,readOnly:!0,value:"읽기 전용 값"}},h={render:e=>{const[t,l]=n.useState(e.value||""),[r,s]=n.useState(0);return n.useEffect(()=>{l(e.value||""),s(a=>a+1)},[e.value]),o.jsx(u,{...e,value:t,onChange:a=>{l(a.target.value),e.onChange?.(a)}},r)},args:{label:"클리어 버튼 없음",placeholder:"클리어 버튼이 표시되지 않습니다",clearable:!1,labelHidden:!1,value:""}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value || '');
    const [key, setKey] = useState(0);
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <Input key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '이름',
    placeholder: '이름을 입력하세요',
    clearable: true,
    labelHidden: false,
    error: '',
    value: ''
  }
}`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value || '');
    const [key, setKey] = useState(0);
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <Input key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '이름',
    placeholder: '이름을 입력하세요',
    clearable: true,
    labelHidden: false,
    value: '홍길동'
  }
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value || '');
    const [key, setKey] = useState(0);
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <Input key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '검색어',
    placeholder: '검색어 입력',
    clearable: true,
    labelHidden: true,
    error: '',
    value: ''
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value || '');
    const [key, setKey] = useState(0);
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <Input key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '이메일',
    placeholder: '이메일 입력',
    clearable: true,
    labelHidden: false,
    error: '잘못된 이메일 형식입니다.',
    value: 'invalid-email'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value || '');
    const [key, setKey] = useState(0);
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <Input key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    type: 'password',
    label: '비밀번호',
    placeholder: '비밀번호 입력',
    clearable: true,
    labelHidden: false,
    value: ''
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value || '');
    const [key, setKey] = useState(0);
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <Input key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    type: 'email',
    label: '이메일',
    placeholder: 'example@email.com',
    clearable: true,
    labelHidden: false,
    value: ''
  }
}`,...y.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value || '');
    const [key, setKey] = useState(0);
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <Input key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    type: 'number',
    label: '나이',
    placeholder: '나이를 입력하세요',
    clearable: true,
    labelHidden: false,
    value: ''
  }
}`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value || '');
    const [key, setKey] = useState(0);
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <Input key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '비활성화',
    placeholder: '수정할 수 없습니다',
    clearable: true,
    labelHidden: false,
    disabled: true,
    value: '비활성화된 값'
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value || '');
    const [key, setKey] = useState(0);
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <Input key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '읽기 전용',
    placeholder: '읽기만 가능합니다',
    clearable: false,
    labelHidden: false,
    readOnly: true,
    value: '읽기 전용 값'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value || '');
    const [key, setKey] = useState(0);
    useEffect(() => {
      setValue(args.value || '');
      setKey(prev => prev + 1);
    }, [args.value]);
    return <Input key={key} {...args} value={value} onChange={e => {
      setValue(e.target.value);
      args.onChange?.(e);
    }} />;
  },
  args: {
    label: '클리어 버튼 없음',
    placeholder: '클리어 버튼이 표시되지 않습니다',
    clearable: false,
    labelHidden: false,
    value: ''
  }
}`,...h.parameters?.docs?.source}}};const K=["Default","WithInitialValue","LabelHidden","WithError","Password","Email","Number","Disabled","ReadOnly","NoneClearable"];export{c as Default,b as Disabled,y as Email,d as LabelHidden,h as NoneClearable,i as Number,g as Password,m as ReadOnly,p as WithError,v as WithInitialValue,K as __namedExportsOrder,k as default};
