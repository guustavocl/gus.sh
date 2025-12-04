import { ComponentProps } from "react";
import { Card } from "~/components/ui/Card";
import { Nav } from "~/components/ui/Nav";
import { SocialLinks } from "~/components/ui/SocialLinks";
import { main_card_description_1, main_card_description_2, main_card_name } from "~/config";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";

export function MainCard({ ...props }: ComponentProps<"div">) {
  const { lightsOffClass } = useLightsContext();

  return (
    <Card
      className={cn(
        "flex relative w-full flex-row gap-2 backdrop-saturate-150 min-h-52 max-h-52 md:max-h-48 md:min-h-48",
        props.className,
      )}
    >
      <div className={cn("relative z-10 arrow-card-avatar w-2/4", lightsOffClass)}>
        <img
          src="/gustavo.webp"
          width={400}
          height={192}
          fetchPriority="high"
          className="z-20 flex select-none object-cover opacity-80 h-full w-full"
          alt="Gustavo profile"
          sizes="(max-width: 768px) 250px, (max-width: 1200px) 350px, 400px"
        />
      </div>

      <div className={cn("flex w-full flex-col items-center -translate-x-2 justify-evenly")}>
        <h1
          className={cn(
            "group relative flex cursor-pointer select-none flex-row items-end justify-center text-center text-4xl sm:text-4xl",
            "font-bold text-primary hover:text-white justify-start text-left translate-y-2",
            "[text-shadow:0_0_7px_--theme(--color-accent/60%),0_0_5px_--theme(--color-accent/60%)]",
            lightsOffClass,
          )}
        >
          {main_card_name}
        </h1>

        <p
          className={cn(
            "flex w-full select-none flex-col items-center justify-center text-center text-secondary text-sm sm:text-lg",
            lightsOffClass,
          )}
        >
          <span className="whitespace-nowrap text-xl md:text-lg">{main_card_description_1}</span>
          <span className="whitespace-normal text-base md:text-sm opacity-70">{main_card_description_2}</span>
        </p>

        <hr
          className={cn(
            "hidden sm:block border-t-2 border-t-secondary/30 opacity-60 -translate-x-0.5 w-full",
            lightsOffClass,
          )}
        />
        <SocialLinks />
        <span className="h-8 md:h-[1.8rem]"></span>
      </div>
      <Nav />
    </Card>
  );
}
