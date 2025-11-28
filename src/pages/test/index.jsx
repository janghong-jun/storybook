/* eslint-disable react-hooks/rules-of-hooks */
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
  DateRangePicker,
  Table,
} from '@/components/UI'
import { useState } from 'react'
import { useViewport } from '@/contexts/viewPortContext'
import styles from '@/styles/pages.module.scss' // 추가: 페이지 스타일 import

export default function DemoPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const [page, setPage] = useState(1)
  const items = [
    { title: '첫 번째 항목', content: <p>첫 번째 내용입니다.</p> },
    { title: '두 번째 항목', content: <p>두 번째 내용입니다.</p> },
  ]
  const [checked, setChecked] = useState(false)
  const [selected, setSelected] = useState()
  const [value, setValue] = useState()
  const [text, setText] = useState('')

  return (
    <div className={styles.demoPage}>
      {' '}
      {/* 스타일 클래스 적용 */}
      <h1>UI 컴포넌트 테스트</h1>
      <section className={styles.sectionRow}>
        <Button
          label="primary 버튼"
          level="primary"
          onClick={() => alert('클릭!')}
        />
        <Button label="secondary" level="secondary" />
        <Button label="tertiary" level="tertiary" />
      </section>
      <section className={styles.section}>
        <Accordion
          items={items}
          defaultOpenIndex={1}
          allowMultipleOpen={true}
        />
      </section>
      <section className={styles.section}>
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
      </section>
      <section className={styles.section}>
        <Button label="모달 열기" onClick={() => setIsOpen(true)} />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          label="프로필 설정"
        >
          <form className={styles.modalForm}>
            <label>
              이름:
              <input type="text" placeholder="홍길동" />
            </label>
            <label>
              이메일:
              <input type="email" placeholder="example@email.com" />
            </label>
            <button type="submit">저장</button>
          </form>
        </Modal>
      </section>
      <section className={styles.section}>
        <Button label="알럿 열기" onClick={() => setAlertOpen(true)} />
        <SystemAlert
          visible={alertOpen}
          message="저장되었습니다."
          onClose={() => setAlertOpen(false)}
        />
      </section>
      <section className={styles.section}>
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
      </section>
      <section className={styles.section}>
        <Button label="토스트 열기" onClick={() => setShowToast(true)} />
        <Toast
          message="작업이 완료되었습니다!"
          visible={showToast}
          onClose={() => setShowToast(false)}
        />
      </section>
      <section className={styles.section}>
        <Breadcrumb
          items={[
            { label: 'UI 컴포넌트', href: '/ui' },
            { label: '테스트', href: '/ui/test' },
          ]}
        />
      </section>
      <section className={styles.section}>
        {(() => {
          const { viewport } = useViewport()
          if (viewport === 'mobile') {
            return (
              <>
                <Pagination
                  total={1000}
                  perPage={20}
                  currentPage={page}
                  onPageChange={setPage}
                  showCount={1}
                />
              </>
            )
          } else {
            return (
              <>
                <Pagination
                  total={1000}
                  perPage={10}
                  currentPage={page}
                  onPageChange={setPage}
                  showCount={3}
                />
              </>
            )
          }
        })()}
      </section>
      <section className={styles.sectionRow}>
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
      </section>
      <section className={styles.section}>
        <RadioGroup
          options={[
            { label: '옵션1', value: 'option1' },
            { label: '옵션2', value: 'option2' },
          ]}
          selectedValue={selected}
          onChange={setSelected}
        />
      </section>
      <section className={styles.section}>
        <TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="내용"
          maxLength={500}
          showCounter
        />
      </section>
      <section className={styles.section}>
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
      </section>
      <section className={styles.section}>
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
      </section>
      <section className={styles.section}>
        <h4>캘린더 컴포넌트</h4>
        <DateRangePicker
          holidays={[
            new Date(2025, 1, 1), // 신정 (1월 1일)
            new Date(2025, 3, 1), // 삼일절 (3월 1일)
            new Date(2025, 5, 5), // 어린이날 (5월 5일)
            new Date(2025, 6, 6), // 현충일 (6월 6일)
            new Date(2025, 8, 15), // 광복절 (8월 15일)
            new Date(2025, 10, 3), // 개천절 (10월 3일)
            new Date(2025, 10, 9), // 한글날 (10월 9일)
            new Date(2025, 12, 25), // 크리스마스 (12월 25일)
          ]}
        />
        <DateRangePicker
          type="range"
          holidays={[
            new Date(2025, 1, 1), // 신정 (1월 1일)
            new Date(2025, 3, 1), // 삼일절 (3월 1일)
            new Date(2025, 5, 5), // 어린이날 (5월 5일)
            new Date(2025, 6, 6), // 현충일 (6월 6일)
            new Date(2025, 8, 15), // 광복절 (8월 15일)
            new Date(2025, 10, 3), // 개천절 (10월 3일)
            new Date(2025, 10, 9), // 한글날 (10월 9일)
            new Date(2025, 12, 25), // 크리스마스 (12월 25일)
          ]}
        />
      </section>
      {/* 테이블 컴포넌트 테스트 */}
      <section className={styles.section}>
        <h3>테이블 컴포넌트</h3>

        <h4>가로형 테이블</h4>
        <Table
          type="horizontal"
          headData={[
            [
              { content: '이름', isHeader: true },
              { content: '나이', isHeader: true },
              { content: '직업', isHeader: true },
              { content: '지역', isHeader: true },
            ],
          ]}
          bodyData={[
            [
              { content: '김철수' },
              { content: '25' },
              { content: '개발자' },
              { content: '서울' },
            ],
            [
              { content: '이영희' },
              { content: '30' },
              { content: '디자이너' },
              { content: '부산' },
            ],
            [
              { content: '박민수' },
              { content: '28' },
              { content: '마케터' },
              { content: '대구' },
            ],
          ]}
        />

        <h4>세로형 테이블</h4>
        <Table
          type="vertical"
          bodyData={[
            [{ content: '이름' }, { content: '김철수' }],
            [{ content: '나이' }, { content: '25세' }],
            [{ content: '직업' }, { content: '프론트엔드 개발자' }],
            [{ content: '경력' }, { content: '3년' }],
          ]}
        />

        <h4>텍스트 정렬 예시</h4>
        <Table
          type="horizontal"
          headData={[
            [
              { content: '왼쪽 정렬', isHeader: true },
              { content: '가운데 정렬', isHeader: true },
              { content: '오른쪽 정렬', isHeader: true },
              { content: '기본', isHeader: true },
            ],
          ]}
          bodyData={[
            [
              {
                content: '왼쪽으로 정렬된 긴 텍스트입니다',
                className: 'align-left',
              },
              { content: '가운데 정렬', className: 'align-center' },
              { content: '₩999,999', className: 'align-right' },
              { content: '기본 가운데' },
            ],
            [
              { content: '짧은 텍스트', className: 'align-left' },
              { content: '중앙', className: 'align-center' },
              { content: '우측', className: 'align-right' },
              { content: 'Default' },
            ],
          ]}
        />

        <h4>셀 병합이 포함된 테이블</h4>
        <Table
          type="horizontal"
          headData={[
            [
              { content: '카테고리', isHeader: true },
              { content: '제품명', isHeader: true },
              { content: '가격', isHeader: true },
              { content: '수량', isHeader: true },
            ],
          ]}
          colWidths={['15%', '30%', '25%', '30%']}
          bodyData={[
            [
              { content: '스마트폰', isHeader: true, rowSpan: 2 },
              { content: '갤럭시 S24' },
              { content: '₩1,200,000' },
              { content: '50개' },
            ],
            [
              { content: 'iPhone 15' },
              { content: '₩1,500,000' },
              { content: '30개' },
            ],
            [
              { content: '노트북', isHeader: true, rowSpan: 2 },
              { content: 'MacBook Air' },
              { content: '₩1,800,000' },
              { content: '20개' },
            ],
            [
              { content: 'Surface Pro' },
              { content: '₩2,000,000' },
              { content: '15개' },
            ],
            [
              { content: '합계', isHeader: true },
              {
                content: '₩5,300,000',
                isHeader: true,
                colSpan: 2,
                className: 'align-right',
              },
              { content: '115개', isHeader: true },
            ],
          ]}
        />

        <h4>다중 행 헤더 테이블</h4>
        <Table
          type="horizontal"
          headData={[
            [
              { content: '시간', isHeader: true, rowSpan: 2 },
              { content: '월요일', isHeader: true, colSpan: 2 },
              { content: '화요일', isHeader: true, colSpan: 2 },
            ],
            [
              { content: '이론', isHeader: true },
              { content: '실습', isHeader: true },
              { content: '이론', isHeader: true },
              { content: '실습', isHeader: true },
            ],
          ]}
          bodyData={[
            [
              { content: '09:00-10:30', isHeader: true },
              { content: '프론트엔드 기초' },
              { content: 'HTML/CSS 실습' },
              { content: '자바스크립트' },
              { content: 'DOM 조작 실습' },
            ],
            [
              { content: '10:45-12:15', isHeader: true },
              { content: '반응형 디자인', colSpan: 2 },
              { content: 'Node.js' },
              { content: 'API 개발 실습' },
            ],
          ]}
        />
      </section>
    </div>
  )
}

DemoPage.pageTitle = '소개'
