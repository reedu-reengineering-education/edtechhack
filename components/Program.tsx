import { scrollToTargetAdjusted } from '@/utils'
import { useRouter } from 'next/router'
import { Button } from './Elements/Button'
import Image from 'next/image'
import Bar from '@/components/Elements/Bar'

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
      <div id="program">
        <div className="mb-32 md:flex">
          <div className="mx-12 flex-1">
            <h2 className="my-4 text-center text-2xl font-semibold md:ml-auto md:w-fit">
              {t.whatIs}
            </h2>
            <Button
              className="mx-auto md:ml-auto md:mr-0"
              onClick={() =>
                scrollToTargetAdjusted(document.getElementById('registration'))
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
                scrollToTargetAdjusted(document.getElementById('registration'))
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
                scrollToTargetAdjusted(document.getElementById('registration'))
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
        <Bar />
        <div className="my-32 md:flex">
          <div className="mx-12 flex-1">
            <h2 className="my-4 text-2xl font-semibold">
              {t.pocketevent.title}
            </h2>
            <p>
              This pre-event webinar will showcase the state of the art of
              digitalization in Education from the perspective of the two German
              Universities and will also explain the hackathon idea and inform
              about the program and the ways to participate.
            </p>
            <br />
            <p>Program (local Brazilian CET time): </p>
            <p>10am (Brazilian time) / 15 hours (CEST)</p>
            <br />
            <p>10:00 AM (BRT) | Welcome & Opening Remarks</p>
            <br />
            <p>
              Welcome & Moderation: Sören Metz (Technical University of Munich)
              and Christian Lazar (Freie Universität Berlin)
            </p>
            <br />
            <p>
              10:15 (BRT) | Digital Education - Quo vadis. Insights from two
              German universities of Excellence
              <ul>
                <li>
                  - Prof. Dr. Daniel Pittich (Assitant Professorship of
                  Technical Education - TUM)
                </li>
                <li>
                  - Dr. Antje Brock (Institut Futur, Freie Universität Berlin)
                </li>
              </ul>
            </p>
            <br />
            <p>
              10:45 (BRT) | German-Brazilian EdTech Hackathon
              <ul>
                <li>
                  - Thomas Bartoschek (re:edu) - presentation of the challenge
                  and the German-Brazilian EdTech Hackathon
                </li>
              </ul>
            </p>
            <br />
            <p>11:00 AM (BRT) | Q&A Session with all panelists</p>
            <br />
            <p>11:30 AM (BRT) | Wrap-Up Closing Remarks, Summary and Wrap Up</p>
            <br />
            <p>
              The webinar will be conducted in English. Questions can be asked
              by the audience in the webinar
            </p>
            <a
              href="https://bit.ly/EdTechPreEvent"
              className="text-blue-600 no-underline hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Signup for the event
            </a>
          </div>
          <div className="mx-12 flex-1">
            <Image
              src={require(`@/assets/images/pocketevent.png`)}
              layout="responsive"
              alt="mentor"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Program
