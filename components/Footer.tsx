import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Facebook, Instagram, Twitter } from 'react-feather'

const Footer = () => {
  const router = useRouter()

  const { footer: t } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <div className="bg-royal-blue">
      <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="hidden flex-1 md:block">
            <div className="relative my-4 mx-2 h-auto w-80 overflow-hidden">
              <Image
                src={require('@/assets/images/logo.png')}
                alt="Logo"
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center text-white">
            <p className="mb-4">{t.share}</p>
            <div className="flex">
              <Instagram className="mx-2" />
              <Facebook className="mx-2" />
              <Twitter className="mx-2" />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center text-white md:justify-end">
            <Link href="mailto:info@edtechhack.org">
              <a>{t.contact}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
