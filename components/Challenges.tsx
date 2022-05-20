/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { Button } from './Elements/Button'

const Challenges = () => {
  const router = useRouter()

  const { challenges: t } = require(`@/assets/i18n/${router.locale}.json`)

  const challenges = require(`@/assets/collections/challenges/${router.locale}.json`)

  return (
    <div className="pt-28 text-center" id="challenges">
      <h1 className="text-5xl">{t.title}</h1>
      <div className="my-32 md:flex">
        {challenges.map((c: any, i: number) => (
          <div className="mx-12 flex-1 text-center" key={i}>
            <img
              src={require(`@/assets/images/challenges/${c.image}`).default.src}
              alt="cert"
              className="mx-auto"
            />
            <h2 className="my-4 text-2xl font-semibold">{c.title}</h2>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
      <Button className="mx-auto">{t.submit}</Button>
    </div>
  )
}

export default Challenges
