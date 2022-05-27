import { useRouter } from 'next/router'

/* eslint-disable @next/next/no-img-element */
const Supporters = () => {
  const router = useRouter()

  const { supporters: t } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <div className="pt-28" id="supporters">
      <div className="text-center">
        <h1 className="mt-12 text-3xl">{t.title}</h1>
      </div>
      <div className="my-32 md:flex md:flex-wrap">
        <div className="mx-12 my-8 flex-1 md:mx-36">
          <img
            src={require('@/assets/images/supporters/diwh.png').default.src}
            alt="cert"
            className="mx-auto max-w-xs"
          />
        </div>
        <div className="mx-12 my-8 flex-1 md:mx-36">
          <img
            src={require('@/assets/images/supporters/bwk.png').default.src}
            alt="cert"
            className="mx-auto max-w-xs"
          />
        </div>
      </div>
    </div>
  )
}

export default Supporters
