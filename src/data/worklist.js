// src/data/worklist.js
const worklist = [
  {
    id: 'PG001',
    name: '메인페이지',
    url: '/',
    type: '마크업',
    worker: '홍길동',
    start: '2025-06-17',
    due: '2025-06-18',
    end: '',
    status: 'progress',
    note: ['', ''],
  },
  {
    id: 'PG002',
    name: '로그인',
    url: '/login',
    type: '마크업',
    worker: '홍길동',
    start: '2025-06-18',
    due: '2025-06-18',
    end: '',
    status: 'waiting',
    note: ['', ''],
  },
  {
    id: 'PG003',
    name: '회원가입',
    url: '/signup',
    type: '마크업',
    worker: '김미나',
    start: '2025-06-19',
    due: '2025-06-20',
    end: '',
    status: 'done',
    note: ['', ''],
  },
]

export default worklist
