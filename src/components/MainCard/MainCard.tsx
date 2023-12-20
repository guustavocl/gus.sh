import React, { ComponentProps } from "react";
import Image from "next/image";
import { Card } from "@/components/MainCard/Card";
import { twMerge } from "tailwind-merge";
import { Nav } from "../Nav";
import { SocialLinks } from "../SocialLinks";

export function MainCard({ ...props }: ComponentProps<"div">) {
  return (
    <Card
      className={twMerge(
        "lights relative flex h-56 w-full flex-row gap-2 backdrop-saturate-150 md:h-48",
        props.className,
      )}
    >
      <div
        className={twMerge(
          "relative z-10 mb-0 hidden h-full w-2/4 flex-col items-center justify-center md:flex",
          "arrow-card-avatar",
        )}
      >
        <Image
          fill
          quality={70}
          priority={true}
          src="/gustavo.jpg"
          className="z-20 flex select-none object-cover opacity-80"
          alt="guustavo photo"
          placeholder="empty"
          sizes="(max-width: 768px) 250px, (max-width: 1200px) 350px, 400px"
        />
      </div>

      <div className="flex w-full -translate-y-4 flex-col items-center justify-center md:-translate-x-2 md:translate-y-4 md:justify-start">
        <h1
          className={twMerge(
            "group relative flex cursor-pointer select-none flex-row items-end justify-center text-center text-4xl",
            "font-bold text-pink-200 text-glow-violet-500/60 hover:text-pink-100 hover:text-glow-pink-300/50",
            "md:justify-start md:text-left",
          )}
        >
          Gustavo
        </h1>

        <p className="flex w-full select-none flex-col items-center justify-center px-6 pb-4 text-center text-base text-pink-200 md:px-0 md:pb-2 md:text-left md:text-lg">
          <span className="whitespace-nowrap">self-taught software engineer from Brazil</span>
          <span className="whitespace-normal text-sm opacity-70 md:text-xs">
            I&apos;m currently available to work, so feel free to contact me. 👋
          </span>
        </p>

        <hr className="w-[95%] border-t border-t-pink-200/80 opacity-60 md:-ml-5 md:block md:w-full" />
        <SocialLinks />
      </div>
      <Nav className="absolute bottom-0 w-full bg-opacity-0" />
      {/* </div> */}
    </Card>
  );
}
