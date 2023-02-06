import Head from "next/head";
import MainCard from "@/components/MainCard";
import { motion } from "framer-motion";
import { Data } from "use-lanyard";
import Card from "@/components/Card";

export default function NotFound({ user }: { user: Data }) {
  return (
    <>
      <Head>
        <title>gus.sh</title>
        <meta name="description" content="404 Page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        key="maindiv"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="relative mx-auto grid max-w-3xl grid-cols-12 gap-6 px-6 pb-40"
      >
        <MainCard user={user} />
        <Card className="group col-span-12 h-44 md:col-span-2">
          <div className="flex w-full animate-pulse select-none flex-col items-center justify-center font-mono text-7xl text-pink-200 text-glow-violet-500 md:text-5xl">
            404
          </div>
        </Card>
        <Card className="group col-span-12 h-44 text-pink-200 text-glow-violet-500">
          <h1 className="center w-full select-none self-center text-center text-3xl font-bold text-black dark:text-white">
            It appears that what you&apos;re looking for isn&apos;t here.
          </h1>
        </Card>
      </motion.div>
    </>
  );
}
