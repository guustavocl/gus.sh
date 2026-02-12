import Clarity from "@microsoft/clarity";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { posthog } from "posthog-js";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Analytics = ({ PH_TRACKING_ID, MS_CLARITY_ID }: { PH_TRACKING_ID?: string; MS_CLARITY_ID?: string }) => {
  const location = useLocation();

  useEffect(() => {
    if (PH_TRACKING_ID) {
      posthog.init(PH_TRACKING_ID, {
        api_host: "https://app.posthog.com",
        autocapture: true,
        capture_pageview: true,
        capture_pageleave: true,
      });
      posthog.identify();
    }

    if (MS_CLARITY_ID) {
      Clarity.init(MS_CLARITY_ID);
    }
  }, [PH_TRACKING_ID, MS_CLARITY_ID]);

  useEffect(() => {
    if (PH_TRACKING_ID) {
      posthog.capture("$pageview");
    }
  }, [location, PH_TRACKING_ID]);

  return <VercelAnalytics />;
};

export default Analytics;
