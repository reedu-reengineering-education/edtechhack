import Image from 'next/image'
import { useRouter } from 'next/router'

const MainImage = () => {
  const router = useRouter()

  const { mainImage: t } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <>
      <div className="relative h-auto max-h-[40rem] w-full">
        <div className=" max-h-[40rem] overflow-hidden">
          <Image
            src={require('@/assets/bg.png')}
            alt="Logo"
            layout="responsive"
            className="overflow-hidden"
          />
        </div>
        <div className="absolute left-0 bottom-0 w-full translate-y-2/3 md:translate-y-1/2">
          <div className="container mx-auto p-4">
            <div className="md:flex">
              <div className="m-4 rounded-xl border-2 border-white bg-royal-blue p-4 text-white shadow-lg lg:mx-8 lg:p-12">
                <p className="md:text-xl lg:text-2xl">{t.q1}</p>
              </div>
              <div className="m-4 rounded-xl border-2 border-white bg-royal-blue p-4 text-white shadow-lg lg:mx-8 lg:p-12">
                <p className="md:text-xl lg:text-2xl">{t.q2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto p-4 md:hidden">
        <div className="m-4 rounded-xl border-2 border-white bg-royal-blue p-4 text-white shadow-lg lg:mx-8 lg:p-12">
          <p className="text-xl">
            Do you want to be part of tech-solutions for and national challenges
            in the educational area ?
          </p>
        </div>
        <div className="m-4 rounded-xl border-2 border-white bg-royal-blue p-4 text-white shadow-lg lg:mx-8 lg:p-12">
          <p className="text-xl">
            Do you have a problem in education that could be solved with the
            support of technology?
          </p>
        </div>
      </div> */}
    </>
  )
}

export default MainImage
