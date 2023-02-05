import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    axios
      .get("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
        headers: {
          Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
        },
      })
      .then(response => {
        return res.status(200).json({ result: response.data?.items?.[0] });
      })
      .catch(() => {
        return res.status(500).json({ result: {} });
      });
  }
}
