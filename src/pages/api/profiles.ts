import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@common/lib/mongodb'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const client = await clientPromise
    const db = client.db("imanager").collection("profiles")


    res.status(200).json({ name: 'John Doe' })
}
