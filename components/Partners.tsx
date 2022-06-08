import { useRouter } from 'next/router'
import Image from 'next/image'

/* eslint-disable @next/next/no-img-element */
const Partners = () => {
  const router = useRouter()

  const { partners: t } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-3xl">{t.title}</h1>
      </div>
      <div className="items-center md:flex">
        <div className="mx-12 flex-1 p-8 md:p-4 lg:p-8 xl:p-16 ">
          <Image
            src={require('@/assets/images/partners/tum.svg')}
            alt="cert"
            layout="responsive"
          />
        </div>
        <div className="mx-12 flex-1 p-8 md:p-4 lg:p-8 xl:p-16 ">
          <Image
            src={require('@/assets/images/partners/goethe.svg')}
            alt="cert"
            layout="responsive"
            className="mx-auto"
          />
        </div>
        <div className="mx-12 flex-1 p-8 md:p-4 lg:p-8 xl:p-16">
          <Image
            src={require('@/assets/images/partners/fub.svg')}
            alt="cert"
            layout="responsive"
            className="mx-auto"
          />
        </div>
      </div>
      <div className="items-center md:flex">
        <div className="mx-12 flex-1 p-8 md:p-4 lg:p-8 xl:p-16 ">
          <Image
            src={require('@/assets/images/partners/wwu.svg')}
            alt="cert"
            layout="responsive"
            className="mx-auto"
          />
        </div>
        <div className="mx-12 flex-1 p-8 md:p-4 lg:p-8 xl:p-16 ">
          <Image
            src={require('@/assets/images/partners/reedu.svg')}
            alt="cert"
            layout="responsive"
            className="mx-auto"
          />
        </div>
        <div className="mx-12 flex-1 p-8 md:p-4 lg:p-8 xl:p-16 ">
          <Image
            src={require('@/assets/images/partners/gast.svg')}
            alt="cert"
            layout="responsive"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Partners
