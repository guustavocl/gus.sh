import { Lights } from "@/components/MainCard/Lights";
import { Main } from "@/components/Main";
import { MainCard } from "@/components/MainCard/MainCard";
import { Time } from "@/components/Time";

export default async function Blog() {
  return (
    <Main>
      <MainCard className="col-span-12 md:col-span-10" />
      <div className="col-span-4 hidden h-full grid-cols-1 flex-col justify-evenly gap-4 md:col-span-2 md:flex">
        <Time />
        <Lights />
      </div>
    </Main>
  );
}
