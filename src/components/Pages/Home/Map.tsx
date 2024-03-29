import React, { ComponentProps } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function Map({ ...props }: ComponentProps<"div">) {
  return (
    <div
      className={twMerge(
        "lights group relative flex h-48 rounded-md bg-violet-700/20 backdrop-blur md:h-full",
        props.className,
      )}
    >
      <Image
        fill
        sizes="100"
        quality={10}
        src="/offline.png"
        className="select-none rounded-md bg-gray-300 object-cover opacity-50"
        alt="map location"
      />

      <div className="relative mx-2 my-4 w-40 animate-pulse rounded-lg opacity-70 drop-shadow-2xl">
        <span className="absolute m-2.5 h-2 w-2 rounded-full bg-red-600" />
        <span className="lights ml-6 select-none font-bold tracking-tighter text-pink-300/80 hue-rotate-15 text-glow-red-500 sm:text-xl md:text-left">
          tracking offline
        </span>
      </div>

      <div className="absolute left-1/2 top-1/2 flex w-full flex-shrink-0 -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
        <div aria-hidden className="absolute translate-y-[14px]">
          <span className="block h-12 w-12 animate-ping rounded-full bg-violet-300 duration-1000" />
        </div>
        <Image
          quality={50}
          src={"/scott.jpg"}
          alt="Photo of me above a map of my current location"
          height={60}
          width={60}
          className="lights h-15 w-15 z-20 rounded-full border-2 border-pink-200 transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-110"
        />
        <p className="lights rounded-lg bg-black/50 pl-2.5 pr-3 font-bold tracking-tighter text-pink-200 sm:text-xl md:text-left">
          📍 Toledo
        </p>
      </div>
    </div>
  );
}
