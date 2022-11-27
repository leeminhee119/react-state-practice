// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface dateDataInterface {
  year: number;
  month: number;
  date: number;
}

type Data = {
  ko_artist_name: string;
  ko_product_name: string;
  url: string;
  date: dateDataInterface;
  ko_location: string;
  ko_thumbnail_url: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let dateData:dateDataInterface = {
    year: 2023,
    month: 3,
    date: 15
  }
  let data = {
    url: 'https://ticket.interpark.com',
    date: dateData,

    ko_artist_name: '박효신',
    ko_product_name: '2023 - 봄 콘서트',
    ko_location: '고척 스카이돔',
    ko_thumbnail_url: '**',

    en_artist_name: 'ParkHyoShin',
    en_product_name: '2023 - Spring Concert',
    en_location: 'Gocheok SkyDome',
    en_thumbnail_url: '**',

    ja_artist_name: 'パク・ヒョシン',
    ja_product_name: '2023 - 春 コンサート',
    ja_location: '高尺スカイドーム',
    ja_thumbnail_url: '**'
  }
  res.status(200).json(data)
}
