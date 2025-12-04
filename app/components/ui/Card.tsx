import { ComponentProps } from "react";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";

export function Card({ children, className, ...props }: ComponentProps<"button">) {
  const { lightsOffClass } = useLightsContext();

  return (
    <button
      type="button"
      className={cn(
        lightsOffClass ? "bg-card/4" : "bg-card/20",
        "flex overflow-hidden rounded-md backdrop-blur",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
