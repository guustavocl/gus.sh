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

export const projects = [
  {
    name: "This website",
    url: "https://gus.sh",
    github: "https://github.com/guustavocl/gus.sh",
    description: "That's my personal website, it's the site your currently in :)",
    status: "finished",
    cover: "/covers/cover-gus.jpeg",
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
    name: "ZOZ.BIO",
    url: "https://zoz.bio",
    github: "https://github.com/guustavocl/zoz.bio-frontend",
    description:
      "A beauty platform to create your bio page and link all your socials, I'm still building it but its already usable, check it out!",
    status: "in progress",
    cover: "/covers/cover-zoz.jpeg",
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
      "A futures trading bot on Binance, It's on testing stage but with good results till now, check it out!",
    status: "in progress",
    cover: "/covers/cover-futures.jpeg",
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
      'My Raspberry Pi Dashboard that I use with a 8"screen to keep an eye on crypto prices and to control my IOT devices. Is kinda slow cause its running on my Pi local network',
    status: "in progress",
    cover: "/covers/cover-pi.jpeg",
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
      "An Express.js email queuing using Redis, Bull and Amazon SES. I use this to send emails in my other projects.",
    status: "in progress",
    cover: "/covers/cover-git.jpeg",
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
