import React from "react";
import Card from "../Card";

const AboutMe = () => {
  return (
    <Card className="group col-span-12 h-auto select-none p-5 backdrop-blur md:col-span-12">
      <>
        <span className="lights w-full">
          <span className="block font-mono text-2xl font-bold text-pink-200 line-through text-glow-violet-500 sm:text-xl">
            HELLO WORLD
          </span>
          <div className="tracking-normal">
            <p className="mt-2 block text-base font-normal text-pink-200/70 text-glow-violet-500">
              Hello, I&apos;m Gustavo. Currently doing full stack web development, building awesome platforms and
              working on my personal projects. Always focusing in the best user experience with the perfect looks, plus
              scalable and secure infrastructures.
            </p>
            <p className="mt-2 block text-base font-normal text-pink-200/70 text-glow-violet-500">
              I&apos;m passionate about a lot of thigs; from technology, designing and developing software, to music and
              photography. I have a certain need to know how things works, and at the same time find the fastest and
              better way to make it works. I like to find new inspirations and inovations, never stay in one place for
              too long.
            </p>
            <p className="mt-2 block text-base font-normal text-pink-200/70 text-glow-violet-500">
              Gonna write more or rewrite this entire section latter, leaving like this for now cause I want to publish
              this asap.
            </p>
          </div>
        </span>
      </>
    </Card>
  );
};

export default React.memo(AboutMe);
