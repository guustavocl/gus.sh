"use client";
import Link from "next/link";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

type ImageLinkProps = {
  label: string;
  image: string;
};

export function ImageLink({ label, image, ...props }: ImageLinkProps & HTMLProps<HTMLAnchorElement>) {
  return (
    <Link
      id={`nav-item-${props.id}`}
      href={props.href || "/"}
      target={props.target}
      rel="noopener noreferrer"
      className={twMerge("relative h-20 select-none md:h-full", props.className)}
    >
      <Image
        fill
        quality={80}
        priority={false}
        src={image}
        className={twMerge("object-cover opacity-80 hover:opacity-100 md:object-contain")}
        alt="social media icon"
        placeholder="empty"
        sizes="(max-width: 768px) 500px, (max-width: 1200px) 1024px, 400px"
      />
      <span
        className={twMerge(
          "absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap",
          "rounded-md bg-black/70 px-4 py-1 text-xl text-glow-pink-300",
        )}
      >
        {label}
      </span>
    </Link>
  );
}
