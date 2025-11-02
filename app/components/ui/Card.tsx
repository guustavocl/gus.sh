import { ComponentProps } from "react";
import { ReactNode } from "react";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";

type CardProps = {
  children: ReactNode;
  onClick?: () => void;
};

export function Card({ children, onClick, ...props }: CardProps & ComponentProps<"section">) {
  const { lightsOffClass } = useLightsContext();

  return (
    <button
      onClick={() => {
        if (onClick) onClick();
      }}
      className={cn(
        lightsOffClass ? "bg-card/4" : "bg-card/20",
        "flex overflow-hidden rounded-md backdrop-blur",
        props.className,
      )}
    >
      {children}
    </button>
  );
}
