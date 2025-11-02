import { ComponentProps } from "react";
import { Card } from "~/components/ui/Card";
import { Nav } from "~/components/ui/Nav";
import { SocialLinks } from "~/components/ui/SocialLinks";
import { main_card_description, main_card_description_2, main_card_name } from "~/config";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";

export function MainCard({ ...props }: ComponentProps<"div">) {
  const { lightsOffClass } = useLightsContext();

  return (
    <Card
      className={cn(
        "relative flex w-full flex-row gap-2 backdrop-saturate-150 h-[12.5rem] max-h-[12.5rem]",
        props.className,
      )}
    >
      <div
        className={cn(
          "relative z-10 mb-0 hidden h-full w-2/4 flex-col items-center justify-center md:flex",
          "arrow-card-avatar",
          lightsOffClass,
        )}
      >
        <img
          src="/gustavo.webp"
          className="z-20 flex select-none object-cover opacity-80"
          alt=""
          sizes="(max-width: 768px) 250px, (max-width: 1200px) 350px, 400px"
        />
      </div>

      <div
        className={cn(
          "flex w-full -translate-y-4 flex-col items-center justify-center md:-translate-x-2 md:translate-y-4 md:justify-start",
          lightsOffClass,
        )}
      >
        <h1
          className={cn(
            "group relative flex cursor-pointer select-none flex-row items-end justify-center text-center text-4xl",
            "font-bold text-primary hover:text-white md:justify-start md:text-left",
            "[text-shadow:0_0_7px_theme(colors.accent/60%),0_0_5px_theme(colors.accent/60%)]",
          )}
        >
          {main_card_name}
        </h1>

        <p className="flex w-full select-none flex-col items-center justify-center px-6 pb-4 text-center text-base text-secondary md:px-0 md:pb-2 md:text-left md:text-lg">
          <span className="whitespace-nowrap">{main_card_description}</span>
          <span className="whitespace-normal text-sm opacity-70">{main_card_description_2}</span>
        </p>

        <hr className="w-[95%] border-t border-t-secondary/80 opacity-60 md:-ml-5 md:block md:w-full" />
        <SocialLinks />
      </div>
      <Nav />
    </Card>
  );
}
