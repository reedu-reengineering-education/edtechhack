import type { NextPage } from 'next'
import Head from 'next/head'

const RegistrationPage: NextPage = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <Head>
        <title>German-Brazilian EdTech Hackathon</title>

        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <main className="container mx-auto flex h-[80vh] flex-col items-center justify-center gap-8 px-4 pt-24">
        {/* <Registration /> */}
        <p>The registration is over, thank you for your interest</p>
        <p>O registro acabou, obrigado pelo seu interesse</p>
      </main>
    </div>
  )
}

export default RegistrationPage
