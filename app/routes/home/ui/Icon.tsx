import { IconType } from "react-icons";
import { ArrowTooltip } from "~/components/ui/ArrowTooltip";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";

interface IconProps {
  tooltip: string;
  className?: string;
  Component: IconType;
}

export function Icon({ tooltip, className = "", Component }: IconProps) {
  const { lightsOffClass } = useLightsContext();

  return (
    <ArrowTooltip tooltip={tooltip}>
      <span className={cn("h-full flex flex-row items-center justify-center", lightsOffClass)}>
        <Component
          className={cn("h-5 w-5 sm:h-8 sm:text-[2rem] text-primary opacity-60 hover:opacity-90", className)}
        />
      </span>
    </ArrowTooltip>
  );
}
