import React from "react";
import Image from "next/image";
import Card from "../Card";
import Link from "next/link";

const AboutMe = () => {
  return (
    <Card className="group col-span-12 h-auto select-none p-5 backdrop-blur md:col-span-12">
      <>
        {/* <Image
          fill
          src={"/github.gif"}
          className="w-full select-none rounded-md bg-gray-300 object-cover object-bottom opacity-70"
          alt="keyboard gif"
        /> */}
        {/* <SiGithub className="absolute right-4 text-3xl text-pink-100/90 glow-violet-500 md:left-4" /> */}

        <span className="lights w-full">
          <span className="block font-mono text-xl font-bold text-pink-200 line-through text-glow-violet-500">
            HELLO WORLD
          </span>
          <div className="tracking-normal">
            <p className="mt-2 block text-base font-normal text-pink-200/70 text-glow-violet-500">
              Hello, my name is Gustavo. I&apos;m currently doing full stack web development, building awesome platforms
              and working on my personal projects. Always focusing in the best user experience with the perfect looks,
              plus scalable and secure infrastructures.
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
          {/* <span className="hidden text-base font-bold text-pink-200 text-glow-violet-500 sm:block">
            my projects &amp; contributions
          </span> */}
        </span>
      </>
    </Card>
  );
};

export default React.memo(AboutMe);
