import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/900.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
