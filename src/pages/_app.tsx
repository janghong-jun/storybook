import type { AppProps } from 'next/app'
import type { ReactNode } from 'react'
import { ViewportProvider } from '@/contexts/viewPortContext'
import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import '@/styles/globals.scss'
import '@/styles/fonts/pretendard-gov.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type NextPageWithLayout<P = unknown> = {
  pageTitle?: string
  getLayout?: (page: React.ReactNode, pageTitle?: string) => React.ReactNode
} & React.ComponentType<P>

type AppPropsWithLayout<P = unknown> = AppProps & {
  Component: NextPageWithLayout<P>
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode, pageTitle?: string) => (
      <Layout pageTitle={pageTitle}>{page}</Layout>
    ))

  const pageTitle = Component.pageTitle

  return (
    <ViewportProvider>
      <Head>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />, pageTitle)}
    </ViewportProvider>
  )
}
