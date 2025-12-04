import { Card } from "~/components/ui/Card";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";
import { Route } from "../+types/_layout";

export function meta({ matches }: Route.MetaArgs) {
  const rootMeta = matches[0]?.meta || [];
  const titleDescriptor = rootMeta.find((meta) => "title" in meta);
  const existingTitle = titleDescriptor && "title" in titleDescriptor ? titleDescriptor.title : "";

  return [...rootMeta.filter((meta) => !("title" in meta)), { title: `${existingTitle} - Projects` }];
}

export default function Projects() {
  const { lightsOffClass } = useLightsContext();

  return (
    <>
      <Card className={"group col-span-12 h-auto select-none p-5"}>
        <span className={cn(lightsOffClass, "w-full")}>
          <span className="block font-mono text-xl font-bold text-pink-200 [text-shadow:0_0_7px_--theme(--color-accent/60%),0_0_5px_--theme(--color-accent/60%)]">
            UNDER CONSTRUCTION
          </span>
          <div className="tracking-normal">
            <p className="mt-2 block text-base font-normal text-pink-200/70">
              I plan to show here my blog posts in the future, but for now it&apos;s empty sorry 😢
            </p>
          </div>
        </span>
      </Card>
    </>
  );
}
