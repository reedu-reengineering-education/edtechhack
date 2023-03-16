import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Button } from './Elements/Button'
import { useRouter } from 'next/router'
import Faq from './Faq'

const Contact = () => {
  const router = useRouter()

  const faq = require(`@/assets/collections/faq/${router.locale}.json`)

  return (
    <div id="contact">
      <div className="text-center">
        <h1 className="mt-12 text-3xl">Questions</h1>
      </div>
      <Faq />
    </div>
  )
}

export default Contact
