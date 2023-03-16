import { useRouter } from 'next/router'
import JotformEmbed from 'react-jotform-embed'
import { Spacer } from '../Elements/Spacer'

const ChallengeSubmission = () => {
  const router = useRouter()

  const {
    challengeSubmission: t,
  } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <>
      <div className="my-40">
        <div className="text-center" id="challengeSubmission">
          <h1 className="mt-12 mb-8 text-3xl">{t.title}</h1>
          {/* <h1 className="mt-12 mb-8 text-xl">{t.challengeOver}</h1> */}
        </div>
        <JotformEmbed src="https://form.jotform.com/230453798261360"></JotformEmbed>
      </div>
    </>
  )
}

export default ChallengeSubmission
