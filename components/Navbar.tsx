import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
  const router = useRouter()

  const { header: t } = require(`@/assets/i18n/${router.locale}.json`)

  const navigation = [
    { name: t.program, href: '#program' },
    { name: t.challenges, href: '#challenges' },
    { name: t.prizes, href: '#prizes' },
    { name: t.juri, href: '#juri-mentors' },
    { name: t.supporters, href: '#supporters' },
    { name: t.contact, href: '#contact' },
  ]

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 z-10 w-full bg-royal-blue shadow"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-full p-2 text-white hover:bg-royal-blue-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="ml-10 flex flex-1 items-center justify-start lg:m-0 lg:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={'/'} passHref>
                    <a>
                      <div className="relative my-4 mx-2 h-auto w-40 overflow-hidden rounded-lg sm:w-52 lg:w-80">
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                <div className="my-2 block lg:hidden">
                  <Link
                    href={router.pathname}
                    locale={router.locale === 'en' ? 'pt' : 'en'}
                    passHref
                  >
                    <button className="rounded-lg border-2 border-white  bg-royal-blue px-3 font-medium text-white shadow">
                      {router.locale === 'en' ? 'PT' : 'EN'}
                    </button>
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex flex-col items-end">
                    <div className="my-2">
                      <Link
                        href={router.pathname}
                        locale={router.locale === 'en' ? 'pt' : 'en'}
                        passHref
                      >
                        <button className="rounded-lg border-2 border-white  bg-royal-blue px-3 font-medium text-white shadow">
                          {router.locale === 'en' ? 'PT' : 'EN'}
                        </button>
                      </Link>
                    </div>
                    <div className="flex space-x-4">
                      {navigation.map(item => (
                        <Link key={item.name} href={item.href}>
                          <a
                            className={clsx(
                              // router.pathname.includes(item.href) ? 'underline' : '',
                              'px-3  py-2 text-sm font-medium text-white hover:underline lg:text-base',
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

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    'block px-3  py-2 text-sm font-medium text-white hover:underline',
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
