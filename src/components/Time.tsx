"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BRTimeFormatter } from "@/utils/constants";

export function Time() {
  const [time, setTime] = useState(() => new Date());

  const timeFormatted = BRTimeFormatter.format(time).split(":");
  const hours = timeFormatted[0];
  const minutes = timeFormatted[1];
  const isNight = Number(hours) >= 19 || Number(hours) < 7;

  // TODO fix this and all other timeouts
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lights center relative flex h-full items-center justify-center rounded-lg bg-violet-600/40 backdrop-blur">
      <Image
        fill
        sizes="100"
        quality={10}
        src={isNight ? "/night.jpg" : "/day.jpg"}
        className="z-10 w-full select-none rounded-md bg-gray-300 object-cover opacity-60"
        alt="time gif"
      />

      <div className="text-glow-violet-500 z-20 select-none text-center font-semibold text-pink-200">
        <h2 className="text-2xl">
          {hours}
          <span className="lights mx-0.5 animate-pulse">:</span>
          {minutes}
        </h2>
        <p className="text-sm font-light">in Brazil</p>
      </div>
    </div>
  );
}
