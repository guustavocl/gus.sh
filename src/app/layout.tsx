import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import ToastProvider from "@/providers/ToastProvider";
import Analytics from "@/components/Analytics";
import { LightsProvider } from "@/providers/LightsProvider";
import { Background } from "@/components/Background";
import "./globals.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/themes/translucent.css";

export const metadata: Metadata = {
  title: "Gustavo <gus.sh>",
  description: "Hello I'm a software engineer from Brazil.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="guustavocl, Gustavo, web developer, github, typescript" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="guustavocl" />
      </head>
      <body>
        <LightsProvider>
          <Background />
          {children}
        </LightsProvider>

        <NextTopLoader color="#f9a8d4" showSpinner={false} />
        <ToastProvider />
        {process.env.NODE_ENV === "production" && <Analytics PH_TRACKING_ID={process.env.NEXT_PUBLIC_POSTHOG_KEY} />}
      </body>
    </html>
  );
}
