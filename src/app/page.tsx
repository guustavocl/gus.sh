import { Lights } from "@/components/MainCard/Lights";
import { Main } from "@/components/Main";
import { MainCard } from "@/components/MainCard/MainCard";
import { Time } from "@/components/Time";
import { Map } from "@/components/Pages/Home/Map";
import { Polaroid } from "@/components/Pages/Home/Polaroid";
import { Github } from "@/components/Pages/Home/Github";
import { Lanyard } from "@/components/Pages/Home/Lanyard";
import { Technologies } from "@/components/Pages/Home/Technologies";
import { AboutMe } from "@/components/Pages/Home/AboutMe";

export default async function Home() {
  return (
    <Main>
      <MainCard className="col-span-12 md:col-span-10" />

      <div className="col-span-4 flex h-full grid-cols-1 flex-col justify-evenly gap-4 md:col-span-2">
        <Time />
        <Lights />
      </div>

      <Map className="col-span-8 md:col-span-6" />
      <Lanyard className="col-span-12 md:col-span-6" />
      <Polaroid className="col-span-10 col-start-2 md:col-span-5" />
      <div className="group col-span-12 flex h-auto flex-col gap-6 sm:col-span-6 sm:h-full md:col-span-7">
        <Github />
        <Technologies />
      </div>
      <AboutMe className="col-span-12 md:col-span-12" />
    </Main>
  );
}
