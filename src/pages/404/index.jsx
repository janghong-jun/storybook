import { useViewport } from '@/contexts/viewPortContext'
import Head from 'next/head'
import Link from 'next/link'

const NoLayoutPage = () => {
  const { viewport } = useViewport()
  return (
    <>
      <Head>
        <title>404 - 페이지를 찾을 수 없습니다</title>
      </Head>
      <div
        className={`wrap ${
          viewport === 'mobile'
            ? 'mobile'
            : viewport === 'tablet'
            ? 'tablet'
            : 'desktop'
        }`}
      >
        <main id="main" role="main">
          <div>
            404 - 페이지를 찾을 수 없습니다.
            <br />
            <Link href="/">홈으로 돌아가기</Link>
          </div>
        </main>
      </div>
    </>
  )
}

NoLayoutPage.getLayout = (page) => page

export default NoLayoutPage
