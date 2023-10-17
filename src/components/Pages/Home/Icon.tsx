"use client";
import React from "react";
import Tippy from "@tippyjs/react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface IconProps {
  tooltip: string;
  className?: string;
  Component: IconType;
}

export function Icon({ tooltip, className = "", Component }: IconProps) {
  return (
    <Tippy content={tooltip} theme="translucent">
      <span className="lights h-full">
        <Component
          className={twMerge(
            className,
            "h-7 text-4xl text-pink-100/90 opacity-60 glow-violet-500 hover:opacity-90 sm:h-6 sm:text-2xl md:h-8 md:text-3xl",
          )}
        />
      </span>
    </Tippy>
  );
}
