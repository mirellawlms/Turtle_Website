// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/db'
import { Prisma } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Mirella' })
  prisma.user.create({data:{vorname:'Mirella', nachname:'Willems', email:'test',matrikel:77880}})
}
