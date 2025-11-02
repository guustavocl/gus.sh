import { Outlet } from "react-router";
import { Background } from "~/components/Background";
import { Lights } from "~/components/Lights";
import { Time } from "~/components/Time";
import { Main } from "~/components/ui/Main";
import { MainCard } from "../components/MainCard";

export default function Layout() {
  return (
    <>
      <Background />
      <Main>
        <div className="grid w-full grid-cols-12 gap-4 md:gap-6 scale-95 md:scale-100">
          <MainCard className="col-span-12 sm:col-span-10" />
          <div className="col-span-3 sm:col-span-2 flex h-full grid-cols-1 flex-col justify-evenly gap-3 sm:gap-4 md:gap-6">
            <Time />
            <Lights />
          </div>
          <Outlet />
        </div>
      </Main>
    </>
  );
}
