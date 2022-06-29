import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Button } from './Elements/Button'
import { useRouter } from 'next/router'

const Contact = () => {
  const router = useRouter()

  const faq = require(`@/assets/collections/faq/${router.locale}.json`)

  return (
    <div id="contact">
      <div className="text-center">
        <h1 className="mt-12 text-3xl">Questions</h1>
      </div>
      <div className="my-32 md:flex">
        <div className="mx-12 flex-1">
          <h2 className="my-2 text-xl font-semibold md:ml-auto md:w-fit">
            FAQ
          </h2>
        </div>
        <div className="mx-12 mt-8 flex-1 md:mt-0">
          {faq.map((m: any, i: number) => (
            <Disclosure key={i}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between border-b-2 border-royal-blue py-2 text-left text-sm font-medium text-royal-blue focus:outline-none">
                    <span>{m.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-royal-blue`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-4 pb-2">
                    {m.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
          <Link href="mailto:info@edtechhack.org">
            <Button className="mx-auto mt-8">Contact us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
