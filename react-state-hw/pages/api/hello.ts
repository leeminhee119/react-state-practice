// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface dateDataInterface {
  year: number;
  month: number;
  date: number;
}

type Data = {
  artistName: string;
  productName: string;
  url: string;
  date: dateDataInterface;
  location: string;
  thumbnailUrl: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let dateData = {
    year: 2023,
    month: 3,
    date: 15
  }
  let koData = {
    artistName: '박효신',
    productName: '2023 - 봄 콘서트',
    url: 'https://ticket.interpark.com',
    date: dateData,
    location: '고척 스카이돔',
    thumbnailUrl: '**'
  }
  res.status(200).json(koData)
}
