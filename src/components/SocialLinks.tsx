"use client";
import {
  devto_url,
  discord_url,
  email_url,
  github_url,
  instagram_url,
  linkedin_url,
  spotify_url,
  twitter_url,
  website_url,
} from "@/utils/constants";
import { IconLink } from "./IconLink";

export function SocialLinks() {
  return (
    <div className="relative flex w-full flex-row items-center justify-center gap-2 pt-2">
      <IconLink
        id="icon-linkedin"
        href={linkedin_url}
        target="_blank"
        src="/icons/linkedin.png"
        className="-translate-y-0.5"
      />
      <IconLink id="icon-github" href={github_url} target="_blank" src="/icons/github.png" />
      <IconLink id="icon-website" href={website_url} target="_blank" src="/icons/website.png" />
      <IconLink id="icon-email" href={email_url} target="_blank" src="/icons/email.png" />
      <IconLink id="icon-spotify" href={spotify_url} target="_blank" src="/icons/spotify.png" />
      <IconLink id="icon-discord" href={discord_url} target="_blank" src="/icons/discord.png" />
      <IconLink id="icon-twitter" href={twitter_url} target="_blank" src="/icons/twitter.png" />
      <IconLink id="icon-twitter" href={instagram_url} target="_blank" src="/icons/instagram.png" />
      <IconLink id="icon-devto" href={devto_url} target="_blank" src="/icons/code.png" />
    </div>
  );
}
