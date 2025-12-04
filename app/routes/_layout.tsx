import { cloneElement, useRef } from "react";
import { useLocation, useOutlet } from "react-router";
import { Background } from "~/components/Background";
import { Lights } from "~/components/Lights";
import { Time } from "~/components/Time";
import { Main } from "~/components/ui/Main";
import { Motion } from "~/components/ui/Motion";
import { MainCard } from "../components/MainCard";

export default function Layout() {
  const location = useLocation();
  const outlet = useOutlet();
  const outletRef = useRef(outlet);

  if (outlet) {
    outletRef.current = outlet;
  }

  return (
    <>
      <Background />
      <Main>
        <div className="grid w-full grid-cols-12 gap-4 sm:gap-6">
          <MainCard className="col-span-10" />
          <div className="col-span-2 flex h-full grid-cols-1 flex-col justify-evenly gap-3 sm:gap-6">
            <Time />
            <Lights />
          </div>
          <Motion
            locationKey={location.pathname}
            className="col-span-12 grid grid-cols-12 gap-4 sm:gap-6"
          >
            {outletRef.current && cloneElement(outletRef.current, { key: location.pathname })}
          </Motion>
        </div>
      </Main>
    </>
  );
}
