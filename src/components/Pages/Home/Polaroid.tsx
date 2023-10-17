import React, { ComponentProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export function Polaroid({ ...props }: ComponentProps<"div">) {
  return (
    <Link
      className={twMerge(
        "lights polaroid group max-h-[23rem] min-h-[21rem] bg-[#f2effc]/70 p-3.5 hover:cursor-pointer hover:brightness-75",
        "mb-4 pb-16 backdrop-blur sm:col-span-6 sm:h-72 sm:max-h-[23rem] sm:min-h-[21rem] md:mb-0 md:h-[22rem]",
        props.className,
      )}
      href="https://flickr.com/photos/guustavocl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="lights h-full bg-black/70 backdrop-blur">
        {/* TODO: make this photo change every refresh */}
        <Image
          quality={70}
          src="https://live.staticflickr.com/65535/52660123015_851be77ecd_c.jpg"
          height={512}
          width={512}
          className="brightness-80 h-[19rem] w-full select-none border object-cover opacity-70 group-hover:brightness-75 md:h-full"
          alt="flickr photo"
        />
      </div>
      <h3 className="mt-3 w-full whitespace-nowrap text-center font-mono text-lg text-black text-glow-violet-300">
        My photos on Flickr
      </h3>
    </Link>
  );
}
