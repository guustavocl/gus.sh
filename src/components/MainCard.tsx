import React from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Card from "@/components/Card";
import { Data } from "use-lanyard";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MainCard = ({ user }: { user?: Data | undefined }) => {
  return (
    <Card className="col-span-12 backdrop-saturate-150 md:col-span-10 md:h-44">
      <div className="lights mx-2 my-1 flex w-full flex-col p-4">
        <div className="flex h-full w-full -translate-y-1 flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Image
            quality={70}
            src="/gustavo.jpg"
            height={112}
            width={112}
            className="select-none rounded-full border-2 border-pink-200 object-cover opacity-90 backdrop-blur glow-violet-500/50 hover:glow-pink-300/50"
            alt="guustavo photo"
          />

          <div className="w-full space-y-1">
            <div className="space-y-1">
              <h1 className="group relative flex cursor-pointer select-none flex-row items-end justify-center text-center text-4xl font-bold tracking-tighter text-pink-200 text-glow-violet-500/60 hover:text-pink-100 hover:text-glow-pink-300/50 md:justify-start md:text-left">
                Gustavo.
              </h1>

              <p className="select-none text-center text-pink-200 text-glow-violet-500/70 md:text-left">
                self-taught software engineer from Brazil
              </p>
            </div>

            <hr className="border-t border-t-pink-200/80 text-glow-violet-500/70 md:block" />
            <Nav />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default React.memo(MainCard);
