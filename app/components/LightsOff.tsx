import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";

export function LightsOff() {
  const { lightsOffClass } = useLightsContext();
  return (
    <div className="fixed -z-10 h-screen w-full">
      <span className={cn("firefly mt-16 flex w-full rotate-90 justify-center", lightsOffClass ? "display" : "hidden")}>
        :)
      </span>
    </div>
  );
}
