import{T as s}from"./Table-D-zznb_h.js";import"./datepicker-Dz1Ef8Gs.js";import"./react-Cl_xvQ9m.js";import"./vendors-kYdpP6Vl.js";const S={title:"UI/Table",component:s,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{type:{control:{type:"select"},options:["horizontal","vertical"],table:{type:{summary:"string "}}},className:{},headData:{control:{type:"object"}},bodyData:{control:{type:"object"}},colWidths:{control:{type:"object"}}}},i=[[{content:"김철수"},{content:"25"},{content:"개발자"},{content:"서울"}],[{content:"이영희"},{content:"30"},{content:"디자이너"},{content:"부산"}],[{content:"박민수"},{content:"28"},{content:"마케터"},{content:"대구"}]],d=[[{content:"이름",isHeader:!0},{content:"나이",isHeader:!0},{content:"직업",isHeader:!0},{content:"지역",isHeader:!0}]],l=[[{content:"이름"},{content:"김철수"}],[{content:"나이"},{content:"25세"}],[{content:"직업"},{content:"프론트엔드 개발자"}],[{content:"경력"},{content:"3년"}],[{content:"기술스택"},{content:"React, TypeScript, Next.js"}]],t={args:{headData:d,bodyData:i,colWidths:["15%","30%","25%","30%"]}},e={args:{type:"vertical",bodyData:l,colWidths:[]}},a={args:{headData:[[{content:"ID",isHeader:!0},{content:"이름",isHeader:!0},{content:"이메일",isHeader:!0},{content:"부서",isHeader:!0},{content:"직급",isHeader:!0},{content:"입사일",isHeader:!0}]],bodyData:Array.from({length:10},(u,n)=>[{content:`EMP${String(n+1).padStart(3,"0")}`},{content:`직원 ${n+1}`},{content:`employee${n+1}@company.com`},{content:["개발팀","디자인팀","마케팅팀","영업팀"][n%4]},{content:["사원","대리","과장","차장","부장"][n%5]},{content:`202${Math.floor(n/5)}-01-${String(n%30+1).padStart(2,"0")}`}]),colWidths:[]}},o={args:{headData:[[{content:"왼쪽 정렬",isHeader:!0},{content:"가운데 정렬",isHeader:!0},{content:"오른쪽 정렬",isHeader:!0},{content:"기본(가운데)",isHeader:!0}]],bodyData:[[{content:"왼쪽으로 정렬된 텍스트입니다",className:"align-left"},{content:"가운데 정렬 텍스트",className:"align-center"},{content:"₩1,200,000",className:"align-right"},{content:"기본 가운데 정렬"}],[{content:"긴 텍스트는 왼쪽 정렬이 보기 좋습니다",className:"align-left"},{content:"중앙",className:"align-center"},{content:"999,999원",className:"align-right"},{content:"Default"}],[{content:"짧은 텍스트",className:"align-left"},{content:"가운데",className:"align-center"},{content:"우측 정렬",className:"align-right"},{content:"중앙"}]],colWidths:[]}},c={args:{type:"horizontal",headData:[[{content:"카테고리",isHeader:!0},{content:"제품명",isHeader:!0},{content:"가격",isHeader:!0},{content:"수량",isHeader:!0}]],colWidths:["15%","30%","25%","30%"],bodyData:[[{content:"스마트폰",isHeader:!0,rowSpan:2},{content:"갤럭시 S24"},{content:"₩1,200,000"},{content:"50개"}],[{content:"iPhone 15"},{content:"₩1,500,000"},{content:"30개"}],[{content:"노트북",isHeader:!0,rowSpan:2},{content:"MacBook Air"},{content:"₩1,800,000"},{content:"20개"}],[{content:"Surface Pro"},{content:"₩2,000,000"},{content:"15개"}],[{content:"합계",isHeader:!0,colSpan:2},{content:"₩5,300,000",isHeader:!0},{content:"115개",isHeader:!0}]]}},r={args:{headData:[[{content:"시간",isHeader:!0,rowSpan:2},{content:"월요일",isHeader:!0,colSpan:2},{content:"화요일",isHeader:!0,colSpan:2},{content:"수요일",isHeader:!0,colSpan:2}],[{content:"이론",isHeader:!0},{content:"실습",isHeader:!0},{content:"이론",isHeader:!0},{content:"실습",isHeader:!0},{content:"이론",isHeader:!0},{content:"실습",isHeader:!0}]],bodyData:[[{content:"09:00-10:30",isHeader:!0},{content:"프론트엔드 기초"},{content:"HTML/CSS 실습"},{content:"자바스크립트"},{content:"DOM 조작 실습"},{content:"React 기초"},{content:"컴포넌트 실습"}],[{content:"10:45-12:15",isHeader:!0},{content:"반응형 디자인",colSpan:2},{content:"Node.js"},{content:"API 개발 실습"},{content:"데이터베이스",colSpan:2}],[{content:"13:00-14:30",isHeader:!0},{content:"TypeScript"},{content:"타입 정의 실습"},{content:"Git/GitHub",colSpan:2},{content:"프로젝트 기획",colSpan:2}]],colWidths:[]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    headData: horizontalHeadData,
    bodyData: horizontalBodyData,
    colWidths: ['15%', '30%', '25%', '30%']
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'vertical',
    bodyData: verticalData,
    colWidths: []
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    headData: [[{
      content: 'ID',
      isHeader: true
    }, {
      content: '이름',
      isHeader: true
    }, {
      content: '이메일',
      isHeader: true
    }, {
      content: '부서',
      isHeader: true
    }, {
      content: '직급',
      isHeader: true
    }, {
      content: '입사일',
      isHeader: true
    }]],
    bodyData: Array.from({
      length: 10
    }, (_, i) => [{
      content: \`EMP\${String(i + 1).padStart(3, '0')}\`
    }, {
      content: \`직원 \${i + 1}\`
    }, {
      content: \`employee\${i + 1}@company.com\`
    }, {
      content: ['개발팀', '디자인팀', '마케팅팀', '영업팀'][i % 4]
    }, {
      content: ['사원', '대리', '과장', '차장', '부장'][i % 5]
    }, {
      content: \`202\${Math.floor(i / 5)}-01-\${String(i % 30 + 1).padStart(2, '0')}\`
    }]),
    colWidths: []
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    headData: [[{
      content: '왼쪽 정렬',
      isHeader: true
    }, {
      content: '가운데 정렬',
      isHeader: true
    }, {
      content: '오른쪽 정렬',
      isHeader: true
    }, {
      content: '기본(가운데)',
      isHeader: true
    }]],
    bodyData: [[{
      content: '왼쪽으로 정렬된 텍스트입니다',
      className: 'align-left'
    }, {
      content: '가운데 정렬 텍스트',
      className: 'align-center'
    }, {
      content: '₩1,200,000',
      className: 'align-right'
    }, {
      content: '기본 가운데 정렬'
    }], [{
      content: '긴 텍스트는 왼쪽 정렬이 보기 좋습니다',
      className: 'align-left'
    }, {
      content: '중앙',
      className: 'align-center'
    }, {
      content: '999,999원',
      className: 'align-right'
    }, {
      content: 'Default'
    }], [{
      content: '짧은 텍스트',
      className: 'align-left'
    }, {
      content: '가운데',
      className: 'align-center'
    }, {
      content: '우측 정렬',
      className: 'align-right'
    }, {
      content: '중앙'
    }]],
    colWidths: []
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'horizontal',
    headData: [[{
      content: '카테고리',
      isHeader: true
    }, {
      content: '제품명',
      isHeader: true
    }, {
      content: '가격',
      isHeader: true
    }, {
      content: '수량',
      isHeader: true
    }]],
    colWidths: ['15%', '30%', '25%', '30%'],
    bodyData: [[{
      content: '스마트폰',
      isHeader: true,
      rowSpan: 2
    }, {
      content: '갤럭시 S24'
    }, {
      content: '₩1,200,000'
    }, {
      content: '50개'
    }], [{
      content: 'iPhone 15'
    }, {
      content: '₩1,500,000'
    }, {
      content: '30개'
    }], [{
      content: '노트북',
      isHeader: true,
      rowSpan: 2
    }, {
      content: 'MacBook Air'
    }, {
      content: '₩1,800,000'
    }, {
      content: '20개'
    }], [{
      content: 'Surface Pro'
    }, {
      content: '₩2,000,000'
    }, {
      content: '15개'
    }], [{
      content: '합계',
      isHeader: true,
      colSpan: 2
    }, {
      content: '₩5,300,000',
      isHeader: true
    }, {
      content: '115개',
      isHeader: true
    }]]
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    headData: [[{
      content: '시간',
      isHeader: true,
      rowSpan: 2
    }, {
      content: '월요일',
      isHeader: true,
      colSpan: 2
    }, {
      content: '화요일',
      isHeader: true,
      colSpan: 2
    }, {
      content: '수요일',
      isHeader: true,
      colSpan: 2
    }], [{
      content: '이론',
      isHeader: true
    }, {
      content: '실습',
      isHeader: true
    }, {
      content: '이론',
      isHeader: true
    }, {
      content: '실습',
      isHeader: true
    }, {
      content: '이론',
      isHeader: true
    }, {
      content: '실습',
      isHeader: true
    }]],
    bodyData: [[{
      content: '09:00-10:30',
      isHeader: true
    }, {
      content: '프론트엔드 기초'
    }, {
      content: 'HTML/CSS 실습'
    }, {
      content: '자바스크립트'
    }, {
      content: 'DOM 조작 실습'
    }, {
      content: 'React 기초'
    }, {
      content: '컴포넌트 실습'
    }], [{
      content: '10:45-12:15',
      isHeader: true
    }, {
      content: '반응형 디자인',
      colSpan: 2
    }, {
      content: 'Node.js'
    }, {
      content: 'API 개발 실습'
    }, {
      content: '데이터베이스',
      colSpan: 2
    }], [{
      content: '13:00-14:30',
      isHeader: true
    }, {
      content: 'TypeScript'
    }, {
      content: '타입 정의 실습'
    }, {
      content: 'Git/GitHub',
      colSpan: 2
    }, {
      content: '프로젝트 기획',
      colSpan: 2
    }]],
    colWidths: []
  }
}`,...r.parameters?.docs?.source}}};const h=["Horizontal","Vertical","LargeData","TextAlignment","TableWithCellMerging","MultiRowHeader"];export{t as Horizontal,a as LargeData,r as MultiRowHeader,c as TableWithCellMerging,o as TextAlignment,e as Vertical,h as __namedExportsOrder,S as default};
