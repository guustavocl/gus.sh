import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useMemo } from "react";
import { Toaster } from "react-hot-toast";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useFetchers,
  useLocation,
  useNavigation,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import { TooltipProvider } from "./components/shadcn/tooltip";
import { NODE_ENV, app_description, app_title } from "./config";
import { LightsProvider } from "./contexts/LightsContext";

NProgress.configure({ showSpinner: false });

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
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
      NODE_ENV: NODE_ENV,
    },
  };
};

export default function App() {
  const navigation = useNavigation();
  const fetchers = useFetchers();
  const location = useLocation();

  const state = useMemo<"idle" | "loading">(
    function getGlobalState() {
      const states = [navigation.state, ...fetchers.map((fetcher) => fetcher.state)];
      if (states.every((state) => state === "idle")) return "idle";
      return "loading";
    },
    [navigation.state, fetchers],
  );

  useEffect(() => {
    if (state === "loading") NProgress.start();
    if (state === "idle") {
      if (NProgress.isStarted()) NProgress.done();
      else {
        NProgress.start();
        setTimeout(() => {
          NProgress.done();
        }, 100);
      }
    }
  }, [location, state, navigation.state]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="guustavocl, Gustavo, web developer, github, typescript"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.5"
        />
        {/* <meta
          name="viewport"
          content="width=1024"
        /> */}
        {/* <meta
          name="viewport"
          content="width=1024, initial-scale=0.5, minimum-scale=0.5"
        /> */}
        {/* <meta
          name="viewport"
          content="width=1024, user-scalable=no"
        /> */}
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
            <Outlet />
            <Toaster />
          </LightsProvider>
        </TooltipProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
