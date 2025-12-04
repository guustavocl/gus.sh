import { HTMLProps } from "react";
import { Link } from "react-router";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";

type ImageLinkProps = {
  label: string;
  image: string;
  status?: "online" | "closed";
};

export function ImageLink({ label, image, status, ...props }: ImageLinkProps & HTMLProps<HTMLAnchorElement>) {
  const { lightsOffClass } = useLightsContext();

  return (
    <Link
      id={`nav-item-${props.id}`}
      to={props.href || "/"}
      target={props.target}
      rel="noopener noreferrer"
      className={cn(lightsOffClass, "relative h-full select-none", props.className)}
    >
      <img
        src={image}
        className={cn("opacity-80 hover:opacity-100 object-contain h-full")}
        alt="social media icon"
      />
      <span
        className={cn(
          "absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform whitespace-nowrap",
          "rounded-md bg-black/70 px-4 py-1 text-xl",
          "flex items-center gap-2 w-40 text-center justify-center",
          "[text-shadow:0_0_7px_--theme(--color-accent/60%),0_0_5px_--theme(--color-accent/60%)]",
        )}
      >
        <span className="w-2.5">
          {status && (
            <span
              className={cn(
                "block h-2.5 w-2.5 animate-pulse rounded-full",
                status === "online" ? "bg-green-500" : "bg-red-500",
              )}
            />
          )}
        </span>
        {label}
      </span>
    </Link>
  );
}
