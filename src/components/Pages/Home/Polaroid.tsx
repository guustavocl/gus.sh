import React, { ComponentProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { flickr_url } from "@/utils/constants";

export function Polaroid({ ...props }: ComponentProps<"div">) {
  return (
    <Link
      className={twMerge(
        "lights polaroid group min-h-[21rem] bg-[#f2effc]/70 p-3 hover:cursor-pointer hover:brightness-75",
        "mb-4 flex flex-col backdrop-blur sm:col-span-6 sm:h-[26rem] md:mb-0 md:h-[22rem]",
        props.className,
      )}
      href={flickr_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="lights h-[45vh] bg-black/70 backdrop-blur sm:h-full">
        {/* TODO: make this photo change every refresh */}
        <Image
          fill
          quality={100}
          src="/flickr.jpeg"
          className="h-full w-full select-none border object-cover opacity-90 brightness-75"
          alt="one of guustavocl flickr photos"
        />
      </div>
      <h3 className="mt-3 w-full whitespace-nowrap py-2 text-center font-mono text-lg text-black text-glow-violet-300">
        My photos on Flickr
      </h3>
    </Link>
  );
}
