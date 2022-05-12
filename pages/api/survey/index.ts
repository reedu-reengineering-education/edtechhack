import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req
  const token = await getToken({ req })
  const userId = token?.sub

  console.log(userId)

  if (req.method === 'POST') {
    try {
      const survey = await prisma.survey.create({ data: { ...body, userId } })

      res.status(200).json(survey)
    } catch (e) {
      console.error(e)
      res.status(400).json({ error: e })
    }
  }
}

export default handler
