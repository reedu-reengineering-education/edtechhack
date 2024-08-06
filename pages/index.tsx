import Contact from '@/components/Contact'
import Bar from '@/components/Elements/Bar'
import Jury from '@/components/Jury'
import MainImage from '@/components/MainImage'
import Mentors from '@/components/Mentors'
import Organisators from '@/components/Organisators'
import Partners from '@/components/Partners'
import Program from '@/components/Program'
import Supporters from '@/components/Supporters'
import Timeline from '@/components/Timeline'
import Topic from '@/components/Topic'
import Workshops from '@/components/Workshops'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="pt-20 lg:pt-24">
      <Head>
        <title>German-Brazilian EdTech Hackathon</title>
        <meta
          name="description"
          content="The Edtech Hackathon is an event to develop tech solutions to local
          and global challenges in education. The online phase is the moment
          where everyone can submit an idea of challenge here. The presencial
          phase, which will take place on the 25-27th of May at the Goethe
          Institut in São Paulo. It will be two exclusive days for participants
          to develop solutions supported by mentors and workshops and pizza."
        />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <MainImage />

      <main className="container mx-auto">
        <Program />
        <Bar />
        <Topic />
        {/* <Bar />
        <Challenges /> */}
        {/* <Prizes /> */}
        <Bar />

        <Jury />
        <Bar />
        <Workshops />
        <Bar />
        <Timeline />
        <Contact />
        <Bar />
        <Mentors />
        <Organisators />
        <Supporters />
        <Partners />
        {/* <Registration /> */}
      </main>
    </div>
  )
}

export default Home
