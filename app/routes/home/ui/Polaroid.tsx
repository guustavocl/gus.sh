import { ComponentProps } from "react";
import { Link } from "react-router";
import { useLightsContext } from "~/contexts/LightsContext";
import { flickr_url } from "~/lib/constants";
import { cn } from "~/lib/utils";

export function Polaroid({ ...props }: ComponentProps<"div">) {
  const { lightsOffClass } = useLightsContext();

  return (
    <Link
      className={cn(
        "polaroid group min-h-[21rem] bg-[#f2effc]/80 p-3 hover:cursor-pointer hover:brightness-75",
        "mb-4 flex flex-col backdrop-blur sm:col-span-6 sm:h-[26rem] md:mb-0 md:h-[22rem]",
        lightsOffClass,
        props.className,
      )}
      to={flickr_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative h-[45vh] bg-black/70 backdrop-blur sm:h-full">
        {/* TODO: make this photo change every refresh */}
        <img
          src="/flickr.webp"
          className={cn(
            "absolute inset-0 h-full w-full select-none hover:brightness-50",
            lightsOffClass ? "opacity-100 brightness-100" : "opacity-90 brightness-75",
          )}
          alt=""
        />
      </div>
      <h3 className="mt-3 w-full whitespace-nowrap py-2 text-center font-mono text-lg text-black">
        My photos on Flickr
      </h3>
    </Link>
  );
}
