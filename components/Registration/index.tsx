import { useRouter } from 'next/router'
import JotformEmbed from 'react-jotform-embed'
import { Spacer } from '../Elements/Spacer'

const Registration = () => {
  const router = useRouter()

  const { registration: t } = require(`@/assets/i18n/${router.locale}.json`)

  return (
    <>
      <div className="my-40">
        <div className="text-center" id="registration">
          <h1 className="mt-12 mb-8 text-3xl">{t.title}</h1>
          <h1 className="mt-12 mb-8 text-xl">{t.registrationSoon}</h1>
        </div>
        {/* <JotformEmbed src="https://form.jotform.com/230454066099358"></JotformEmbed> */}
      </div>
    </>
  )
}

export default Registration
