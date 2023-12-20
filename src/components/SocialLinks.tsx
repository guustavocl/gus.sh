"use client";
import {
  devto_url,
  discord_url,
  email_url,
  flickr_url,
  github_url,
  instagram_url,
  lastfm_url,
  linkedin_url,
  spotify_url,
  twitter_url,
  // website_url,
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
      <IconLink id="icon-github" tooltip="Github" href={github_url} target="_blank" src="/icons/github.png" />
      {/* <IconLink id="icon-website" tooltip="Links" href={website_url} target="_blank" src="/icons/website.png" /> */}
      <IconLink id="icon-email" tooltip="Email" href={email_url} target="_blank" src="/icons/email.png" />
      <IconLink id="icon-spotify" tooltip="Spotify" href={spotify_url} target="_blank" src="/icons/spotify.png" />
      <IconLink id="icon-lastfm" tooltip="Last.fm" href={lastfm_url} target="_blank" src="/icons/lastfm.png" />
      <IconLink id="icon-discord" tooltip="Discord" href={discord_url} target="_blank" src="/icons/discord.png" />
      <IconLink id="icon-twitter" tooltip="Twitter" href={twitter_url} target="_blank" src="/icons/twitter.png" />
      <IconLink id="icon-insta" tooltip="Instragram" href={instagram_url} target="_blank" src="/icons/instagram.png" />
      <IconLink id="icon-flickr" tooltip="Flickr" href={flickr_url} target="_blank" src="/icons/flickr.png" />
      <IconLink id="icon-devto" tooltip="Dev.to" href={devto_url} target="_blank" src="/icons/code.png" />
    </div>
  );
}
