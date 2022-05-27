import Image from 'next/image'
import { useRouter } from 'next/router'

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
        <div className="m-4 rounded-xl p-4 text-white shadow-lg backdrop-blur lg:mx-8 lg:p-12">
          <p className="text-center text-2xl font-bold md:text-6xl lg:text-8xl">
            {t.date}
            <br />
            {t.place}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainImage
