import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const navigation = [
  { name: 'Program', href: '#program' },
  { name: 'Challanges', href: '#challenges' },
  { name: 'Prizes', href: '#prizes' },
  { name: 'Juri and Mentors', href: '#juri-mentors' },
  { name: 'Supporters', href: '#supporters' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const router = useRouter()

  return (
    <Disclosure as="nav" className="bg-royal-blue shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-full p-2 hover:bg-royal-blue-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={'/'} passHref>
                    <a>
                      <div className="relative my-4 mx-2 h-auto w-80 overflow-hidden rounded-lg border-2 border-white shadow">
                        <Image
                          src={require('@/assets/logo.png')}
                          alt="Logo"
                          layout="responsive"
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex flex-col items-end">
                    <div className="my-2">
                      <button className="rounded-md border-2 border-white  bg-royal-blue px-3 font-medium text-white shadow">
                        ENG
                      </button>
                    </div>
                    <div className="flex space-x-4">
                      {navigation.map(item => (
                        <Link key={item.name} href={item.href}>
                          <a
                            className={clsx(
                              // router.pathname.includes(item.href) ? 'underline' : '',
                              'px-3 py-2 font-medium text-white hover:underline',
                            )}
                            aria-current={
                              router.pathname.includes(item.href)
                                ? 'page'
                                : undefined
                            }
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    router.pathname.includes(item.href)
                      ? 'bg-royal-blue'
                      : 'hover:bg-royal-blue-300',
                    'block rounded-full px-3 py-2 text-base font-medium',
                  )}
                  aria-current={
                    router.pathname.includes(item.href) ? 'page' : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
