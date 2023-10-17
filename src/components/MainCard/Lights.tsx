"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { Card } from "./Card";
import { twMerge } from "tailwind-merge";
import { LightsContext } from "@/providers/LightsProvider";

export function Lights() {
  const { lightsOn, toggle } = useContext(LightsContext);

  useEffect(() => {
    if (lightsOn) {
      document.body.style.setProperty("--brightness-var", "1");
      document.body.style.setProperty("--grayscale-var", "0");
      document.body.style.setProperty("--opacity-var", "1");
    } else {
      document.body.style.setProperty("--brightness-var", "0.3");
      document.body.style.setProperty("--grayscale-var", "0.5");
      document.body.style.setProperty("--opacity-var", "0.8");
    }
  }, [lightsOn]);

  return (
    <Card className="group relative flex h-full cursor-pointer" onClick={() => toggle()}>
      <Image
        fill
        sizes="100"
        quality={10}
        src={"/light.svg"}
        className={twMerge(
          lightsOn ? "glow-yellow-200 opacity-90" : "glow-yellow-100 rotate-6 opacity-40",
          "z-10 w-full select-none rounded-md object-fill p-3",
        )}
        style={!lightsOn ? { filter: "grayscale(0.7)" } : {}}
        alt="ligh svg"
      />
    </Card>
  );
}
