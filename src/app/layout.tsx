import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import ToastProvider from "@/providers/ToastProvider";
import MyAnalytics from "@/components/Analytics";
import { LightsProvider } from "@/providers/LightsProvider";
import { Background } from "@/components/Background";
import { Analytics } from "@vercel/analytics/react";
import { PHProvider, PostHogPageview } from "@/providers/PostHogProvider";
import "./globals.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/themes/translucent.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Gustavo <gus.sh>",
  description: "Hello I'm a self-taught software engineer from Brazil.",
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
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body>
          {process.env.NODE_ENV === "production" && (
            <MyAnalytics
              GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}
              MC_TRACKING_ID={process.env.NEXT_PUBLIC_MICROSOFT_CLARITY || ""}
            />
          )}
          <LightsProvider>
            <Background />
            {children}
          </LightsProvider>

          <NextTopLoader color="#f9a8d4" showSpinner={false} />
          <ToastProvider />
          <Analytics />
        </body>
      </PHProvider>
    </html>
  );
}
