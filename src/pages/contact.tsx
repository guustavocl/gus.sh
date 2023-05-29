import { motion } from "framer-motion";
import Head from "next/head";
import MainCard from "@/components/MainCard";
import Time from "@/components/Time";
import Lights from "@/components/Lights";
import Card from "@/components/Card";
import Form from "@/components/Contact/Form";
import { SiDiscord, SiInstagram } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

export default function Contact() {
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
        <MainCard />
        <div className="col-span-4 flex h-full grid-cols-1 flex-col justify-evenly gap-4 md:col-span-2">
          <Time />
          <Lights />
        </div>
        <div className="col-span-8 row-start-2 flex h-44 w-full flex-col gap-4 sm:h-full md:col-span-12 md:row-auto md:flex-row">
          <Card
            className="h-full cursor-pointer select-none p-2 md:w-full"
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText("Gustavo👾#0001");
                alert("Discord username copied: Gustavo👾#0001");
              }
            }}
          >
            <Link
              href="https://discord.com/users/166331543378198528"
              target="_blank"
              rel="noopener noreferrer"
              className="lights flex h-full w-full flex-row items-center justify-center"
            >
              <SiDiscord className="h-6 w-6 text-[#5865F2] glow-violet-500/20" />
              <h1 className="mx-3 text-lg font-medium text-pink-200 text-glow-violet-500 ">Gustavo👾#0001</h1>
            </Link>
          </Card>
          <Card className="h-full cursor-pointer select-none p-2 md:w-full">
            <Link
              href="https://instagram.com/guustavocl"
              target="_blank"
              rel="noopener noreferrer"
              className="lights flex h-full w-full flex-row items-center justify-center"
            >
              <SiInstagram className="h-6 w-6 text-[#d14470] glow-violet-500/20" />
              <h1 className="mx-3 text-lg font-medium text-pink-200 text-glow-violet-500 ">Instagram</h1>
            </Link>
          </Card>
          <Card className="cursor-pointere h-full p-2 md:w-full">
            <Link
              href="mailto:hello@gus.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="lights flex h-full w-full flex-row items-center justify-center"
            >
              <FiMail className="h-6 w-6 text-gray-400 glow-violet-500/20" />
              <h1 className="mx-3 text-lg font-medium text-pink-200 text-glow-violet-500 ">hello@gus.sh</h1>
            </Link>
          </Card>
        </div>

        <Form />
      </motion.div>
    </>
  );
}
