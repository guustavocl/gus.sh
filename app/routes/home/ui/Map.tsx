import {
  Cloud,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Map as MapIcon,
  Minus,
  Navigation,
  Plus,
  Sun,
} from "lucide-react";
import { ComponentProps, useEffect, useState } from "react";
import { open_meteo_url } from "~/config";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";

interface WeatherData {
  temp: number;
  weathercode: number;
}

function getWeatherIcon(weathercode: number) {
  if (weathercode >= 95) {
    return CloudLightning;
  } else if (weathercode >= 80) {
    return CloudRain;
  } else if (weathercode >= 71) {
    return CloudSnow;
  } else if (weathercode >= 51) {
    return CloudRain;
  } else if (weathercode >= 45) {
    return Cloud;
  } else if (weathercode >= 1) {
    return Cloud;
  }
  return Sun;
}

export function Map({ ...props }: ComponentProps<"div">) {
  const { lightsOffClass } = useLightsContext();
  const [weather, setWeather] = useState<WeatherData>();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(open_meteo_url);
        if (!response.ok) throw new Error("Weather API error");

        const data = await response.json();
        setWeather({
          temp: Math.round(data.current_weather.temperature),
          weathercode: data.current_weather.weathercode,
        });
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    };

    fetchWeather();
  }, []);

  const WeatherIcon = getWeatherIcon(weather?.weathercode || 0);

  return (
    <div
      className={cn(
        "group relative flex h-full rounded-md bg-card/20 backdrop-blur select-none overflow-hidden",
        props.className,
      )}
    >
      <img
        src="/map.webp"
        className={cn(
          "fixed inset-0 h-full w-full select-none rounded-md object-cover object-[center_40%] opacity-50",
          lightsOffClass,
        )}
        alt=""
      />

      <div className={cn("relative w-40 rounded-lg drop-shadow-2xl opacity-90", lightsOffClass)}>
        <div className="group/controls flex flex-row gap-2 p-2">
          <div className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#FF5C5F] border border-red-500 cursor-pointer">
            <span className="text-slate-800/70 text-sm font-bold opacity-0 group-hover/controls:opacity-100 transition-opacity leading-none">
              ×
            </span>
          </div>
          <div className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#FFBD44] cursor-pointer">
            <span className="text-slate-800/70 text-sm font-bold opacity-0 group-hover/controls:opacity-100 transition-opacity leading-none">
              −
            </span>
          </div>
          <div className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#00CA4E] cursor-pointer">
            <div className="flex flex-col items-center justify-center gap-[0.08rem] opacity-0 group-hover/controls:opacity-100 transition-opacity -rotate-45">
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-slate-800/70"></div>
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-slate-800/70"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 flex w-full flex-shrink-0 -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-2">
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <span className={cn("block h-12 w-12 animate-ping rounded-full bg-accent duration-1000", lightsOffClass)} />
          </div>
          <img
            src={"/scott.jpg"}
            alt=""
            height={60}
            width={60}
            className={cn(
              "h-15 w-15 z-20 rounded-full border-2 border-secondary transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-110",
              lightsOffClass,
            )}
          />
        </div>
      </div>

      <div className={cn("absolute top-0 right-0 p-1", lightsOffClass)}>
        <div className="flex flex-col gap-1">
          <div className="bg-slate-900/70 rounded-full border border-slate-400/10 backdrop-blur-3xl">
            <div className="flex items-center justify-center p-1 cursor-pointer">
              <MapIcon className="w-3 h-3 text-slate-800/70 fill-slate-100" />
            </div>
            <div className="flex items-center justify-center p-1 cursor-pointer">
              <Navigation className="w-3 h-3 text-slate-100" />
            </div>
          </div>
          <div className="bg-slate-900/70 rounded-full border border-slate-400/10 backdrop-blur-3xl">
            <div className="flex items-center justify-center p-1 cursor-pointer">
              <Plus className="w-3 h-3 text-slate-100" />
            </div>
            <div className="flex items-center justify-center p-1 cursor-pointer">
              <Minus className="w-3 h-3 text-slate-100" />
            </div>
          </div>
        </div>
      </div>

      <div className={cn("absolute bottom-0 right-0 p-1", lightsOffClass)}>
        {weather && (
          <div className="bg-slate-900/70 rounded-lg flex flex-row gap-1 items-center justify-center p-0.5 px-1 border-1 border-slate-400/10 backdrop-blur-3xl cursor-pointer">
            <WeatherIcon className="w-3 h-3 fill-slate-100" />
            <span className="text-[0.8rem] font-medium text-slate-100">{weather.temp}°</span>
          </div>
        )}
      </div>
    </div>
  );
}
