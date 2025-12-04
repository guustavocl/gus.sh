import { ComponentProps } from "react";
import { Link } from "react-router";
import { flickr_url } from "~/config";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";

export function Polaroid({ ...props }: ComponentProps<"div">) {
  const { lightsOffClass } = useLightsContext();

  return (
    <div className={cn("flex flex-col items-center justify-center", props.className)}>
      <Link
        className={cn(
          "polaroid group bg-[#f2effc]/80 p-3 hover:cursor-pointer hover:brightness-75",
          "my-0 flex flex-col backdrop-blur mb-0 h-60 sm:h-88 w-full",
          lightsOffClass,
        )}
        to={flickr_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative bg-black/70 backdrop-blur h-full">
          {/* TODO: make this photo change every refresh */}
          <img
            src="/flickr.webp"
            width={300}
            height={400}
            loading="lazy"
            className={cn(
              "absolute inset-0 h-full w-full select-none hover:brightness-50",
              lightsOffClass ? "opacity-100 brightness-100" : "opacity-90 brightness-75",
            )}
            alt="Photography from Flickr gallery"
          />
        </div>
        <span className="mt-3 w-full whitespace-nowrap py-2 text-center font-mono text-xs sm:text-lg text-black">
          My photos on Flickr
        </span>
      </Link>
    </div>
  );
}
