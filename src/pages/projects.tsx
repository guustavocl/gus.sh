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
        <Card className="group col-span-12 h-44 md:col-span-2">
          <div className="lights flex w-full animate-pulse select-none flex-col items-center justify-center text-5xl md:text-2xl">
            <span>🚧👷🚧</span>
          </div>
        </Card>
        <Card className="group col-span-12 h-44 text-pink-200 text-glow-violet-500">
          <h1 className="lights center font-boldext-white w-full select-none self-center text-center font-mono text-3xl">
            under construction
          </h1>
        </Card>
      </motion.div>
    </>
  );
}
