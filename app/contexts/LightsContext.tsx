import { useEffect, useState } from "react";
import { createCustomContext } from "./CustomContext";

type LightsContextType = {
  lightsOffClass: string | null;
  toggle: () => void;
};

const useLights = () => {
  const [lightsOffClass, setLightsOffClass] = useState<string | null>(null);

  function toggle() {
    setLightsOffClass(lightsOffClass ? null : "lights-off");
  }

  useEffect(() => {
    if (lightsOffClass) {
      document.body.style.setProperty("--brightness-var", "0.3");
      document.body.style.setProperty("--grayscale-var", "0.5");
      document.body.style.setProperty("--opacity-var", "0.8");
    } else {
      document.body.style.setProperty("--brightness-var", "1");
      document.body.style.setProperty("--grayscale-var", "0");
      document.body.style.setProperty("--opacity-var", "1");
    }
  }, [lightsOffClass]);

  return { lightsOffClass, toggle };
};

const [LightsProvider, useLightsContext] = createCustomContext<LightsContextType>("Lights", useLights);

export { LightsProvider, useLightsContext };
