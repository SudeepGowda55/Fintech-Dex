// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import qs from "qs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const query = qs.stringify(req.query);
  const response = await fetch(`https://polygon.api.0x.org/swap/v1/price?${query}`, { headers: { "0x-api-key": "3a75f698-dd35-4f15-a2ec-79bd6d8eb6c4" } });

  const data = await response.json();

  res.status(200).json(data);
}
