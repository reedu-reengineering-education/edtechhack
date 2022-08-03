/* eslint-disable @next/next/no-img-element */
import { scrollToTargetAdjusted } from '@/utils'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button } from './Elements/Button'

const Challenges = () => {
  const [showMore, setShowMore] = useState(false)
  const router = useRouter()

  const { challenges: t } = require(`@/assets/i18n/${router.locale}.json`)

  const challenges = require(`@/assets/collections/challenges/${router.locale}.json`)

  return (
    <div className="text-center" id="challenges">
      <h1 className="mt-16 text-3xl">{t.title}</h1>
      <div className="my-16 md:flex">
        {challenges.map((c: any, i: number) => (
          <div className="mx-12 flex-1 text-center" key={i}>
            <img
              src={require(`@/assets/images/challenges/${c.image}`).default.src}
              alt="cert"
              className="mx-auto"
            />
            <h2 className="my-4 text-2xl font-semibold">{c.title}</h2>
            <h6>
              {showMore ? c.description : `${c.description.substring(0, 250)}`}
            </h6>
            <Button className="mx-auto" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show less' : 'Show more'}
            </Button>
            {/* <p className="w-32 truncate ">{c.description}</p> */}
          </div>
        ))}
      </div>
      <Button
        className="mx-auto"
        onClick={() =>
          scrollToTargetAdjusted(document.getElementById('submit_challenge'))
        }
      >
        {t.submit}
      </Button>
    </div>
  )
}

export default Challenges
