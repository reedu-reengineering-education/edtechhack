import Image from 'next/image'

const Juri = () => {
  return (
    <div className="my-32 pt-28 lg:flex" id="juri-mentors">
      <div className="mx-12 flex-1">
        <h2 className="my-4 text-center text-2xl font-semibold lg:ml-auto lg:w-fit">
          The Juri
        </h2>
        <p className="text-center lg:ml-auto lg:mr-0 lg:w-fit">
          General description and the number of people
        </p>
      </div>
      <div className="flex flex-1 flex-wrap justify-center">
        <div className="flex flex-col items-center p-4">
          <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-royal-blue">
            <Image
              src={require('@/assets/juri/barto_new.jpeg')}
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
              src={require('@/assets/juri/barto_new.jpeg')}
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
              src={require('@/assets/juri/barto_new.jpeg')}
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
    </div>
  )
}

export default Juri
