/* eslint-disable @next/next/no-img-element */
import { scrollToTargetAdjusted } from '@/utils'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Challenge from './Challenge'
import { Button } from './Elements/Button'

const Challenges = () => {
  const router = useRouter()

  const { challenges: t } = require(`@/assets/i18n/${router.locale}.json`)

  const challenges = require(`@/assets/collections/challenges/${router.locale}.json`)

  return (
    <div className="text-center" id="challenges">
      <h1 className="mt-16 text-3xl">{t.title}</h1>
      <div className="my-16 md:flex">
        {challenges.map((c: any, i: number) => (
          <Challenge key={i} c={c} />
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
