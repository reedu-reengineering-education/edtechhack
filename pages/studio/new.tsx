import { Spinner } from '@/components/Elements/Spinner'
import axios from '@/lib/axios'
// import axios from '@/lib/axios'
import { Survey } from '@prisma/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NewSurvey = () => {
  const router = useRouter()

  useEffect(() => {
    const redirect = async () => {
      const getIdRequest = await axios.post<Survey>('/api/survey')
      const survey = await getIdRequest.data
      router.replace(`/studio/${survey.id}`)
    }

    redirect().catch(console.error)
  }, [router])

  return (
    <div>
      <Spinner className="mx-auto my-20" />
    </div>
  )
}

export default NewSurvey
