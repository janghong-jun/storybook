import React from 'react'
import Head from 'next/head'
import { useViewport } from '@/contexts/viewPortContext'

export default function NoLayoutPage() {
  const { viewport } = useViewport()

  return (
    <>
      <Head>
        <title>{NoLayoutPage.pageTitle}</title>
      </Head>
      <div className={`wrap ${viewport ?? ''}`}>
        <main id="main" role="main">
          d
        </main>
      </div>
    </>
  )
}

// 페이지 제목
NoLayoutPage.pageTitle = 'none Layout'

// 레이아웃 없이 그대로 렌더링
NoLayoutPage.getLayout = (page) => page
