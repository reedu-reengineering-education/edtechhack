import { useRouter } from 'next/router'

/* eslint-disable @next/next/no-img-element */
const Partners = () => {
  const router = useRouter()

  const { partners: t } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-3xl">{t.title}</h1>
      </div>
      <div className="my-32 items-center md:flex">
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/images/partners/tum.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/images/partners/goethe.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/images/partners/fub.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
      </div>
      <div className="my-32 items-center md:flex">
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/images/partners/wwu.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/images/partners/reedu.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
        <div className="mx-12 flex-1">
          <img
            src={require('@/assets/images/partners/gast.png').default.src}
            alt="cert"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Partners
