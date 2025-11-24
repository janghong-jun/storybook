import {
  Button,
  Accordion,
  Tooltip,
  Modal,
  SystemAlert,
  Toast,
  Breadcrumb,
  Pagination,
  Checkbox,
  Switch,
  RadioGroup,
  TextArea,
  SelectBox,
} from '@/components/UI'
import { useState } from 'react'

export default function DemoPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const [page, setPage] = useState(5)
  const items = [
    { title: '첫 번째 항목', content: <p>첫 번째 내용입니다.</p> },
    { title: '두 번째 항목', content: <p>두 번째 내용입니다.</p> },
  ]
  const [checked, setChecked] = useState(false)
  const [selected, setSelected] = useState()
  const [value, setValue] = useState()
  const [text, setText] = useState('')
  return (
    <div>
      <h1>UI 컴포넌트 테스트</h1>
      <Button
        label="주요 버튼"
        level="primary"
        onClick={() => alert('클릭!')}
      />
      <Accordion items={items} defaultOpenIndex={1} allowMultipleOpen={true} />
      <Tooltip
        label="도움말"
        content={`
          <div>
            <strong>TIP:</strong> 여기에 <em>HTML 태그</em>도 들어갈 수 있어요!
            <br />
            <a href="#">자세히 보기</a>
          </div>
          `}
      />
      <br />
      <Button label="모달 열기" onClick={() => setIsOpen(true)} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        label="프로필 설정"
      >
        <form>
          <label>
            이름:
            <input type="text" placeholder="홍길동" />
          </label>
          <br />
          <label>
            이메일:
            <input type="email" placeholder="example@email.com" />
          </label>
          <br />
          <button type="submit">저장</button>
        </form>
      </Modal>
      <Button label="알럿 열기" onClick={() => setAlertOpen(true)} />
      <SystemAlert
        visible={alertOpen}
        message="저장되었습니다."
        onClose={() => setAlertOpen(false)}
      />
      <Button label="컨펌 열기" onClick={() => setConfirmOpen(true)} />
      <SystemAlert
        visible={confirmOpen}
        message="이 동작은 되돌릴 수 없습니다."
        title={'false'}
        hasConfirm={true}
        hasCancel={true}
        confirmLabel="삭제"
        cancelLabel="취소"
        onConfirm={() => {
          console.log('삭제 실행')
          setConfirmOpen(false)
        }}
        onCancel={() => {
          console.log('사용자 취소')
          setConfirmOpen(false)
        }}
      />
      <Button label="토스트 열기" onClick={() => setShowToast(true)} />
      <Toast
        message="작업이 완료되었습니다!"
        visible={showToast}
        onClose={() => setShowToast(false)}
      />
      <Breadcrumb
        items={[
          { label: 'UI 컴포넌트', href: '/ui' },
          { label: '테스트', href: '/ui/test' },
        ]}
      />
      <Pagination
        total={200} // 총 데이터 개수
        perPage={10} // 한 페이지당 데이터 개수
        currentPage={page}
        onPageChange={setPage}
      />
      <Checkbox label="스위치" checked={checked} onChange={setChecked} />
      <Checkbox
        label="체크박스3"
        onChange={() => {
          console.log('체크박스3')
        }}
      />
      <Checkbox
        label="체크박스3"
        onChange={() => {
          console.log('체크박스3')
        }}
        checked={true}
      />
      <Switch label="스위치" checked={checked} onChange={setChecked} />
      <RadioGroup
        options={[
          { label: '옵션1', value: 'option1' },
          { label: '옵션2', value: 'option2' },
        ]}
        selectedValue={selected}
        onChange={setSelected}
      />
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="내용"
        maxLength={500}
        showCounter
      />
      <SelectBox
        options={[
          { label: '옵션 1', value: 'option1' },
          { label: '옵션 2', value: 'option2' },
          { label: '옵션 3', value: 'option3' },
        ]}
        placeholder="선택하세요"
        value={value}
        onChange={setValue}
      />
      <h4>기본 셀렉트</h4>
      <SelectBox
        options={[
          { label: '옵션 1', value: 'option1' },
          { label: '옵션 2', value: 'option2' },
          { label: '옵션 3', value: 'option3' },
        ]}
        placeholder="선택하세요"
        value={value}
        onChange={setValue}
        custom={false}
      />
    </div>
  )
}

DemoPage.pageTitle = '소개'
