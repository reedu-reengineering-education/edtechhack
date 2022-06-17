import { useRouter } from 'next/router'

const Timeline = () => {
  const router = useRouter()

  const { timeline: t } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <div id="timeline">
      <h1 className="text-center text-3xl">{t.title}</h1>

      <div className="md:flex">
        <div className="mx-8 flex-1">
          <ol className="relative mt-8 border-r-4 border-dotted border-royal-blue">
            <li className="mr-8 pb-10">
              <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
              <h2 className="my-2 ml-auto w-fit text-xl font-semibold">
                {t.start.title}
              </h2>
              <p className="mb-4 ml-auto w-fit">{t.start.date}</p>
              <p className="my-4 ml-auto w-fit text-right">{t.start.content}</p>
            </li>
            <li className="mr-8 pb-10">
              <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
              <h2 className="my-2 ml-auto w-fit text-xl font-semibold">
                {t.pocketevent.title}
              </h2>
              <p className="mb-4 ml-auto w-fit">{t.pocketevent.date}</p>
              <p className="ml-auto w-fit py-4 text-right">
                {t.pocketevent.content}{' '}
                <a
                  href="https://bit.ly/EdTechPreEvent"
                  className="text-blue-600 no-underline hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  More Information and Signup
                </a>
              </p>
            </li>
            <li className="mr-8 pb-10">
              <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
              <h2 className="my-2 ml-auto w-fit text-xl font-semibold">
                {t.deadline.title}
              </h2>
              <p className="mb-4 ml-auto w-fit">{t.deadline.date}</p>
              <p className="ml-auto w-fit py-4 text-right">
                {t.deadline.content}
              </p>
            </li>
          </ol>
          <ol className="relative border-r-4 border-royal-blue">
            <li className="mr-8 pb-10">
              <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
              <div className="md:translate-x-[calc(100%+4.5rem)]">
                <h2 className="mb-2 ml-auto w-fit text-xl font-semibold md:ml-0 md:mr-auto">
                  {t.day1.title}
                </h2>
                <p className="mb-4 ml-auto w-fit md:ml-0 md:mr-auto">
                  {t.day1.date}
                </p>
                <p className="my-4 ml-auto w-fit text-right md:mr-auto md:ml-0 md:text-left">
                  {t.day1.content}
                </p>
              </div>
            </li>
            <li className="mr-8 pb-10">
              <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
              <div className="md:translate-x-[calc(100%+4.5rem)]">
                <h2 className="mb-2 ml-auto w-fit text-xl font-semibold md:ml-0 md:mr-auto">
                  {t.day2.title}
                </h2>
                <p className="mb-4 ml-auto w-fit md:ml-0 md:mr-auto">
                  {t.day2.date}
                </p>
                <p className="my-4 ml-auto w-fit text-right md:mr-auto md:ml-0 md:text-left">
                  {t.day2.content}
                </p>
              </div>
            </li>
            <li className="mr-8 pb-10">
              <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
              <div className="md:translate-x-[calc(100%+4.5rem)]">
                <h2 className="mb-2 ml-auto w-fit text-xl font-semibold md:ml-0 md:mr-auto">
                  {t.day3.title}
                </h2>
                <p className="mb-4 ml-auto w-fit md:ml-0 md:mr-auto">
                  {t.day3.date}
                </p>
                <p className="my-4 ml-auto w-fit text-right md:mr-auto md:ml-0 md:text-left">
                  {t.day3.content}
                </p>
              </div>
            </li>
          </ol>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  )
}

export default Timeline
