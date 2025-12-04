import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData, useNavigate } from "react-router";
import type { Route } from "./+types/root";
import appStyles from "./app.css?url";
import { TooltipProvider } from "./components/shadcn/tooltip";
import { app_description, app_title } from "./config";
import { LightsProvider } from "./contexts/LightsContext";
import { NProgressProvider } from "./contexts/NProgressContext";

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
        <link
          rel="preload"
          href={appStyles}
          as="style"
        />
        <link
          rel="stylesheet"
          href={appStyles}
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
