import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/outline'
import { Button } from './Elements/Button'

const Contact = () => {
  return (
    <div className="pt-28" id="contact">
      <div className="text-center">
        <h1 className="text-5xl">Questions</h1>
      </div>
      <div className="my-32 md:flex">
        <div className="mx-12 flex-1">
          <h2 className="my-2 text-xl font-semibold md:ml-auto md:w-fit">
            FAQ
          </h2>
          <Button className="md:ml-auto">Contact us</Button>
        </div>
        <div className="mx-12 mt-8 flex-1 md:mt-0">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b-2 border-royal-blue py-2 text-left text-sm font-medium text-royal-blue focus:outline-none">
                  <span>DO I NEED TO BE FROM SÃO PAULO TO PARTICIPATE?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-royal-blue`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="pt-4 pb-2">
                  If youre unhappy with your purchase for any reason, email us
                  within 90 days and well refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between border-b-2 border-royal-blue  py-2 text-left text-sm font-medium text-royal-blue focus:outline-none">
                  <span>DO I NEED TO BE FROM SÃO PAULO TO PARTICIPATE?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-royal-blue`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="p-4">
                  If youre unhappy with your purchase for any reason, email us
                  within 90 days and well refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  )
}

export default Contact
