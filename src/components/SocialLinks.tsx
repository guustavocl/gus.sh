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
} from "@/utils/constants";
import { IconLink } from "./IconLink";

export function SocialLinks() {
  return (
    <div className="relative flex w-full flex-row items-center justify-center gap-2 pt-2">
      <IconLink id="icon-in" tooltip="Linkedin" href={linkedin_url} src="/icons/linkedin.png" />
      <IconLink id="icon-github" tooltip="Github" href={github_url} src="/icons/github.png" />
      <IconLink id="icon-email" tooltip="Email" href={email_url} src="/icons/email.png" />
      <IconLink id="icon-spotify" tooltip="Spotify" href={spotify_url} src="/icons/spotify.png" />
      <IconLink id="icon-lastfm" tooltip="Last.fm" href={lastfm_url} src="/icons/lastfm.png" />
      <IconLink id="icon-discord" tooltip="Discord" href={discord_url} src="/icons/discord.png" />
      <IconLink id="icon-twitter" tooltip="Twitter" href={twitter_url} src="/icons/twitter.png" />
      <IconLink id="icon-insta" tooltip="Instragram" href={instagram_url} src="/icons/instagram.png" />
      <IconLink id="icon-flickr" tooltip="Flickr" href={flickr_url} src="/icons/flickr.png" />
      <IconLink id="icon-devto" tooltip="Dev.to" href={devto_url} src="/icons/code.png" />
    </div>
  );
}
