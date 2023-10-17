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
};

export function NavItem({ id, label, href, target = "", ...props }: NavItemProps & ComponentProps<"a">) {
  const pathname = usePathname();
  return (
    <Link
      id={`nav-item-${id}`}
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={twMerge(
        "nav-card -ml-[0.64rem] h-full w-full select-none whitespace-nowrap px-4 py-0.5 text-center",
        "text-glow-pink-300 hover:text-pink-100 hover:opacity-100 hover:brightness-75",
        "opacity-80 hover:bg-black/30",
        props.className,
        href === pathname ? "bg-black/50" : "",
      )}
    >
      {label.toUpperCase()}
    </Link>
  );
}
