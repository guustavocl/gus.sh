/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.discordapp.com", "i.scdn.co", "live.staticflickr.com", "api.mapbox.com"],
  },
};

module.exports = nextConfig;
