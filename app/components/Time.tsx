import { useEffect, useState } from "react";
import { country } from "~/config";
import { useLightsContext } from "~/contexts/LightsContext";
import { BRTimeFormatter, cn } from "~/lib/utils";
import { Card } from "./ui/Card";

export function Time() {
  const [time, setTime] = useState(() => new Date());
  const { lightsOffClass } = useLightsContext();

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
    <Card className="relative flex h-full items-center justify-center">
      <img
        src={isNight ? "/night.webp" : "/day.webp"}
        width={100}
        height={100}
        loading="lazy"
        className={cn(
          "absolute inset-0 z-10 h-full w-full select-none object-cover",
          isNight ? "opacity-50" : "opacity-40",
          lightsOffClass,
        )}
        alt={isNight ? "Night sky" : "Day sky"}
      />

      <div className={cn("z-20 select-none text-center font-semibold text-secondary", lightsOffClass)}>
        <p className="text-xl sm:text-2xl">
          {hours}
          <span className="mx-0.5 animate-pulse">:</span>
          {minutes}
        </p>
        <p className="text-xs sm:text-sm font-light">in {country}</p>
      </div>
    </Card>
  );
}
