import Image from 'next/image'
import { useRouter } from 'next/router'

const Jury = () => {
  const router = useRouter()

  const { jury: t } = require(`@/assets/i18n/${router.locale}.json`)

  const jury = require(`@/assets/collections/jury/${router.locale}.json`)

  return (
    <div id="jury-mentors">
      <div className="mx-12 mt-12 flex-1">
        <h2 className="my-4 text-center text-2xl font-semibold">
          Jury and Prizes
        </h2>
        <p className="text-center">{t.prizesdescription}</p>
        <ul className="list-disc">
          <li>{t.criteria1}</li>
          <li>{t.criteria2}</li>
          <li>{t.criteria3}</li>
          <li>{t.criteria4}</li>
        </ul>
      </div>
      <div className="mx-12 mt-12 flex-1">
        <h2 className="my-4 text-center text-2xl font-semibold">{t.title}</h2>
        {/* <p className="text-center">{t.description}</p> */}
      </div>
      <div className="flex flex-1 flex-wrap justify-center">
        {jury.map((j: any, i: any) => (
          <div className="flex flex-col items-center p-4" key={i}>
            <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-royal-blue">
              <Image
                src={require(`@/assets/images/jury/${j.image}`)}
                layout="responsive"
                placeholder="blur"
                alt="Jury Image"
              />
            </div>
            <h2 className="my-4 text-center text-xl font-semibold">{j.name}</h2>
            <div className="text-center">
              <p className="mb-4">{j.title}</p>
              <p className="w-80">{j.tags}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jury
