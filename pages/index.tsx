/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/Elements/Button'
import type { NextPage } from 'next'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import Bar from '@/components/Elements/Bar'

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
        {/* DESCRIPTION */}
        <div id="program" className="pt-14">
          <div className="my-32 md:flex">
            <div className="mx-12 flex-1">
              <h2 className="my-4 text-center text-2xl font-semibold md:ml-auto md:w-fit">
                What is the EdTech Hackathon?
              </h2>
              <Button className="mx-auto md:ml-auto md:mr-0">
                Join the Hackathon
              </Button>
            </div>
            <div className="mx-12 flex-1">
              <h2 className="my-4 text-2xl font-semibold">The program</h2>
              <p>
                The Edtech Hackathon is an event to develop tech solutions to
                local and global challenges in education. The online phase is
                the moment where everyone can submit an idea of challenge here.
                The presencial phase, which will take place on the 22-24th of
                August at the Goethe Institute in São Paulo. It will be two
                exclusive days for participants to develop solutions supported
                by mentors and workshops and pizza.
              </p>
            </div>
          </div>
          <div className="my-32 md:flex">
            <div className="mx-12 flex-1">
              <h2 className="my-4 text-center text-2xl font-semibold md:ml-auto md:w-fit">
                What is the EdTech Hackathon?
              </h2>
              <Button className="mx-auto md:ml-auto md:mr-0">
                Join the Hackathon
              </Button>
            </div>
            <div className="mx-12 flex-1">
              <h2 className="my-4 text-2xl font-semibold">The program</h2>
              <p>
                The Edtech Hackathon is an event to develop tech solutions to
                local and global challenges in education. The online phase is
                the moment where everyone can submit an idea of challenge here.
                The presencial phase, which will take place on the 22-24th of
                August at the Goethe Institute in São Paulo. It will be two
                exclusive days for participants to develop solutions supported
                by mentors and workshops and pizza.
              </p>
            </div>
          </div>
          <div className="my-32 md:flex">
            <div className="mx-12 flex-1">
              <h2 className="my-4 text-center text-2xl font-semibold md:ml-auto md:w-fit">
                What is the EdTech Hackathon?
              </h2>
              <Button className="mx-auto md:ml-auto md:mr-0">
                Join the Hackathon
              </Button>
            </div>
            <div className="mx-12 flex-1">
              <h2 className="my-4 text-2xl font-semibold">The program</h2>
              <p>
                The Edtech Hackathon is an event to develop tech solutions to
                local and global challenges in education. The online phase is
                the moment where everyone can submit an idea of challenge here.
                The presencial phase, which will take place on the 22-24th of
                August at the Goethe Institute in São Paulo. It will be two
                exclusive days for participants to develop solutions supported
                by mentors and workshops and pizza.
              </p>
            </div>
          </div>
        </div>

        {/* CHALLANGES */}
        <div className="pt-28 text-center" id="challenges">
          <h1 className="text-5xl">The challanges</h1>
          <div className="my-32 md:flex">
            <div className="mx-12 flex-1 text-center">
              <img
                src={require('@/assets/cert.png').default.src}
                alt="cert"
                className="mx-auto"
              />
              <h2 className="my-4 text-2xl font-semibold">Topic 1</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem.
              </p>
            </div>
            <div className="mx-12 flex-1 text-center">
              <img
                src={require('@/assets/cert.png').default.src}
                alt="cert"
                className="mx-auto"
              />
              <h2 className="my-4 text-2xl font-semibold">Topic 1</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem.
              </p>
            </div>
            <div className="mx-12 flex-1 text-center">
              <img
                src={require('@/assets/cert.png').default.src}
                alt="cert"
                className="mx-auto"
              />
              <h2 className="my-4 text-2xl font-semibold">Topic 1</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem.
              </p>
            </div>
          </div>
          <Button className="mx-auto">Submit a challange</Button>
          <Bar />
        </div>

        {/* PRICES */}
        <div className="pt-28 text-center" id="prizes">
          <h1 className="text-5xl">The prizes</h1>
          <div className="my-32 md:flex">
            <div className="mx-12 flex-1 text-center">
              <img
                src={require('@/assets/1.png').default.src}
                alt="cert"
                className="mx-auto"
              />
              <h2 className="my-4 text-2xl font-semibold">1st Prize</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem.
              </p>
            </div>
            <div className="mx-12 flex-1 text-center">
              <img
                src={require('@/assets/1.png').default.src}
                alt="cert"
                className="mx-auto"
              />
              <h2 className="my-4 text-2xl font-semibold">1st Prize</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem.
              </p>
            </div>
            <div className="mx-12 flex-1 text-center">
              <img
                src={require('@/assets/1.png').default.src}
                alt="cert"
                className="mx-auto"
              />
              <h2 className="my-4 text-2xl font-semibold">1st Prize</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem.
              </p>
            </div>
          </div>
        </div>

        {/* JURI */}
        <div className="my-32 pt-28 lg:flex" id="juri-mentors">
          <div className="mx-12 flex-1">
            <h2 className="my-4 text-center text-2xl font-semibold lg:ml-auto lg:w-fit">
              The Juri
            </h2>
            <p className="text-center lg:ml-auto lg:mr-0 lg:w-fit">
              General description and the number of people
            </p>
          </div>
          <div className="flex flex-1 flex-wrap justify-center">
            <div className="flex flex-col items-center p-4">
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-royal-blue">
                <Image
                  src={require('@/assets/juri/barto_new.jpeg')}
                  layout="responsive"
                  alt="barto"
                />
              </div>
              <h2 className="my-4 text-center text-xl font-semibold">
                Dr. Thomas Bartoschek
              </h2>
              <div className="text-center">
                <p className="mb-4">Ph.D. Geoinformatik</p>
                <p className="w-40">
                  #Science #Education #Speaking #UX #Vision
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-royal-blue">
                <Image
                  src={require('@/assets/juri/barto_new.jpeg')}
                  layout="responsive"
                  alt="barto"
                />
              </div>
              <h2 className="my-4 text-center text-xl font-semibold">
                Dr. Thomas Bartoschek
              </h2>
              <div className="text-center">
                <p className="mb-4">Ph.D. Geoinformatik</p>
                <p className="w-40">
                  #Science #Education #Speaking #UX #Vision
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-royal-blue">
                <Image
                  src={require('@/assets/juri/barto_new.jpeg')}
                  layout="responsive"
                  alt="barto"
                />
              </div>
              <h2 className="my-4 text-center text-xl font-semibold">
                Dr. Thomas Bartoschek
              </h2>
              <div className="text-center">
                <p className="mb-4">Ph.D. Geoinformatik</p>
                <p className="w-40">
                  #Science #Education #Speaking #UX #Vision
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MENTORS */}
        <div className="my-32 lg:flex">
          <div className="visible mx-12 flex-1 lg:hidden">
            <h2 className="my-4 text-center text-2xl font-semibold lg:w-fit">
              The Mentors and Mediators
            </h2>
            <p className="text-center lg:w-fit">
              General description about their role during the hackthon
            </p>
          </div>
          <div className="flex flex-1 flex-wrap justify-center">
            <div className="flex flex-col items-center p-4">
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-royal-blue">
                <Image
                  src={require('@/assets/juri/barto_new.jpeg')}
                  layout="responsive"
                  alt="barto"
                />
              </div>
              <h2 className="my-4 text-center text-xl font-semibold">
                Dr. Thomas Bartoschek
              </h2>
              <div className="text-center">
                <p className="mb-4">Ph.D. Geoinformatik</p>
                <p className="w-40">
                  #Science #Education #Speaking #UX #Vision
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-royal-blue">
                <Image
                  src={require('@/assets/juri/barto_new.jpeg')}
                  layout="responsive"
                  alt="barto"
                />
              </div>
              <h2 className="my-4 text-center text-xl font-semibold">
                Dr. Thomas Bartoschek
              </h2>
              <div className="text-center">
                <p className="mb-4">Ph.D. Geoinformatik</p>
                <p className="w-40">
                  #Science #Education #Speaking #UX #Vision
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-royal-blue">
                <Image
                  src={require('@/assets/juri/barto_new.jpeg')}
                  layout="responsive"
                  alt="barto"
                />
              </div>
              <h2 className="my-4 text-center text-xl font-semibold">
                Dr. Thomas Bartoschek
              </h2>
              <div className="text-center">
                <p className="mb-4">Ph.D. Geoinformatik</p>
                <p className="w-40">
                  #Science #Education #Speaking #UX #Vision
                </p>
              </div>
            </div>
          </div>
          <div className="mx-12 hidden flex-1 lg:block">
            <h2 className="my-4 text-center text-2xl font-semibold lg:w-fit">
              The Mentors and Mediators
            </h2>
            <p className="text-center lg:w-fit">
              General description about their role during the hackthon
            </p>
          </div>
        </div>
        <Bar />

        <div className="" id="timeline">
          <h1 className="text-center text-5xl">Timeline</h1>

          <div className="md:flex">
            <div className="mx-8 flex-1">
              <ol className="relative mt-8 border-r-4 border-dotted border-royal-blue">
                <li className="mr-8 pb-10">
                  <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
                  <h2 className="my-2 ml-auto w-fit text-xl font-semibold">
                    Start
                  </h2>
                  <p className="mb-4 ml-auto w-fit">May 31st of 2022</p>
                  <p className="my-4 ml-auto w-fit">
                    Submit a challenge and apply to join the Edtech Hackthon
                  </p>
                </li>
                <li className="mr-8 pb-10">
                  <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
                  <h2 className="my-2 ml-auto w-fit text-xl font-semibold">
                    Deadline for challenge submission
                  </h2>
                  <p className="mb-4 ml-auto w-fit">August 01st of 2022</p>
                  <p className="ml-auto w-fit py-4">
                    Submit a challenge and apply to join the Edtech Hackthon
                  </p>
                </li>
              </ol>
              <ol className="relative border-r-4 border-royal-blue">
                <li className="mr-8 pb-10">
                  <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
                  <h2 className="mb-2 ml-auto w-fit text-xl font-semibold">
                    Edtech Hackthon - Day 01
                  </h2>
                  <p className="mb-4 ml-auto w-fit">XX/August</p>
                  <p className="my-4 ml-auto w-fit">
                    Learning, meeting & hacking - Pre-hack hands-on workshops on
                    technologies Lunch Welcome words DWIH & introduction &
                    challenges Thinking and tinkering + Pitches + Group forming
                    Pizza dinner
                  </p>
                </li>
                <li className="mr-8 pb-10">
                  <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
                  <h2 className="my-2 ml-auto w-fit text-xl font-semibold">
                    Edtech Hackthon - Day 02
                  </h2>
                  <p className="mb-4 ml-auto w-fit">XX/August</p>
                  <p className="my-4 ml-auto w-fit">
                    Learning, meeting & hacking - Pre-hack hands-on workshops on
                    technologies Lunch Welcome words DWIH & introduction &
                    challenges Thinking and tinkering + Pitches + Group forming
                    Pizza dinner
                  </p>
                </li>
                <li className="mr-8 pb-10">
                  <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
                  <h2 className="my-2 ml-auto w-fit text-xl font-semibold">
                    Edtech Hackthon - Day 03
                  </h2>
                  <p className="mb-4 ml-auto w-fit">XX/August</p>
                  <p className="my-4 ml-auto w-fit">
                    Learning, meeting & hacking - Pre-hack hands-on workshops on
                    technologies Lunch Welcome words DWIH & introduction &
                    challenges Thinking and tinkering + Pitches + Group forming
                    Pizza dinner
                  </p>
                </li>
              </ol>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
        <Bar />

        {/* QUESTIONS */}
        <div className="pt-28" id="contact">
          <div className="text-center">
            <h1 className="text-5xl">Questions</h1>
          </div>
          <div className="my-32 md:flex">
            <div className="mx-12 flex-1">
              <h2 className="my-2 text-xl font-semibold md:ml-auto md:w-fit">
                FAQ
              </h2>
              <Button className="md:ml-auto">Contact us</Button>
            </div>
            <div className="mx-12 mt-8 flex-1 md:mt-0">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border-b-2 border-royal-blue py-2 text-left text-sm font-medium text-royal-blue focus:outline-none">
                      <span>
                        DO I NEED TO BE FROM SÃO PAULO TO PARTICIPATE?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-royal-blue`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="pt-4 pb-2">
                      If youre unhappy with your purchase for any reason, email
                      us within 90 days and well refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between border-b-2 border-royal-blue  py-2 text-left text-sm font-medium text-royal-blue focus:outline-none">
                      <span>
                        DO I NEED TO BE FROM SÃO PAULO TO PARTICIPATE?
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-royal-blue`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="p-4">
                      If youre unhappy with your purchase for any reason, email
                      us within 90 days and well refund you in full, no
                      questions asked.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
        <Bar />

        {/* SUPPORTERS */}
        <div className="pt-28" id="supporters">
          <div className="text-center">
            <h1 className="text-5xl">Supporters</h1>
          </div>
          <div className="my-32 md:flex">
            <div className="mx-12 flex-1">
              <img
                src={require('@/assets/diwh.png').default.src}
                alt="cert"
                className="mx-auto"
              />
            </div>
            <div className="mx-12 flex-1">
              <img
                src={require('@/assets/bwk.png').default.src}
                alt="cert"
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        {/* PARTNERS */}
        <div className="">
          <div className="text-center">
            <h1 className="text-5xl">Partners</h1>
          </div>
          <div className="my-32 items-center md:flex">
            <div className="mx-12 flex-1">
              <img
                src={require('@/assets/tum.png').default.src}
                alt="cert"
                className="mx-auto"
              />
            </div>
            <div className="mx-12 flex-1">
              <img
                src={require('@/assets/goethe.png').default.src}
                alt="cert"
                className="mx-auto"
              />
            </div>
            <div className="mx-12 flex-1">
              <img
                src={require('@/assets/fub.png').default.src}
                alt="cert"
                className="mx-auto"
              />
            </div>
          </div>
          <div className="my-32 items-center md:flex">
            <div className="mx-12 flex-1">
              <img
                src={require('@/assets/wwu.png').default.src}
                alt="cert"
                className="mx-auto"
              />
            </div>
            <div className="mx-12 flex-1">
              <img
                src={require('@/assets/reedu.png').default.src}
                alt="cert"
                className="mx-auto"
              />
            </div>
            <div className="mx-12 flex-1">
              <img
                src={require('@/assets/gast.png').default.src}
                alt="cert"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
