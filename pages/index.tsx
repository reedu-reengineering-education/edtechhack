import type { NextPage } from 'next'
import Image from 'next/image'
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

const Home: NextPage = () => {
  return (
    <div className="pt-16 lg:pt-24">
      {/* BG IMAGE */}
      <div className="relative h-auto max-h-[80rem] w-full overflow-hidden">
        <Image
          src={require('@/assets/bg.png')}
          alt="Logo"
          layout="responsive"
        />
        <div className="absolute left-0 bottom-0 w-full">
          <div className="container mx-auto hidden p-4 md:block">
            <div className="flex">
              <div className="m-4 rounded-xl border-2 border-white bg-royal-blue p-4 text-white shadow-lg lg:mx-8 lg:p-12">
                <p className="md:text-xl lg:text-2xl">
                  Do you want to be part of tech-solutions for and national
                  challenges in the educational area ?
                </p>
              </div>
              <div className="m-4 rounded-xl border-2 border-white bg-royal-blue p-4 text-white shadow-lg lg:mx-8 lg:p-12">
                <p className="md:text-xl lg:text-2xl">
                  Do you have a problem in education that could be solved with
                  the support of technology?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 md:hidden">
        <div className="m-4 rounded-xl border-2 border-white bg-royal-blue p-4 text-white shadow-lg lg:mx-8 lg:p-12">
          <p className="text-xl">
            Do you want to be part of tech-solutions for and national challenges
            in the educational area ?
          </p>
        </div>
        <div className="m-4 rounded-xl border-2 border-white bg-royal-blue p-4 text-white shadow-lg lg:mx-8 lg:p-12">
          <p className="text-xl">
            Do you have a problem in education that could be solved with the
            support of technology?
          </p>
        </div>
      </div>

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
