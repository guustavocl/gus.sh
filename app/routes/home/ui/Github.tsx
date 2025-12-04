import { SiGithub } from "react-icons/si";
import { Link } from "react-router";
import { github_url } from "~/config";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";

export function Github() {
  const { lightsOffClass } = useLightsContext();
  return (
    <Link
      to={github_url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative w-full rounded-md backdrop-blur hover:cursor-pointer hover:brightness-75 h-full",
        lightsOffClass ? "bg-card/20 brightness-75" : "bg-card/20",
      )}
    >
      <video
        src="/github.webm"
        width={400}
        height={200}
        autoPlay
        loop
        muted
        playsInline
        className={cn(
          "absolute inset-0 h-full w-full select-none rounded-md object-cover object-bottom opacity-60",
          lightsOffClass,
        )}
        aria-label="GitHub contributions graph"
      />
      <SiGithub className={cn("absolute m-4 text-3xl text-primary", lightsOffClass)} />

      <span className={cn("absolute bottom-2 right-4 w-full -space-y-1 text-right", lightsOffClass)}>
        <span
          className={cn(
            "block font-mono sm:text-xl font-bold text-primary",
            "[text-shadow:0_0_3px_--theme(--color-accent/60%),0_0_3px_--theme(--color-accent/60%)]",
          )}
        >
          GITHUB
        </span>
        <span className="display text-xs sm:text-lg font-bold text-secondary">
          check out my projects &amp; contributions
        </span>
      </span>
    </Link>
  );
}
