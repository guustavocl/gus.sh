"use client";
import { LightsContext } from "@/providers/LightsProvider";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";

export function LightsOff() {
  const { lightsOn } = useContext(LightsContext);
  return (
    <div className="fixed -z-10 h-screen w-full">
      <span className={twMerge("firefly mt-16 flex w-full rotate-90 justify-center", lightsOn ? "hidden" : "display")}>
        :)
      </span>
    </div>
  );
}
