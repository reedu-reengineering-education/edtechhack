import { useRouter } from 'next/router'

const SurveyStudio = () => {
  const router = useRouter()
  return <div>{router.query.id}</div>
}

export default SurveyStudio
