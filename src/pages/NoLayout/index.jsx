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

NoLayoutPage.pageTitle = 'none Layout'
NoLayoutPage.getLayout = (page) => page
