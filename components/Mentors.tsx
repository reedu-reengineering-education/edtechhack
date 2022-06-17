import Image from 'next/image'
import { useRouter } from 'next/router'

const Mentors = () => {
  const router = useRouter()

  const { mentors: t } = require(`@/assets/i18n/${router.locale}.json`)

  const mentors = require(`@/assets/collections/mentors/${router.locale}.json`)

  return (
    <div>
      <div className="visible mx-12 flex-1">
        <h2 className="my-4 text-center text-2xl font-semibold">{t.title}</h2>
        <p className="text-center ">{t.description}</p>
      </div>
      <div className="mx-auto flex max-w-4xl flex-1 flex-wrap justify-center">
        {mentors.map((m: any, i: number) => (
          <div key={i} className="flex flex-col items-center p-4">
            <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-royal-blue bg-white">
              <Image
                src={require(`@/assets/images/mentors/${m.image}`)}
                layout="responsive"
                alt="mentor"
                placeholder="blur"
              />
            </div>
            <h2 className="my-4 text-center text-xl font-semibold">{m.name}</h2>
            <div className="text-center">
              <p className="mb-4 w-40">{m.title}</p>
              <p className="w-40">{m.tags}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mentors
