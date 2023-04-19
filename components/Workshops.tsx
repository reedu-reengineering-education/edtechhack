/* eslint-disable @next/next/no-img-element */
import { scrollToTargetAdjusted } from '@/utils'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Workshop from './Workshop'
import { Button } from './Elements/Button'
import Link from 'next/link'

const Workshops = () => {
  const router = useRouter()

  const { workshops: t } = require(`@/assets/i18n/${router.locale}.json`)

  const workshops = require(`@/assets/collections/workshops/${router.locale}.json`)

  return (
    <div className="text-center" id="challenges">
      <h2 className="my-4 text-center text-2xl font-semibold">{t.title}</h2>

      <p>{t.description}</p>
      <div className="my-16 md:flex">
        {workshops.map((workshop: any, i: number) => (
          <Workshop key={i} workshop={workshop} />
        ))}
      </div>
    </div>
  )
}

export default Workshops
