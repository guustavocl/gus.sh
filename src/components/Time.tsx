import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BRTimeFormatter } from "@/utils/constants";

const Time = () => {
  const [time, setTime] = useState(() => new Date());

  const timeFormatted = BRTimeFormatter.format(time).split(":");
  const hours = timeFormatted[0];
  const minutes = timeFormatted[1];
  const isNight = Number(hours) >= 19 || Number(hours) < 7;

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
        src={isNight ? "/night.jpg" : "/day.jpg"}
        className="z-10 w-full select-none rounded-md bg-gray-300 object-cover opacity-60"
        alt="time gif"
      />

      <div className="z-20 select-none text-center font-semibold text-pink-200 text-glow-violet-500">
        <h2 className="text-2xl">
          {hours}
          <span className="mx-0.5 animate-pulse">:</span>
          {minutes}
        </h2>
        <p className="text-sm font-light">in Brazil</p>
      </div>
    </div>
  );
};

export default React.memo(Time);
