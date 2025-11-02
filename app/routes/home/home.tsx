import { Route } from "../+types/_layout";
import { AboutMe } from "./ui/AboutMe";
import { Github } from "./ui/Github";
import { Lanyard } from "./ui/Lanyard";
import { Map } from "./ui/Map";
import { Polaroid } from "./ui/Polaroid";
import { Technologies } from "./ui/Technologies";

export function meta({ matches }: Route.MetaArgs) {
  const rootMeta = matches[0]?.meta || [];
  const titleDescriptor = rootMeta.find((meta) => "title" in meta);
  const existingTitle = titleDescriptor && "title" in titleDescriptor ? titleDescriptor.title : "";

  return [...rootMeta.filter((meta) => !("title" in meta)), { title: `${existingTitle} - home` }];
}

export default function Home() {
  return (
    <>
      <Map className="col-span-8 md:col-span-6" />
      <Lanyard className="col-span-12 md:col-span-6" />
      <Polaroid className="col-span-10 col-start-2 md:col-span-5" />
      <div className="group col-span-12 flex h-auto flex-col gap-6 sm:col-span-6 sm:h-full md:col-span-7">
        <Github />
        <Technologies />
      </div>
      <AboutMe className="col-span-12 md:col-span-12" />
    </>
  );
}
