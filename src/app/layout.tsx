import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import ToastProvider from "@/providers/ToastProvider";
import { LightsProvider } from "@/providers/LightsProvider";
import { Background } from "@/components/Background";
import Analytics from "@/components/Analytics";
import "./globals.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/themes/translucent.css";
// import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Gustavo <gus.sh>",
  description: "Hello I'm a self-taught software engineer from Brazil.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {/* <title>gus.sh</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="guustavocl, Gustavo, web developer, github, typescript" />
        <meta name="description" content="Gustavo's personal website" />
        <meta name="author" content="Gustavo" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        */}
      </head>
      <body>
        {process.env.NODE_ENV === "production" &&
          process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS &&
          process.env.NEXT_PUBLIC_MICROSOFT_CLARITY && (
            <Analytics
              GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
              MC_TRACKING_ID={process.env.NEXT_PUBLIC_MICROSOFT_CLARITY}
            />
          )}
        <LightsProvider>
          <Background />
          {children}
        </LightsProvider>

        <NextTopLoader color="#f9a8d4" showSpinner={false} />
        <ToastProvider />
      </body>
    </html>
  );
}
