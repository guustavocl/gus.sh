import { Link } from "react-router";
import { Card } from "~/components/ui/Card";
import { ImageLink } from "~/components/ui/ImageLink";
import { projects } from "~/config";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";
import { Route } from "../+types/_layout";

export type Project = {
  name: string;
  url?: string;
  github?: string;
  description: string;
  status: "online" | "closed";
  cover: string;
  stack: Array<{ label: string; color: string }>;
};

export function meta({ matches }: Route.MetaArgs) {
  const rootMeta = matches[0]?.meta || [];
  const titleDescriptor = rootMeta.find((meta) => "title" in meta);
  const existingTitle = titleDescriptor && "title" in titleDescriptor ? titleDescriptor.title : "";

  return [...rootMeta.filter((meta) => !("title" in meta)), { title: `${existingTitle} - Projects` }];
}

export default function Projects() {
  const { lightsOffClass } = useLightsContext();

  return (
    <>
      {projects &&
        projects.map((project: Project, idx: number) => (
          <Card
            key={idx}
            className="group relative col-span-12 flex-col gap-2 text-pink-200 grid h-44 grid-cols-12"
          >
            <ImageLink
              id={`project-${idx}`}
              label={project.name}
              href={project.url || project.github}
              target="_blank"
              image={project.cover}
              status={project.status}
              className="col-span-5"
            />
            <div
              className={cn(
                lightsOffClass,
                "col-span-7 flex flex-col items-center justify-center gap-2 p-2 text-center text-sm",
              )}
            >
              <span className="">{project.description}</span>
              <div className="flex flex-row gap-2">
                <Link
                  to={project.github || "/projects"}
                  target={project.github ? "_blank" : "_self"}
                  className={cn(
                    "flex flex-row items-center justify-center gap-1 whitespace-nowrap rounded bg-black/40 px-2 py-0.5",
                    !project.github ? "cursor-not-allowed brightness-50" : "",
                  )}
                >
                  <img
                    className="w-5"
                    src="/icons/github.png"
                    alt="github icon"
                  />
                  Git repository
                </Link>
                <Link
                  to={project.url || "/projects"}
                  target={project.url ? "_blank" : "_self"}
                  className={cn(
                    "flex flex-row items-center justify-center gap-1 whitespace-nowrap rounded bg-black/40 px-2 py-0.5",
                    !project.url ? "cursor-not-allowed brightness-50" : "",
                  )}
                >
                  <img
                    className="w-5"
                    src="/icons/website.png"
                    alt="website icon"
                  />
                  Project URL
                </Link>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                {project.stack &&
                  project.stack.map((map, idx2) => (
                    <div
                      key={idx2}
                      className={cn("whitespace-nowrap rounded bg-blue-700/30 px-2 py-0.5")}
                    >
                      {map.label}
                    </div>
                  ))}
              </div>
            </div>
          </Card>
        ))}
    </>
  );
}
