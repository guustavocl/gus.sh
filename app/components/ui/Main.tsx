import { ReactNode } from "react";
import { cn } from "~/lib/utils";

type MainProps = React.ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

export function Main({ children, ...props }: MainProps) {
  return (
    <main
      className={cn(
        "container mx-auto px-[0.8rem] flex flex-1 flex-col items-center bg-alternative z-10 w-full max-w-3xl pb-40 pt-16",
        props.className,
      )}
    >
      {children}
    </main>
  );
}
