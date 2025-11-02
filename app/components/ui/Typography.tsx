import { ReactNode } from "react";
import { cn } from "~/lib/utils";

type TypographyProps = React.ComponentPropsWithoutRef<"span"> & {
  children: ReactNode;
};

export function Typography({ children, ...props }: TypographyProps) {
  return <span className={cn("text-base font-medium", props.className)}>{children}</span>;
}
