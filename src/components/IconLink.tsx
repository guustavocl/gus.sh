"use client";
import Link from "next/link";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

type IconLinkProps = {
  src: string;
};

export function IconLink({ src, ...props }: IconLinkProps & HTMLProps<HTMLAnchorElement>) {
  return (
    <Link
      id={`nav-item-${props.id}`}
      href={props.href || "/"}
      target={props.target}
      rel="noopener noreferrer"
      className={twMerge("select-none text-center")}
    >
      <Image
        width={100}
        height={100}
        quality={70}
        priority={false}
        src={src}
        className={twMerge("h-6 w-6 opacity-75 hover:opacity-100", props.className)}
        alt="social media icon"
        placeholder="empty"
        sizes="(max-width: 768px) 50px, (max-width: 1200px) 50px, 40px"
      />
    </Link>
  );
}
