import { useRouter } from 'next/router'
import { Button } from './Elements/Button'

const Program = () => {
  const router = useRouter()

  const { program: t } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <>
      <div className="w-full md:-translate-y-1/2">
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
      <div id="program" className="pt-16">
        <div className="my-32 md:flex">
          <div className="mx-12 flex-1">
            <h2 className="my-4 text-center text-2xl font-semibold md:ml-auto md:w-fit">
              {t.whatIs}
            </h2>
            <Button
              className="mx-auto md:ml-auto md:mr-0"
              onClick={() =>
                document
                  .getElementById('registration')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t.button.join}
            </Button>
          </div>
          <div className="mx-12 flex-1">
            <h2 className="my-4 text-2xl font-semibold">{t.program.title}</h2>
            <p>{t.program.description}</p>
          </div>
        </div>
        <div className="my-32 md:flex">
          <div className="mx-12 flex-1">
            <h2 className="my-4 text-center text-2xl font-semibold md:ml-auto md:w-fit">
              {t.whatKind}
            </h2>
            <Button
              className="mx-auto md:ml-auto md:mr-0"
              onClick={() =>
                document
                  .getElementById('registration')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t.button.submit}
            </Button>
          </div>
          <div className="mx-12 flex-1">
            <h2 className="my-4 text-2xl font-semibold">
              {t.challenges.title}
            </h2>
            <p>{t.challenges.description}</p>
          </div>
        </div>
        <div className="my-32 md:flex">
          <div className="mx-12 flex-1">
            <h2 className="my-4 text-center text-2xl font-semibold md:ml-auto md:w-fit">
              {t.participate}
            </h2>
            <Button
              className="mx-auto md:ml-auto md:mr-0"
              onClick={() =>
                document
                  .getElementById('registration')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t.button.apply}
            </Button>
          </div>
          <div className="mx-12 flex-1">
            <h2 className="my-4 text-2xl font-semibold">
              {t.participants.title}
            </h2>
            <p>{t.participants.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Program
