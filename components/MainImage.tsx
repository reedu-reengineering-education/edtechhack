import { ArrowRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from './Elements/Button'

const MainImage = () => {
  const router = useRouter()

  const { mainImage: t } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <div className="relative h-auto max-h-[40rem] w-full">
      <div className="max-h-[40rem] overflow-hidden">
        <Image
          src={require('@/assets/images/bg.png')}
          alt="Logo"
          layout="responsive"
          placeholder="blur"
          className="overflow-hidden"
        />
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="m-4 rounded-xl p-4 text-white backdrop-blur lg:mx-8 lg:p-12">
          <p className="text-center text-2xl font-bold md:text-4xl lg:text-6xl">
            {t.date}
            <br />
            {t.place}
          </p>
          <Link href="/2022">
            <Button
              variant="inverse"
              endIcon={<ArrowRightIcon className="h-6 w-6" />}
              className="mx-auto md:mt-6"
              size="sm"
            >
              {t.hack_prev}
            </Button>
          </Link>
          {/* <Link href="/2023">
            <Button
              variant="inverse"
              endIcon={<ArrowRightIcon className="h-6 w-6" />}
              className="mx-auto mt-6"
            >
              {t.hack_2023}
            </Button>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default MainImage
