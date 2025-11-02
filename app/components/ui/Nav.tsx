import { ComponentProps } from "react";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";
import { NavItem } from "./NavItem";

export function Nav({ ...props }: ComponentProps<"nav">) {
  const { lightsOffClass } = useLightsContext();
  return (
    <nav
      className={cn(
        "absolute h-[1.8rem] bottom-0 w-full flex flex-row gap-0 whitespace-nowrap text-base pl-[7.5rem] sm:pl-[9.5rem]",
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
        className="nav-card-last"
      />
      <NavItem
        id="contact"
        href="/contact"
        label="Contact"
      />
    </nav>
  );
}
