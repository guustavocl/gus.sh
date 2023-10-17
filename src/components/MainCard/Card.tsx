"use client";
import React, { ComponentProps, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
import { LightsContext } from "@/providers/LightsProvider";

type CardProps = {
  children: ReactNode;
  onClick?: () => void;
};

export function Card({ children, onClick, ...props }: CardProps & ComponentProps<"section">) {
  const { lightsOn } = useContext(LightsContext);

  return (
    <section
      onClick={() => {
        if (onClick) onClick();
      }}
      className={twMerge(
        lightsOn ? "bg-violet-700/20" : "bg-violet-700/01",
        "flex overflow-hidden rounded-md border-violet-500 backdrop-blur",
        props.className,
      )}
    >
      {children}
    </section>
  );
}
