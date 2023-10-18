"use client";
import React, { ComponentProps } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

type NavItemProps = {
  id: string;
  label: string;
  href: string;
  target?: string;
  mobile?: string;
};

export function NavItem({ id, label, href, target = "", mobile, ...props }: NavItemProps & ComponentProps<"a">) {
  const pathname = usePathname();
  return (
    <Link
      id={`nav-item-${id}`}
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={twMerge(
        "nav-card -ml-[0.64rem] h-full w-full select-none whitespace-nowrap py-0.5 text-center",
        "hover:opacity-100 hover:brightness-75",
        "opacity-80 hover:bg-black/30",
        props.className,
        href === pathname ? "bg-black/50" : "",
      )}
    >
      {mobile ? (
        <>
          <span className={twMerge("flex w-full translate-x-1 px-2 text-pink-300 md:hidden")}>{mobile}</span>
          <span className={twMerge("hidden px-[0.85rem] text-glow-pink-300 hover:text-pink-100 md:flex md:px-4")}>
            {label.toUpperCase()}
          </span>
        </>
      ) : (
        <span className={twMerge("px-[0.85rem] text-glow-pink-300 hover:text-pink-100 md:px-4")}>
          {label.toUpperCase()}
        </span>
      )}
    </Link>
  );
}
