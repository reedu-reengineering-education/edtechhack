import Image from 'next/image'
import { useRouter } from 'next/router'

/* eslint-disable @next/next/no-img-element */
const Supporters = () => {
  const router = useRouter()

  const { supporters: t } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <div id="supporters">
      <div className="text-center">
        <h1 className="mt-12 text-3xl">{t.title}</h1>
      </div>
      <div className="flex items-center justify-center md:flex-wrap">
        <div className="p-8 md:p-4 lg:p-8 xl:p-16">
          <Image
            src={require('@/assets/images/supporters/dwih_english.png')}
            alt="cert"
            placeholder="blur"
            height={300}
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Supporters
