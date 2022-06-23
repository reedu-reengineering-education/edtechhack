import { useRouter } from 'next/router'
import JotformEmbed from 'react-jotform-embed'
import { Spacer } from './Elements/Spacer'

const Registration = () => {
  const router = useRouter()

  const { registration: t } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <>
      <div className="text-center" id="submit_challenge">
        <h1 className="mt-12 mb-8 text-3xl">{t.challenge}</h1>
      </div>
      <JotformEmbed src="https://form.jotform.com/221726764180356"></JotformEmbed>
      <Spacer />
      <div className="text-center" id="registration">
        <h1 className="mt-12 mb-8 text-3xl">{t.title}</h1>
      </div>
      <JotformEmbed src="https://form.jotform.com/221491677243055"></JotformEmbed>
    </>
  )
}

export default Registration
