import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useNavigate } from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import { TooltipProvider } from "./components/shadcn/tooltip";
import { app_description, app_title } from "./config";
import { LightsProvider } from "./contexts/LightsContext";
import { NProgressProvider } from "./contexts/NProgressContext";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "style",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  },
  { rel: "preload", href: "/gustavo.webp", as: "image", type: "image/webp" },
  { rel: "preload", href: "/flickr.webp", as: "image", type: "image/webp" },
];

export const meta: Route.MetaFunction = () => {
  return [
    { title: app_title },
    {
      name: "description",
      content: app_description,
    },
  ];
};

export const loader = async () => {
  return {
    ENV: {
      NODE_ENV: process.env.NODE_ENV,
      MAP_LATITUDE: process.env.MAP_LATITUDE,
      MAP_LONGITUDE: process.env.MAP_LONGITUDE,
      MAIN_CARD_NAME: process.env.MAIN_CARD_NAME,
      MAIN_CARD_DESCRIPTION_1: process.env.MAIN_CARD_DESCRIPTION_1,
      MAIN_CARD_DESCRIPTION_2: process.env.MAIN_CARD_DESCRIPTION_2,
      SETUP_SPECS: process.env.SETUP_SPECS,
      PROJECTS: process.env.PROJECTS,
    },
  };
};

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="guustavocl, Gustavo, web developer, github, typescript"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.5"
        />
        <meta
          name="theme-color"
          content="#000000"
        />
        <meta
          name="author"
          content="guustavocl"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <TooltipProvider>
          <LightsProvider>
            <NProgressProvider>
              <Outlet />
              <Toaster />
            </NProgressProvider>
          </LightsProvider>
        </TooltipProvider>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.process = ${JSON.stringify({
              env: ENV,
            })}`,
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
}
