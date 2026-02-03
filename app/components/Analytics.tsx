import Clarity from "@microsoft/clarity";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { posthog } from "posthog-js";
import { useEffect } from "react";

const Analytics = ({ PH_TRACKING_ID, MS_CLARITY_ID }: { PH_TRACKING_ID?: string; MS_CLARITY_ID?: string }) => {
  useEffect(() => {
    if (PH_TRACKING_ID) {
      posthog.init(PH_TRACKING_ID, {
        api_host: "https://app.posthog.com",
      });
    }

    if (MS_CLARITY_ID) {
      Clarity.init(MS_CLARITY_ID);
    }
  }, [PH_TRACKING_ID, MS_CLARITY_ID]);

  return <VercelAnalytics />;
};

export default Analytics;
