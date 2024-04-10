import React, { ComponentProps } from "react";
import { Card } from "../../MainCard/Card";
import { twMerge } from "tailwind-merge";

export function AboutMe({ ...props }: ComponentProps<"div">) {
  return (
    <Card className={twMerge("group h-auto select-none p-5 backdrop-blur", props.className)}>
      <section className="lights w-full">
        <span className="block font-mono text-xl font-bold text-pink-200 line-through md:text-glow-violet-500">
          HELLO WORLD
        </span>
        <div className="tracking-normal">
          <p className="mt-2 block text-base font-normal text-pink-200/70">
            Hello, I&apos;m Gustavo. Currently, I&apos;m doing full stack web development, building awesome platforms,
            and working on my personal projects. I always focus on delivering the best user experience with visually
            appealing designs, as well as scalable and secure infrastructures.
          </p>
          <p className="mt-2 block text-base font-normal text-pink-200/70">
            I&apos;m passionate about many things, including technology, designing and developing software, music, and
            photography. I have a strong desire to understand how things work and find the fastest and best ways to make
            them work. I enjoy seeking new inspirations and innovations, never stay in one place for too long!
          </p>
          <p className="mt-2 block text-base font-normal text-pink-200/70">
            I may write more or rewrite this entire section later, but I&apos;m leaving it as is for now because I want
            to publish this as soon as possible.
          </p>
        </div>
      </section>
    </Card>
  );
}
