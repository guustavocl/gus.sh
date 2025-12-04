import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";
import { Card } from "./ui/Card";

export function Lights() {
  const { lightsOffClass, toggle } = useLightsContext();

  return (
    <Card
      className="group relative flex h-full cursor-pointer hover:brightness-75"
      onClick={() => {
        toggle();
      }}
      aria-label={lightsOffClass ? "Turn lights on" : "Turn lights off"}
    >
      <img
        sizes="100"
        src={"/light.svg"}
        fetchPriority="high"
        className={cn(
          !lightsOffClass
            ? "opacity-90 filter-[drop-shadow(0px_0px_4px_var(--color-yellow-200))]"
            : "rotate-6 opacity-40 filter-[drop-shadow(0px_0px_4px_var(--color-yellow-100))]",
          "z-10 w-full select-none rounded-md object-fill p-3",
        )}
        style={lightsOffClass ? { filter: "grayscale(0.7)" } : {}}
        alt="Light switch"
      />
    </Card>
  );
}
