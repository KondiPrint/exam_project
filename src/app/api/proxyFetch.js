// pages/api/proxyFetch.js

import fetchData from '@/app/lib/fetchData';

export default async function handler(req, res) {
  const { url, method, body } = req.body;

  const { data, error } = await fetchData(url, method, body);

  if (error) {
    res.status(500).json({ error });
  } else {
    res.status(200).json(data);
  }
}
