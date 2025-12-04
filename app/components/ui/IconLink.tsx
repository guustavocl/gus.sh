import { HTMLProps } from "react";
import { Link } from "react-router";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";
import { ArrowTooltip } from "./ArrowTooltip";

type IconLinkProps = {
  src: string;
  tooltip?: string;
};

export function IconLink({ src, tooltip, ...props }: IconLinkProps & HTMLProps<HTMLAnchorElement>) {
  const { lightsOffClass } = useLightsContext();

  return (
    <ArrowTooltip tooltip={tooltip || "Click to open"}>
      <Link
        id={`nav-item-${props.id}`}
        to={props.href || "/"}
        target={"_blank"}
        rel="noopener noreferrer"
        className={cn("select-none text-center")}
        aria-label={tooltip || "Social link"}
      >
        <img
          width={28}
          height={28}
          src={src}
          fetchPriority="high"
          className={cn(
            "w-6 h-6 sm:h-7 sm:w-7 opacity-75",
            "hover:opacity-90",
            `${lightsOffClass} hover:lights-on`,
            props.className,
          )}
          alt={tooltip || "Social icon"}
        />
      </Link>
    </ArrowTooltip>
  );
}
