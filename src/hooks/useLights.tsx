import { createContext, useState, useContext } from "react";

type LightsProvider = {
  children: JSX.Element;
};

type Lights = {
  on: boolean;
  setLightsOn: (on: boolean) => void;
};

const LightsContext = createContext<Lights>({} as Lights);

const LightsProvider = ({ children }: LightsProvider) => {
  const [on, setOn] = useState(true);

  async function setLightsOn(on: boolean) {
    setOn(on);
  }

  return <LightsContext.Provider value={{ on, setLightsOn }}>{children}</LightsContext.Provider>;
};

export const useLights = () => {
  const context = useContext(LightsContext);
  return context;
};

export default LightsProvider;
