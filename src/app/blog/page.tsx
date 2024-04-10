import { Lights } from "@/components/MainCard/Lights";
import { Main } from "@/components/Main";
import { MainCard } from "@/components/MainCard/MainCard";
import { Time } from "@/components/Time";
import { Card } from "@/components/MainCard/Card";

export default async function Blog() {
  return (
    <Main>
      <MainCard className="col-span-12 md:col-span-10" />
      <div className="col-span-4 hidden h-full grid-cols-1 flex-col justify-evenly gap-4 md:col-span-2 md:flex">
        <Time />
        <Lights />
      </div>
      <Card className={"group col-span-12 h-auto select-none p-5"}>
        <span className="lights w-full">
          <span className="block font-mono text-xl font-bold text-pink-200 md:text-glow-violet-500">
            UNDER CONSTRUCTION
          </span>
          <div className="tracking-normal">
            <p className="mt-2 block text-base font-normal text-pink-200/70">
              I plan to show here my blog posts in the future, but for now it&apos;s empty sorry 😢
            </p>
          </div>
        </span>
      </Card>
    </Main>
  );
}
