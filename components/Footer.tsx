import Image from 'next/image'
import { useRouter } from 'next/router'
import { Facebook, Instagram, Twitter } from 'react-feather'

const Footer = () => {
  const router = useRouter()

  return (
    <div className="bg-royal-blue">
      <div className="mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="hidden flex-1 md:block">
            <div className="relative my-4 mx-2 h-auto w-80 overflow-hidden rounded-lg border-2 border-white shadow">
              <Image
                src={require('@/assets/logo.png')}
                alt="Logo"
                layout="responsive"
              />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center text-white">
            <div className="flex">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center text-white md:justify-end">
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
