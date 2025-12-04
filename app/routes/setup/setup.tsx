import { useState } from "react";
import { Card } from "~/components/ui/Card";
import { setupSpecs } from "~/config";
import { useLightsContext } from "~/contexts/LightsContext";
import { cn } from "~/lib/utils";
import { Route } from "../+types/_layout";

export function meta({ matches }: Route.MetaArgs) {
  const rootMeta = matches[0]?.meta || [];
  const titleDescriptor = rootMeta.find((meta) => "title" in meta);
  const existingTitle = titleDescriptor && "title" in titleDescriptor ? titleDescriptor.title : "";

  return [...rootMeta.filter((meta) => !("title" in meta)), { title: `${existingTitle} - Setup` }];
}

const setupImages = ["/setup/1.webp", "/setup/2.webp"];

export default function Setup() {
  const { lightsOffClass } = useLightsContext();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="col-span-12 flex gap-4 w-full">
        <div className={cn("w-5/12 flex flex-col gap-4")}>
          {setupImages.map((src, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedImage(src)}
              className={cn(
                "overflow-hidden rounded-lg border-4 border-white/20 shadow-2xl w-full flex-1 cursor-pointer",
                lightsOffClass,
              )}
            >
              <img
                src={src}
                className={cn(
                  "h-full w-full object-cover select-none",
                  lightsOffClass ? "opacity-100 brightness-100" : "opacity-90 brightness-75",
                )}
                alt="Setup"
              />
            </button>
          ))}
        </div>
        <div className={cn("flex-1 flex flex-col gap-3")}>
          {setupSpecs?.map((spec: { title: string; label: string; icon: string }, idx: number) => (
            <Card
              key={idx}
              className="p-3 flex-row text-left gap-3"
            >
              <div className={cn("flex items-center justify-center text-2xl", lightsOffClass)}>{spec.icon}</div>
              <div className={cn("flex flex-col", lightsOffClass)}>
                <div className="text-pink-100/60 text-xs">{spec.title}:</div>
                <div className="text-pink-200 font-semibold text-sm">{spec.label}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedImage && (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            alt="Setup enlarged"
          />
          <span className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl font-light transition-colors">
            ×
          </span>
        </button>
      )}
    </>
  );
}
