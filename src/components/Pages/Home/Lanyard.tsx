"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentProps, useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "../../MainCard/Card";
import Link from "next/link";
import { Snowflake, useLanyardWS } from "use-lanyard";
import { USER_ID, spotify_url } from "@/utils/constants";
import { twMerge } from "tailwind-merge";

let startedTimestamp = 0;
let endTimestamp = 0;

const defaultSong = {
  track: {
    album: {
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b273d09297cae57def4d8adc0749",
          width: 640,
        },
      ],
      name: "Jar Of Flies",
    },
    artists: [
      {
        name: "Alice In Chains",
      },
    ],
    duration_ms: 195882,
    external_urls: {
      spotify: "https://open.spotify.com/track/159CffclwSTvynlA0BUlQG",
    },
    name: "Nutshell",
  },
  played_at: "2023-02-06T14:16:32.895Z",
};

function getMinuteAndSeconds(date: Date) {
  return date.toLocaleTimeString(navigator.language, {
    minute: "2-digit",
    second: "2-digit",
  });
}

export function Lanyard({ ...props }: ComponentProps<"div">) {
  const [elapsed, setElapsed] = useState<Date | undefined>();
  const [lastPlayed, setLastPlayed] = useState<any>();
  const user = useLanyardWS(USER_ID as Snowflake);

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
      setLastPlayed(defaultSong);
    }
  }, [user]);

  return (
    <Card className={twMerge("group h-auto select-none p-4 hue-rotate-15 backdrop-blur md:h-48", props.className)}>
      {user ? (
        <div className="lights flex w-full flex-col">
          <h2 className="mb-2 select-none whitespace-nowrap text-center text-lg font-bold tracking-tighter text-pink-200 sm:text-xl md:text-left">
            What I&apos;m listening now on my{" "}
            <Link
              href={spotify_url}
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
          <div className="flex flex-row gap-2">
            <Image
              quality={50}
              src={user?.spotify?.album_art_url || lastPlayed?.track?.album?.images?.[0]?.url || ""}
              height={94}
              width={94}
              className="w-20 select-none justify-self-start rounded-lg"
              alt="album cover"
            />
            <div className=" flex flex-col justify-center">
              <h2 className="truncate text-xl font-semibold leading-tight text-pink-100">
                {user?.spotify?.song || lastPlayed?.track?.name}
              </h2>
              <h4 className="truncate text-sm leading-tight text-pink-100 opacity-80">
                by {user?.spotify?.artist || lastPlayed?.track?.artists?.[0]?.name}
              </h4>
              <h4 className="truncate text-sm leading-tight text-pink-100 opacity-80">
                on {user?.spotify?.album || lastPlayed?.track?.album?.name}
              </h4>
            </div>
          </div>

          {user?.spotify ? (
            <div className="mt-4 w-full">
              <div className="relative h-2 w-full rounded-md bg-pink-200/20">
                <span
                  className="absolute h-2 rounded-md bg-pink-200/70"
                  style={{ width: `${user?.spotify ? progress : 100}%` }}
                />
              </div>

              <div className="mt-1 flex items-center justify-between px-0.5 text-sm text-pink-100">
                {elapsed ? <span>{getMinuteAndSeconds(elapsed)}</span> : <span>00:00</span>}
                {duration ? <span>{getMinuteAndSeconds(duration)}</span> : <span>00:00</span>}
              </div>
            </div>
          ) : (
            <h2 className="mt-2 w-full select-none text-center text-base font-bold tracking-tighter text-pink-200 sm:text-lg">
              {/* {`last played ${moment(lastPlayed?.played_at || "").fromNow()}`} */}
              {`last song played`}
            </h2>
          )}
        </div>
      ) : (
        <></>
      )}
    </Card>
  );
}
