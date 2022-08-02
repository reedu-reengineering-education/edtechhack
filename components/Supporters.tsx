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
      <div className="md:flex md:flex-wrap">
        <div className="mx-12 my-8 flex-1 md:mx-36">
          <div className="mx-auto max-w-xs">
            <Image
              src={require('@/assets/images/supporters/dwih_english.png')}
              alt="cert"
              layout="responsive"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Supporters
