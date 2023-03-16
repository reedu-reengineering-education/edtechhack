import ChallengeSubmission from '@/components/ChallengeSubmission'
import type { NextPage } from 'next'
import Head from 'next/head'

const ChallengePage: NextPage = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <Head>
        <title>German-Brazilian EdTech Hackathon</title>

        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <main className="container mx-auto px-4">
        <ChallengeSubmission />
      </main>
    </div>
  )
}

export default ChallengePage
