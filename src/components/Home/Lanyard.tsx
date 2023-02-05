import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Card from "../Card";
import Link from "next/link";
import { Data } from "use-lanyard";

let startedTimestamp = 0;
let endTimestamp = 0;

function getNinuteAndSeconds(date: Date) {
  return date.toLocaleTimeString(navigator.language, {
    minute: "2-digit",
    second: "2-digit",
  });
}

const Lanyard = ({ user }: { user: Data | undefined }) => {
  const [elapsed, setElapsed] = useState<Date | undefined>();
  const [lastPlayed, setLastPlayed] = useState<any>();

  const duration = user?.spotify?.timestamps
    ? new Date(user.spotify.timestamps.end - user.spotify.timestamps.start)
    : undefined;

  const progress = 100 - (100 * (endTimestamp - Date.now())) / (endTimestamp - startedTimestamp);

  useEffect(() => {
    if (user?.spotify) {
      if (user.spotify.timestamps.end !== endTimestamp) {
        startedTimestamp = user.spotify.timestamps.start;
        endTimestamp = user.spotify.timestamps.end;
        const interval = setInterval(() => {
          if (Date.now() >= endTimestamp || startedTimestamp !== user?.spotify?.timestamps.start || !user?.spotify)
            clearInterval(interval);
          else setElapsed(new Date(Date.now() - startedTimestamp));
        }, 1000);
        return () => {
          clearInterval(interval);
          startedTimestamp = 0;
          endTimestamp = 0;
        };
      }
    } else {
      axios.get("/api/spotify").then(res => {
        setLastPlayed(res.data.result);
      });
    }
  }, [user]);

  return (
    <Card className="group col-span-12 h-48 select-none p-4 hue-rotate-15 backdrop-blur md:col-span-6">
      {user ? (
        <div className="lights flex w-full flex-col">
          <h2 className="mb-2 select-none text-center text-xl font-bold tracking-tighter text-pink-200 text-glow-violet-500 sm:text-xl md:text-left">
            What I&apos;m listening now on my{" "}
            <Link
              href="https://open.spotify.com/user/guustavocl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              spotify
            </Link>
            <span className="ml-2 h-full w-2">
              <span className="absolute mt-2.5 h-2 w-2 animate-ping rounded-full bg-green-600" />
              <span className="absolute mt-2.5 h-2 w-2 rounded-full bg-green-600" />
            </span>
          </h2>
          <div className="grid grid-cols-12">
            <Image
              src={user?.spotify?.album_art_url || lastPlayed?.track?.album?.images?.[0]?.url || ""}
              height={94}
              width={94}
              className="col-span-3 h-24 w-24 select-none justify-self-center rounded-lg md:col-span-3 md:h-20 md:w-20"
              alt="album cover"
            />
            <div className="col-span-9 ml-4 flex flex-col justify-center md:col-span-9">
              <h2 className="truncate text-xl font-semibold leading-tight text-pink-100 text-glow-violet-500">
                {user?.spotify?.song || lastPlayed?.track?.name}
              </h2>
              <h4 className="truncate text-sm leading-tight text-pink-100 opacity-80 text-glow-violet-500">
                by {user?.spotify?.artist || lastPlayed?.track?.artists?.[0]?.name}
              </h4>
              <h4 className="truncate text-sm leading-tight text-pink-100 opacity-80 text-glow-violet-500">
                on {user?.spotify?.album || lastPlayed?.track?.album?.name}
              </h4>
            </div>
          </div>

          {user?.spotify ? (
            <div className="mt-2 w-full md:mt-4">
              <div className="relative h-2 w-full rounded-md bg-pink-200/20">
                <span
                  className="absolute h-2 rounded-md bg-pink-200/70 glow-violet-400"
                  style={{ width: `${user?.spotify ? progress : 100}%` }}
                />
              </div>

              <div className="mt-1 flex items-center justify-between px-0.5 text-sm text-pink-100 text-glow-violet-500">
                {elapsed ? <span>{getNinuteAndSeconds(elapsed)}</span> : <span>00:00</span>}
                {duration ? <span>{getNinuteAndSeconds(duration)}</span> : <span>00:00</span>}
              </div>
            </div>
          ) : (
            <h2 className="mt-2 w-full select-none text-center text-lg font-bold tracking-tighter text-pink-200 text-glow-violet-500">
              {`last played ${moment(lastPlayed?.played_at || "").fromNow()}`}
            </h2>
          )}
        </div>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default Lanyard;
