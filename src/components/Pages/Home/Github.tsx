import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { github_url } from "@/utils/constants";

export function Github() {
  return (
    <Link
      href={github_url}
      target="_blank"
      rel="noopener noreferrer"
      className="lights relative h-36 w-full rounded-md bg-violet-700/20 backdrop-blur hover:cursor-pointer hover:brightness-75 sm:h-full"
    >
      <Image
        fill
        sizes="100"
        quality={10}
        src={"/github.webp"}
        className="w-full select-none rounded-md bg-gray-300 object-cover object-bottom opacity-70"
        alt="keyboard gif"
      />
      <SiGithub className="absolute m-4 text-3xl text-pink-100/90 glow-violet-500" />

      <span className="absolute bottom-2 right-4 w-full -space-y-1 text-right">
        <span className="block font-mono text-xl font-bold text-pink-200 md:text-glow-violet-500">GITHUB</span>
        <span className="display text-base font-bold text-pink-200 sm:block md:text-lg">
          check out my projects &amp; contributions
        </span>
      </span>
    </Link>
  );
}
