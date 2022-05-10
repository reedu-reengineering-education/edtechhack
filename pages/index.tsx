import { Button } from '@/components/Elements/Button'
import { Spacer } from '@/components/Elements/Spacer'
import type { NextPage } from 'next'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'

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
        <Link href={'/studio'} passHref>
          <Button
            endIcon={<ArrowRightIcon className="h-4" />}
            className="mx-auto"
          >
            Umfrage erstellen
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
