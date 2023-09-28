import Head from "next/head";
import NProgress from "nprogress";
import LightsOff from "@/components/LightsOff";
import LightsProvider from "@/hooks/useLights";
import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import { useEffect } from "react";
import { useLanyardWS } from "use-lanyard";
import type { AppProps } from "next/app";
import "../global.css";
import "nprogress/nprogress.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/themes/translucent.css";
import Script from "next/script";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const USER_ID = "166331543378198528";

export default function App({ Component, pageProps, router }: AppProps) {
  const user = useLanyardWS(USER_ID);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
  }, [router.pathname]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>gus.sh</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="guustavocl, Gustavo, web developer, github, typescript" />
        <meta name="description" content="Gustavo's personal website" />
        <meta name="author" content="Gustavo" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname
              });
            `,
          }}
        />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "j1dc8149ke");
          `}
        </Script>
      </Head>

      <LightsProvider>
        <div
          id="app"
          className="flex h-full min-h-screen w-full flex-row justify-center bg-gradient-to-bl from-black to-[#0e060f] text-white"
        >
          {/* Background */}
          <div
            className="bg fixed z-0 h-screen w-full bg-gradient-to-br"
            style={{
              opacity: 0.3,
              backgroundSize: "cover",
              backgroundImage:
                "url('https://r4.wallpaperflare.com/wallpaper/801/642/377/jinx-league-of-legends-arcane-vi-league-of-legends-caitlyn-league-of-legends-hd-wallpaper-1c91c1520b1900e03f1d3d5e08b4bacd.jpg')",
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="z-20 w-[92%] pt-16 md:w-[100%]">
            <AnimatePresence mode="wait">
              <Component {...pageProps} key={router.pathname} user={user} />
            </AnimatePresence>
          </div>
          <LightsOff />
        </div>
      </LightsProvider>
    </>
  );
}
