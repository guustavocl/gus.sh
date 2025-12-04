/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps, useEffect, useState } from "react";
import { Link } from "react-router";
import { useLanyardWS } from "use-lanyard";
import { Card } from "~/components/ui/Card";
import { discord_user_id } from "~/config";
import { spotify_url } from "~/config";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";

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

function getSmallAlbumArt(url: string | undefined) {
  if (!url) return "";
  return url.replace(/ab67616d0000b273|ab67616d00001e02|ab67616d00004851/, "ab67616d000001e7");
}

export function Lanyard({ ...props }: ComponentProps<"div">) {
  const { lightsOffClass } = useLightsContext();
  const [elapsed, setElapsed] = useState<Date | undefined>();
  const [lastPlayed, setLastPlayed] = useState<any>();
  const user = useLanyardWS(discord_user_id as `${bigint}`);

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
    <Card className={cn("group select-none hue-rotate-15 backdrop-blur h-36 sm:h-48 sm:max-h-48", props.className)}>
      {user ? (
        <div className={cn("flex w-full flex-col gap-1 sm:gap-2 justify-between h-full px-3 py-1.5", lightsOffClass)}>
          <div
            className={cn(
              "select-none whitespace-nowrap text-center text-lg font-bold tracking-tighter",
              "text-primary text-base sm:text-[1.3rem] flex flex-row gap-1 items-center justify-center",
              "[text-shadow:0_0_3px_--theme(--color-accent/60%),0_0_3px_--theme(--color-accent/60%)]",
            )}
          >
            Listening now on{" "}
            <Link
              to={spotify_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex flex-row items-center">
                <span className="hover:underline text-[#65D46E] [text-shadow:0_0_3px_--theme(--color-green-500/60%),0_0_3px_--theme(--color-green-500/60%)]">
                  spotify
                </span>
                <span className="ml-1.5 relative h-full -translate-y-[0.15rem]">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-green-600" />
                  <span className="absolute h-2 w-2 rounded-full bg-green-600" />
                </span>
              </span>
            </Link>
          </div>
          <div className="flex -translate-y-1 flex-row gap-2 text-left">
            <img
              src={getSmallAlbumArt(user?.spotify?.album_art_url || lastPlayed?.track?.album?.images?.[0]?.url)}
              height={64}
              width={64}
              loading="lazy"
              className="w-14 sm:w-22 aspect-square select-none justify-self-start rounded-lg"
              alt={`Album cover for ${user?.spotify?.album || lastPlayed?.track?.album?.name || "current song"}`}
            />
            <div className="flex min-w-0 flex-1 flex-col justify-evenly">
              <p className="line-clamp-2 text-sm sm:text-xl font-semibold leading-tight text-secondary">
                {user?.spotify?.song || lastPlayed?.track?.name}
              </p>
              <p className="truncate text-xs sm:text-base leading-tight text-secondary opacity-80">
                by {user?.spotify?.artist || lastPlayed?.track?.artists?.[0]?.name}
              </p>
              <p className="truncate text-xs sm:text-base leading-tight text-secondary opacity-80">
                on {user?.spotify?.album || lastPlayed?.track?.album?.name}
              </p>
            </div>
          </div>

          {user?.spotify ? (
            <div className="w-full flex flex-col gap-1 justify-between">
              <div className="relative h-1.5 sm:h-2.5 w-full rounded-md bg-secondary/20">
                <span
                  className="absolute left-0 h-1.5 sm:h-2.5 rounded-md bg-secondary/70"
                  style={{ width: `${user?.spotify ? progress : 100}%` }}
                />
              </div>

              <div className="flex items-end justify-between px-0.5 text-xs sm:text-[0.85rem] leading-4 text-secondary">
                {elapsed ? <span>{getMinuteAndSeconds(elapsed)}</span> : <span>00:00</span>}
                {duration ? <span>{getMinuteAndSeconds(duration)}</span> : <span>00:00</span>}
              </div>
            </div>
          ) : (
            <p className="w-full select-none text-center font-bold tracking-tighter text-secondar sm:text-lg">
              {/* {`last played ${moment(lastPlayed?.played_at || "").fromNow()}`} */}
              {`last song played`}
            </p>
          )}
        </div>
      ) : (
        <></>
      )}
    </Card>
  );
}
