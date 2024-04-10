"use client";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { posthog } from "posthog-js";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const Analytics = ({ GA_TRACKING_ID, PH_TRACKING_ID }: { GA_TRACKING_ID?: string; PH_TRACKING_ID?: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    posthog.init(PH_TRACKING_ID || "", {
      api_host: "https://app.posthog.com",
    });
  }, [PH_TRACKING_ID]);

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      <VercelAnalytics />
      {GA_TRACKING_ID ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
          </Script>
        </>
      ) : null}
    </>
  );
};

export default Analytics;
