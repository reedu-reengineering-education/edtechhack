import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'

import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/900.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <div className="bg-mercury-200">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
