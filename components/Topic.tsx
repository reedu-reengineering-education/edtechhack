/* eslint-disable @next/next/no-img-element */
import { scrollToTargetAdjusted } from '@/utils'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Challenge from './Challenge'
import { Button } from './Elements/Button'
import Link from 'next/link'
import Image from 'next/image'

const Topic = () => {
  const router = useRouter()

  const { challenges: t, esd } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <div className="text-center" id="challenges">
      <h2 className="my-4 text-center text-2xl font-semibold">{t.title}</h2>
      <p>{t.description}</p>

      <div className="my-16 items-center justify-center md:flex">
        <div className="w-full p-4 md:w-1/2">
          <Image
            src={require('@/assets/images/challenges/bne.png')}
            alt="Education for Sustainable Development"
            className="h-auto w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full p-4 text-left md:w-1/2">
          <h3 className="mb-4 text-xl font-semibold">{esd.title}</h3>
          <p className="mb-4">{esd.description}</p>
          <h4 className="mb-2 text-lg font-semibold">{esd.whyMattersTitle}</h4>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <strong>{esd.whyMatters1Title}:</strong>{' '}
              {esd.whyMatters1Description}
            </li>
            <li>
              <strong>{esd.whyMatters2Title}:</strong>{' '}
              {esd.whyMatters2Description}
            </li>
            <li>
              <strong>{esd.whyMatters3Title}:</strong>{' '}
              {esd.whyMatters3Description}
            </li>
          </ul>
          <h4 className="mb-2 text-lg font-semibold">{esd.keyGoalsTitle}</h4>
          <ul className="mb-4 list-inside list-disc">
            <li>
              <strong>{esd.keyGoals1Title}:</strong> {esd.keyGoals1Description}
            </li>
            <li>
              <strong>{esd.keyGoals2Title}:</strong> {esd.keyGoals2Description}
            </li>
            <li>
              <strong>{esd.keyGoals3Title}:</strong> {esd.keyGoals3Description}
            </li>
            <li>
              <strong>{esd.keyGoals4Title}:</strong> {esd.keyGoals4Description}
            </li>
          </ul>
          <p className="mb-4">{esd.implementation}</p>
          <p>
            <strong>{esd.joinMovementTitle}:</strong>{' '}
            {esd.joinMovementDescription}
          </p>
          <Link href="https://www.goethe.de/ins/br/de/spr/eng/med.html">
            <a className="text-blue-600 underline">{esd.learnMore}</a>
          </Link>
        </div>
      </div>

      <Link href="/challenge">
        <Button className="mx-auto">{t.submit}</Button>
      </Link>
    </div>
  )
}

export default Topic
