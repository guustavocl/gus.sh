import { AboutMe } from "./ui/AboutMe";
import { Github } from "./ui/Github";
import { Lanyard } from "./ui/Lanyard";
import { Map } from "./ui/Map";
import { Polaroid } from "./ui/Polaroid";
import { Technologies } from "./ui/Technologies";

export default function Home() {
  return (
    <>
      <Map className="col-span-6" />
      <Lanyard className="col-span-6" />
      <Polaroid className="col-span-5" />
      <div className="group col-span-7 flex flex-col gap-4 sm:gap-6">
        <Github />
        <Technologies />
      </div>
      <AboutMe className="col-span-12" />
    </>
  );
}
