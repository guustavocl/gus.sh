import { ComponentProps } from "react";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";
import { NavItem } from "./NavItem";

export function Nav({ ...props }: ComponentProps<"nav">) {
  const { lightsOffClass } = useLightsContext();
  return (
    <nav
      className={cn(
        "absolute h-[1.3rem] sm:h-[1.8rem] bottom-0 w-full flex flex-row gap-0 whitespace-nowrap",
        "text-sm sm:text-base pl-32 sm:pl-38",
        "bg-black/30",
        lightsOffClass,
        props.className,
      )}
    >
      <NavItem
        id="home"
        href="/"
        label="home"
      />
      <NavItem
        id="projects"
        href="/projects"
        label="Projects"
      />
      <NavItem
        id="setup"
        href="/setup"
        label="Setup"
      />
      {/* <NavItem
        id="blog"
        href="/blog"
        label="Blog"
      /> */}
      <NavItem
        id="contact"
        href="/contact"
        label="Contact"
        className="nav-card-last"
      />
    </nav>
  );
}
