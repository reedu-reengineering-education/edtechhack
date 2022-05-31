import { useRouter } from 'next/router'

/* eslint-disable @next/next/no-img-element */
const Prizes = () => {
  const router = useRouter()

  const { prizes: t } = require(`@/assets/i18n/${router.locale}.json`)

  const prizes = require(`@/assets/collections/prizes/${router.locale}.json`)

  return (
    <div className="text-center" id="prizes">
      <h1 className="text-3xl">{t.title}</h1>
      <div className="my-32 md:flex">
        {prizes.map((p: any, i: any) => (
          <div className="mx-12 flex-1 text-center" key={i}>
            <img
              src={require(`@/assets/images/prizes/${p.image}`).default.src}
              alt="cert"
              className="mx-auto"
            />
            <h2 className="my-4 text-2xl font-semibold">{p.title}</h2>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Prizes
