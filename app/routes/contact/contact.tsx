import { Route } from "../+types/_layout";
import { Map } from "../home/ui/Map";

export function meta({ matches }: Route.MetaArgs) {
  const rootMeta = matches[0]?.meta || [];
  const titleDescriptor = rootMeta.find((meta) => "title" in meta);
  const existingTitle = titleDescriptor && "title" in titleDescriptor ? titleDescriptor.title : "";

  return [...rootMeta.filter((meta) => !("title" in meta)), { title: `${existingTitle} - Contact` }];
}

export default function Contact() {
  return (
    <>
      <Map className="col-span-8 md:col-span-6" />
    </>
  );
}
