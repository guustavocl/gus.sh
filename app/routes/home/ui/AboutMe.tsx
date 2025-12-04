import { ComponentProps } from "react";
import { Card } from "~/components/ui/Card";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";

export function AboutMe({ ...props }: ComponentProps<"div">) {
  const { lightsOffClass } = useLightsContext();

  return (
    <Card className={cn("group h-auto select-none p-5 backdrop-blur text-left", props.className)}>
      <section className={cn("w-full", lightsOffClass)}>
        <span
          className={cn(
            "block font-mono text-3xl md:text-2xl font-bold text-primary line-through",
            "[text-shadow:0_0_3px_--theme(--color-accent/60%),0_0_3px_--theme(--color-accent/60%)]",
          )}
        >
          HELLO WORLD
        </span>
        <div className="tracking-normal">
          <p className="mt-2 block text-lg md:text-base font-normal text-secondary/80">
            Hello, I&apos;m Gustavo. Currently, I&apos;m doing full stack web development, building awesome platforms,
            and working on my personal projects. I always focus on delivering the best user experience with visually
            appealing designs, as well as scalable and secure infrastructures.
          </p>
          <p className="mt-2 block text-lg md:text-base font-normal text-secondary/80">
            I&apos;m passionate about many things, including technology, designing and developing software, music, and
            photography. I have a strong desire to understand how things work and find the fastest and best ways to make
            them work. I enjoy seeking new inspirations and innovations, never stay in one place for too long!
          </p>
          <p className="mt-2 block text-lg md:text-base font-normal text-secondary/80">
            I may write more or rewrite this entire section later, but I&apos;m leaving it as is for now because I want
            to publish this as soon as possible.
          </p>
        </div>
      </section>
    </Card>
  );
}
