import type { AppProps } from 'next/app'
import '../styles/output.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}