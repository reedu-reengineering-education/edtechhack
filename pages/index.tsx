import type { NextPage } from 'next'
import Bar from '@/components/Elements/Bar'
import Program from '@/components/Program'
import Challenges from '@/components/Challenges'
import Jury from '@/components/Jury'
import Mentors from '@/components/Mentors'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import Prizes from '@/components/Prizes'
import Supporters from '@/components/Supporters'
import Partners from '@/components/Partners'
import MainImage from '@/components/MainImage'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <Head>
        <title>German-Brazilian EdTech Hackathon</title>
        <meta
          name="description"
          content="The Edtech Hackathon is an event to develop tech solutions to local
          and global challenges in education. The online phase is the moment
          where everyone can submit an idea of challenge here. The presencial
          phase, which will take place on the 22-24th of August at the Goethe
          Institute in São Paulo. It will be two exclusive days for participants
          to develop solutions supported by mentors and workshops and pizza."
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <MainImage />

      <main className="container mx-auto">
        <Program />
        <Bar />
        <Challenges />
        {/* <Prizes /> */}
        <Bar />
        <Jury />
        <Mentors />
        <Bar />
        <Timeline />
        <Contact />
        <Bar />
        <Supporters />
        <Partners />
      </main>
    </div>
  )
}

export default Home
