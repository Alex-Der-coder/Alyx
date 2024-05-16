import type { AppProps } from 'next/app'
import '../styles/output.css'

import Layout from './layout'
import Head from 'next/head'

 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head><title>Portefolio made by Alexandre De Roeck</title></Head>
      <Component {...pageProps} />
    </Layout>
  )
}