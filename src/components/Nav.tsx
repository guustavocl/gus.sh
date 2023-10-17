import React, { ComponentProps } from "react";
import { NavItem } from "./NavItem";
import { twMerge } from "tailwind-merge";

export function Nav({ ...props }: ComponentProps<"nav">) {
  return (
    <nav
      className={twMerge(
        "absolute bottom-0 left-0 flex w-full flex-row gap-0 whitespace-nowrap bg-black/20 text-sm md:pl-[9.5rem] md:text-base",
        props.className,
      )}
    >
      <NavItem id="home" href="/" label="home" />
      <NavItem id="projects" href="/projects" label="Projects" />
      <NavItem id="contact" href="/contact" label="Contact" />
      <NavItem id="contact" href="/blog" label="Blog" />
      <NavItem id="contact" href="/resume" label="Resume" className="nav-card-last" />
    </nav>
  );
}
