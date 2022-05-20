import Image from 'next/image'
import Bar from './Elements/Bar'

const Mentors = () => {
  return (
    <div className="my-32 lg:flex">
      <div className="visible mx-12 flex-1 lg:hidden">
        <h2 className="my-4 text-center text-2xl font-semibold lg:w-fit">
          The Mentors and Mediators
        </h2>
        <p className="text-center lg:w-fit">
          General description about their role during the hackthon
        </p>
      </div>
      <div className="flex flex-1 flex-wrap justify-center">
        <div className="flex flex-col items-center p-4">
          <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-royal-blue">
            <Image
              src={require('@/assets/images/jury/barto_new.jpeg')}
              layout="responsive"
              alt="barto"
            />
          </div>
          <h2 className="my-4 text-center text-xl font-semibold">
            Dr. Thomas Bartoschek
          </h2>
          <div className="text-center">
            <p className="mb-4">Ph.D. Geoinformatik</p>
            <p className="w-40">#Science #Education #Speaking #UX #Vision</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-royal-blue">
            <Image
              src={require('@/assets/images/jury/barto_new.jpeg')}
              layout="responsive"
              alt="barto"
            />
          </div>
          <h2 className="my-4 text-center text-xl font-semibold">
            Dr. Thomas Bartoschek
          </h2>
          <div className="text-center">
            <p className="mb-4">Ph.D. Geoinformatik</p>
            <p className="w-40">#Science #Education #Speaking #UX #Vision</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-royal-blue">
            <Image
              src={require('@/assets/images/jury/barto_new.jpeg')}
              layout="responsive"
              alt="barto"
            />
          </div>
          <h2 className="my-4 text-center text-xl font-semibold">
            Dr. Thomas Bartoschek
          </h2>
          <div className="text-center">
            <p className="mb-4">Ph.D. Geoinformatik</p>
            <p className="w-40">#Science #Education #Speaking #UX #Vision</p>
          </div>
        </div>
      </div>
      <div className="mx-12 hidden flex-1 lg:block">
        <h2 className="my-4 text-center text-2xl font-semibold lg:w-fit">
          The Mentors and Mediators
        </h2>
        <p className="text-center lg:w-fit">
          General description about their role during the hackthon
        </p>
      </div>
    </div>
  )
}

export default Mentors
