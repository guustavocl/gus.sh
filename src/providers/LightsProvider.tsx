"use client";
import { ReactNode, createContext, useState } from "react";

type LightsContextType = {
  lightsOn: boolean;
  toggle: () => void;
};

export const LightsContext = createContext({} as LightsContextType);

export function LightsProvider({ children }: { children: ReactNode }) {
  const [lightsOn, setLightsOn] = useState(true);
  function toggle() {
    setLightsOn(state => !state);
  }

  return <LightsContext.Provider value={{ lightsOn, toggle }}>{children}</LightsContext.Provider>;
}
