import type { NextPage } from 'next'
import Bar from '@/components/Elements/Bar'
import Program from '@/components/Program'
import Challenges from '@/components/Challenges'
import Juri from '@/components/Juri'
import Mentors from '@/components/Mentors'
import Timeline from '@/components/Timeline'
import Contact from '@/components/Contact'
import Prizes from '@/components/Prizes'
import Supporters from '@/components/Supporters'
import Partners from '@/components/Partners'
import MainImage from '@/components/MainImage'

const Home: NextPage = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <MainImage />

      <main className="container mx-auto">
        <Program />
        <Bar />
        <Challenges />
        <Prizes />
        <Bar />
        <Juri />
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
