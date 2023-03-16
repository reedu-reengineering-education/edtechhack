/* eslint-disable @next/next/no-img-element */
import { scrollToTargetAdjusted } from '@/utils'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Challenge from './Challenge'
import { Button } from './Elements/Button'
import Link from 'next/link'

const Challenges = () => {
  const router = useRouter()

  const { challenges: t } = require(`@/assets/i18n/${router.locale}.json`)

  const challenges = require(`@/assets/collections/challenges/${router.locale}.json`)

  return (
    <div className="text-center" id="challenges">
      <h2 className="my-4 text-center text-2xl font-semibold">{t.title}</h2>

      <p>{t.description}</p>
      {/* <div className="my-16 md:flex">
        {challenges.map((c: any, i: number) => (
          <Challenge key={i} c={c} />
        ))}
      </div> */}
      <Link href="/challenge">
        <Button className="mx-auto">{t.submit}</Button>
      </Link>
    </div>
  )
}

export default Challenges
