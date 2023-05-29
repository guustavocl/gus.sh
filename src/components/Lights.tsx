import React, { useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useLights } from "@/hooks/useLights";
import Card from "./Card";

const Lights = () => {
  const lights = useLights();

  useEffect(() => {
    if (lights.on) {
      document.body.style.setProperty("--brightness-var", "1");
      document.body.style.setProperty("--grayscale-var", "0");
      document.body.style.setProperty("--opacity-var", "1");
    } else {
      document.body.style.setProperty("--brightness-var", "0.3");
      document.body.style.setProperty("--grayscale-var", "0.5");
      document.body.style.setProperty("--opacity-var", "0.8");
    }
  }, [lights]);

  return (
    <Card className="group relative flex h-full cursor-pointer" onClick={() => lights.setLightsOn(!lights.on)}>
      <Image
        fill
        sizes="100"
        quality={10}
        src={"/light.svg"}
        className={clsx(
          lights.on ? "opacity-90 glow-yellow-200" : "rotate-6 opacity-40 glow-yellow-100",
          "z-10 w-full select-none rounded-md object-fill p-3"
        )}
        style={!lights.on ? { filter: "grayscale(0.7)" } : {}}
        alt="ligh svg"
      />
    </Card>
  );
};

export default React.memo(Lights);
