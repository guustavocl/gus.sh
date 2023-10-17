import { Lights } from "@/components/MainCard/Lights";
import { Main } from "@/components/Main";
import { MainCard } from "@/components/MainCard/MainCard";
import { Time } from "@/components/Time";
import { Card } from "@/components/MainCard/Card";
import { projects } from "@/utils/constants";
import { ImageLink } from "@/components/ImageLink";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default async function Projects() {
  return (
    <Main>
      <MainCard className="col-span-12 md:col-span-10" />
      <div className="col-span-4 hidden h-full grid-cols-1 flex-col justify-evenly gap-4 md:col-span-2 md:flex">
        <Time />
        <Lights />
      </div>

      {projects &&
        projects.map((project, idx) => (
          <Card
            key={idx}
            className="lights group relative col-span-12 flex h-full flex-col gap-2 text-pink-200 text-glow-violet-500 md:grid md:h-44 md:grid-cols-12"
          >
            <ImageLink
              id={`project-${idx}`}
              label={project.name}
              href={project.url}
              target="_blank"
              image={project.cover}
              className="col-span-5"
            />
            <div className="col-span-7 flex flex-col items-center justify-center gap-2 p-2 text-center text-sm">
              <span className="">{project.description}</span>
              <div className="flex flex-row gap-2">
                <Link
                  href={project.github || "#"}
                  target={project.url ? "_blank" : "_self"}
                  className={twMerge(
                    "flex flex-row items-center justify-center gap-1 whitespace-nowrap rounded bg-black/40 px-2 py-0.5",
                    !project.github ? "cursor-not-allowed brightness-50" : "",
                  )}
                >
                  <img className="w-5" src="/icons/github.png" />
                  Git repository
                </Link>
                <Link
                  href={project.url || "#"}
                  target={project.url ? "_blank" : "_self"}
                  className={twMerge(
                    "flex flex-row items-center justify-center gap-1 whitespace-nowrap rounded bg-black/40 px-2 py-0.5",
                    !project.url ? "cursor-not-allowed brightness-50" : "",
                  )}
                >
                  <img className="w-5" src="/icons/website.png" />
                  Project URL
                </Link>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                {project.stack &&
                  project.stack.map((map, idx2) => (
                    <div
                      key={idx2}
                      className={twMerge("whitespace-nowrap rounded bg-blue-700/30 px-2 py-0.5 glow-pink-300/40")}
                    >
                      {map.label}
                    </div>
                  ))}
              </div>
            </div>
          </Card>
        ))}
    </Main>
  );
}
