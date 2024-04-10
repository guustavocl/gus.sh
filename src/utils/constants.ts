export const BRTimeFormatter = new Intl.DateTimeFormat(undefined, {
  timeZone: "America/Sao_Paulo",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
});

export const USER_ID = process.env.discordUserId || "166331543378198528";

export const github_url = "https://github.com/guustavocl";
export const discord_url = "https://discord.com/users/166331543378198528";
export const spotify_url = "https://open.spotify.com/user/guustavocl";
export const twitter_url = "https://twitter.com/guustavocl";
export const linkedin_url = "https://linkedin.com/in/guustavocl/";
export const website_url = "https://zoz.bio/gustavo";
export const email_url = "mailto:hello@gus.sh";
export const instagram_url = "https://instagram.com/guustavocl";
export const devto_url = "https://dev.to/guustavocl";
export const flickr_url = "https://flickr.com/photos/guustavocl";
export const lastfm_url = "https://last.fm/user/Guustavocl";

export const projects = [
  {
    name: "gus.sh",
    url: "https://gus.sh",
    github: "https://github.com/guustavocl/gus.sh",
    description: "This is my personal website, it's the site you're currently on :)",
    status: "finished",
    cover: "/covers/cover-gus.png",
    stack: [
      {
        label: "Typescript",
        color: "",
      },
      {
        label: "Next.js",
        color: "",
      },
      {
        label: "TailwindCSS",
        color: "",
      },
    ],
  },
  {
    name: "Findomains",
    url: "https://findomains.net",
    github: undefined,
    description:
      "A SaaS project to help users in searching and checking the availability of new domains, also providing alerts when a domain is nearing expiration or is put up for sale.",
    status: "in progress",
    cover: "/covers/cover-findomains.png",
    stack: [
      {
        label: "Typescript",
        color: "",
      },
      {
        label: "Remix",
        color: "",
      },
      {
        label: "TailwindCSS",
        color: "",
      },
    ],
  },
  {
    name: "My Resume",
    url: "https://resume.gus.sh",
    github: "https://github.com/guustavocl/resume.gus.sh",
    description:
      "My software engineer resume as an web app, you can also choose between English or Portuguese and download as PDF.",
    status: "finished",
    cover: "/covers/cover-resume.png",
    stack: [
      {
        label: "Typescript",
        color: "",
      },
      {
        label: "Remix",
        color: "",
      },
      {
        label: "TailwindCSS",
        color: "",
      },
    ],
  },
  {
    name: "ZOZ.BIO",
    url: "https://zoz.bio",
    github: "https://github.com/guustavocl/zoz.bio-frontend",
    description:
      "It's a nice platform where you can create your bio page and link all your socials. It's still in development, but it's already functional. Check it out!",
    status: "in progress",
    cover: "/covers/cover-zoz.png",
    stack: [
      {
        label: "Typescript",
        color: "",
      },
      {
        label: "Next.js",
        color: "",
      },
      {
        label: "Express.js",
        color: "",
      },
      {
        label: "Mongodb",
        color: "",
      },
      {
        label: "TailwindCSS",
        color: "",
      },
    ],
  },
  {
    name: "Futures Bot",
    url: "https://futures.gus.sh",
    github: undefined,
    description:
      "It's a futures trading bot running on Binance, Currently on testing stage but with good results till now, check it out!",
    status: "in progress",
    cover: "/covers/cover-futures.png",
    stack: [
      {
        label: "Typescript",
        color: "",
      },
      {
        label: "Next.js",
        color: "",
      },
      {
        label: "TailwindCSS",
        color: "",
      },
      {
        label: "Express.js",
        color: "",
      },
      {
        label: "Mongodb",
        color: "",
      },
      {
        label: "Binance API",
        color: "",
      },
      {
        label: "Discord.js",
        color: "",
      },
    ],
  },
  {
    name: "Pi Dashboard",
    url: "https://pi.gus.sh",
    github: "https://github.com/guustavocl/raspberry-pi-dashboard",
    description:
      'This is my Raspberry Pi dashboard, which I use with an 8" screen to monitor crypto prices and control my IoT devices.',
    status: "in progress",
    cover: "/covers/cover-pi.png",
    stack: [
      {
        label: "Typescript",
        color: "",
      },
      {
        label: "Next.js",
        color: "",
      },
      {
        label: "TailwindCSS",
        color: "",
      },
      {
        label: "Home Assistant",
        color: "",
      },
    ],
  },
  {
    name: "Mail sender",
    url: undefined,
    github: "https://github.com/guustavocl/mail-sender",
    description:
      "It's an API to send emails by queuing them using Redis, Bull, and Amazon SES. I use this system to send emails in my other projects.",
    status: "in progress",
    cover: "/covers/cover-api.png",
    stack: [
      {
        label: "Typescript",
        color: "",
      },
      {
        label: "Express.js",
        color: "",
      },
      {
        label: "Redis",
        color: "",
      },
      {
        label: "Amazon SES",
        color: "",
      },
    ],
  },
];
