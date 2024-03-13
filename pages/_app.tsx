import type { AppProps } from 'next/app'
import '../styles/output.css'
import Layout from './layout'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}