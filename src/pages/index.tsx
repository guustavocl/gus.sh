import AboutMe from "@/components/Home/AboutMe";
import Github from "@/components/Home/Github";
import Lanyard from "@/components/Home/Lanyard";
import Lights from "@/components/Lights";
import Map from "@/components/Home/Location";
import MainCard from "@/components/MainCard";
import Polaroid from "@/components/Home/Polaroid";
import Technologies from "@/components/Home/Technologies";
import Time from "@/components/Time";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { Data } from "use-lanyard";

export default function Home({ user }: { user: Data }) {
  return (
    <>
      <Head>
        <title>gus.sh</title>
        <meta name="description" content="Gustavo's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        key="maindiv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="relative mx-auto grid max-w-3xl grid-cols-12 gap-6 px-2 pb-40 sm:px-4 md:px-6"
      >
        <MainCard user={user} />

        <div className="col-span-4 flex h-full grid-cols-1 flex-col justify-evenly gap-4 md:col-span-2">
          <Time />
          <Lights />
        </div>

        <Map />
        <Lanyard user={user} />
        <Polaroid />

        <div className="group col-span-12 flex h-auto flex-col gap-6 sm:col-span-6 md:col-span-7 md:h-full">
          <Github />
          <Technologies />
        </div>

        <AboutMe />
      </motion.div>
    </>
  );
}
