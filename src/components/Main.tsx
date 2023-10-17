import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Motion } from "./Motion";

type MainProps = ComponentProps<"main"> & {
  children: ReactNode;
};

export async function Main({ children, ...props }: MainProps) {
  return (
    <main className={twMerge("container relative z-10 w-full max-w-[48rem] pb-40 pt-16", props.className)}>
      <Motion>{children}</Motion>
    </main>
  );
}
