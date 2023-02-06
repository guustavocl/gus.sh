import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

let spotify_access_token: string | undefined = undefined;
const refresh_token =
  "AQA9vWhIm2L-87XgDtFrXSU1TBl33gbBXn786SRPqB9HYJl9LcWOo8_7KpokD_nC8MuFaxkZAdq7yIlFQNzrkpPnkJMqAncRM8Q6e7iO0EH-yhjR3-X85i80rBlWd9ZaKIU";

async function getRecentPlayed() {
  const response = await axios({
    method: "get",
    url: "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    headers: {
      "Authorization": `Bearer ${spotify_access_token}`,
      "Content-Type": "application/json",
    },
  });

  return response.data?.items?.[0];
}

async function getSpotifyToken(clientId: string, clientSecret: string) {
  try {
    const base64ClientCreds = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const response = await axios({
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        "Authorization": `Basic ${base64ClientCreds}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: `grant_type=client_credentials&scope=user-library-read%20user-follow-read&refresh_token=${refresh_token}`,
    });
    console.log("b4 ", response.data);
    spotify_access_token = response.data.access_token;
    console.log("after ", spotify_access_token);
  } catch (error) {
    console.error(error);
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    if (!spotify_access_token)
      await getSpotifyToken(process.env.SPOTIFY_CLIENT_ID as string, process.env.SPOTIFY_CLIENT_SECRET as string);

    let numberOfTries = 0;
    while (numberOfTries < 2) {
      try {
        const resp = await getRecentPlayed();
        if (resp) return res.status(200).json({ result: resp });
      } catch (error) {
        // console.log(error);
        await getSpotifyToken(process.env.SPOTIFY_CLIENT_ID as string, process.env.SPOTIFY_CLIENT_SECRET as string);
        numberOfTries += 1;
      }
    }

    // axios
    //   .get("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
    //     headers: {
    //       Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
    //     },
    //   })
    //   .then(response => {
    //     return res.status(200).json({ result: response.data?.items?.[0] });
    //   })
    //   .catch(() => {
    //     return res.status(500).json({ result: {} });
    //   });

    // axios
    //   .get("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
    //     headers: {
    //       Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
    //     },
    //   })
    //   .then(response => {
    //     return res.status(200).json({ result: response.data?.items?.[0] });
    //   })
    //   .catch(() => {
    //     return res.status(500).json({ result: {} });
    //   });
  }
}
