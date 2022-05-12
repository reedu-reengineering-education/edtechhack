import { Button } from '@/components/Elements/Button'
import { Spacer } from '@/components/Elements/Spacer'
import type { NextPage } from 'next'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
import { Tab, Transition } from '@headlessui/react'
import Slider from '@/components/Slider'
import { Fragment } from 'react'
import clsx from 'clsx'

const Home: NextPage = () => {
  return (
    <div>
      <div className="mx-auto md:max-w-3xl">
        <div className="relative h-32 w-full">
          <Image
            src={require('@/assets/likert-o-mat-logo.svg')}
            alt="Logo"
            layout="fill"
          />
        </div>
        <Spacer />
        <h2 className="p-2 text-center text-2xl">
          Der <span className="font-bold">Likert-o-mat</span> ist eine Plattform
          zum Erstellen von Umfragen mit Likert Skalen
        </h2>
        <Spacer />
        <Link href={'/studio/new'} passHref>
          <Button
            endIcon={<ArrowRightIcon className="h-4" />}
            className="mx-auto"
          >
            Umfrage erstellen
          </Button>
        </Link>
        <Spacer size="lg" />
        <Transition
          show
          appear
          enter="transition duration-2000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="rounded-xl bg-zinc-50 p-8 shadow-xl">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-mango-200 p-1">
                <Tab
                  className={({ selected }) =>
                    clsx(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-zinc-700 outline-none',
                      selected ? 'bg-white shadow' : 'text-mango-100',
                    )
                  }
                >
                  Frage Ansicht
                </Tab>
                <Tab
                  className={({ selected }) =>
                    clsx(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-zinc-700 outline-none',
                      selected ? 'bg-white shadow' : 'text-mango-100 ',
                    )
                  }
                >
                  Antwort Ansicht
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-8">
                <Tab.Panel>
                  <Slider
                    name="Wie fühlen Sie sich heute?"
                    min={0}
                    max={10}
                    steps={2}
                    onChange={() => {}}
                  />
                </Tab.Panel>
                <Tab.Panel>
                  <Slider
                    name="Wie fühlen Sie sich heute?"
                    min={0}
                    max={10}
                    steps={2}
                    onChange={() => {}}
                    answer={8.7}
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </Transition>
      </div>
    </div>
  )
}

export default Home
