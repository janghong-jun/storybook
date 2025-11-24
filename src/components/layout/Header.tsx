'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import GNB from './GNB'

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null)

  return (
    <header className="header" ref={headerRef}>
      <h1 className="logo">
        <Link
          href="/"
          aria-label="홈으로 이동"
          onClick={() => {
            // 모바일 메뉴 닫기
            const event = new CustomEvent('closeMobileMenu')
            window.dispatchEvent(event)
          }}
        >
          우리시청
        </Link>
      </h1>
      <GNB containerRef={headerRef} />
    </header>
  )
}
