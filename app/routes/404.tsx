import { useEffect, useState } from "react";
import { Card } from "~/components/ui/Card";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";
import { Route } from "./+types/_layout";

export function meta({ matches }: Route.MetaArgs) {
  const rootMeta = matches[0]?.meta || [];
  const titleDescriptor = rootMeta.find((meta) => "title" in meta);
  const existingTitle = titleDescriptor && "title" in titleDescriptor ? titleDescriptor.title : "";

  return [...rootMeta.filter((meta) => !("title" in meta)), { title: `${existingTitle} - 404` }];
}

const messages = [
  { text: "...", delay: 2000 },
  { text: "3...", delay: 1200 },
  { text: "2...", delay: 1200 },
  { text: "1...", delay: 1200 },
  { text: "Told ya 😊", delay: 3000 },
  { text: "Snitching you to Gus", delay: 3000 },
  { text: "Sending the message right now", delay: 3000 },
  { text: "I advise you to leave", delay: 3000 },
  { text: "Done! message successfully sent! ✅", delay: 5000 },
  { text: "Yeah I'm telling you the truth...", delay: 3000 },
  { text: "Don't believe me? Check the network tab 😒", delay: 15000 },
  { text: "Oh you're still here? 🙀", delay: 2000 },
  { text: "It ends now, bye", delay: 60000 },
  { text: "Gosh you got time today huh? 🤨", delay: 60000 },
];

export default function NotFound() {
  const { lightsOffClass } = useLightsContext();
  const [message, setMessage] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const showNextMessage = () => {
      if (currentIndex < messages.length) {
        setMessage(messages[currentIndex].text);
        currentIndex++;
        if (currentIndex < messages.length) {
          setTimeout(showNextMessage, messages[currentIndex - 1].delay);
        }
      }
    };

    showNextMessage();
  }, []);

  return (
    <>
      <Card className={"group col-span-12 h-auto select-none p-5 py-8"}>
        <span className={cn(lightsOffClass, "w-full")}>
          <div className="flex flex-col gap-2 animate-bounce font-mono text-4xl font-bold text-pink-200 [text-shadow:0_0_7px_--theme(--color-accent/60%),0_0_5px_--theme(--color-accent/60%)]">
            <span>404</span>
            <span>Page Not Found 🙀</span>
          </div>
          <div className="tracking-normal">
            <p className="mt-2 block text-lg font-normal text-pink-200/70">
              You shouldn&apos;t be here, get back quicly before I snitch you 👀🔪
            </p>
            {message && <p className="mt-4 block text-xl font-semibold text-pink-200/90">{message}</p>}
          </div>
        </span>
      </Card>
    </>
  );
}
