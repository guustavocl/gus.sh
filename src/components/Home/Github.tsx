import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SiGithub } from "react-icons/si";

const Github = () => {
  return (
    <Link
      href="https://github.com/guustavocl"
      target="_blank"
      rel="noopener noreferrer"
      className="lights link-card relative h-full w-full rounded-md bg-violet-700/20 p-2 backdrop-blur"
    >
      <Image
        fill
        src={"/github.gif"}
        className="w-full select-none rounded-md bg-gray-300 object-cover object-bottom opacity-70"
        alt="keyboard gif"
      />
      <SiGithub className="absolute right-4 text-3xl text-pink-100/90 glow-violet-500 md:left-4" />

      <span className="absolute bottom-2 right-4 w-full -space-y-1 text-right">
        <span className="block font-mono text-xl font-bold text-pink-200 text-glow-violet-500">GITHUB</span>
        <span className="hidden text-base font-bold text-pink-200 text-glow-violet-500 sm:block">
          my projects &amp; contributions
        </span>
      </span>
    </Link>
  );
};

export default React.memo(Github);
