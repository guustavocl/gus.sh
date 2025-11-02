import { ReactNode } from "react";
import { cn } from "~/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../shadcn/tooltip";

type MyTooltipProps = React.ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  tooltipClassName?: string;
  tooltip: ReactNode;
  side?: "top" | "right" | "bottom" | "left" | undefined;
};

export function ArrowTooltip({ children, tooltip, side = "top", tooltipClassName, ...props }: MyTooltipProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={cn("", props.className)}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          className={cn("dark px-2 py-1 text-base border-0 z-20 bg-black/50", tooltipClassName)}
          sideOffset={5}
          showArrow={true}
          arrowClassName="fill-black/50"
        >
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
