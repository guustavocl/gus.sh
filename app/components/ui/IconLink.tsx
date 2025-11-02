import { HTMLProps } from "react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { ArrowTooltip } from "./ArrowTooltip";

type IconLinkProps = {
  src: string;
  tooltip?: string;
};

export function IconLink({ src, tooltip, ...props }: IconLinkProps & HTMLProps<HTMLAnchorElement>) {
  return (
    <ArrowTooltip tooltip={tooltip || "Click to open"}>
      <Link
        id={`nav-item-${props.id}`}
        to={props.href || "/"}
        target={"_blank"}
        rel="noopener noreferrer"
        className={cn("select-none text-center")}
      >
        <img
          width={100}
          height={100}
          src={src}
          className={cn("h-7 w-7 opacity-75 hover:opacity-100", "hover:opacity-90", props.className)}
          alt=""
          sizes="(max-width: 768px) 50px, (max-width: 1200px) 50px, 40px"
        />
      </Link>
    </ArrowTooltip>
  );
}
