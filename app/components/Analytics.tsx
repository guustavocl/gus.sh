import { posthog } from "posthog-js";
import { useEffect } from "react";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

const Analytics = ({
  PH_TRACKING_ID,
  MS_CLARITY_ID,
}: {
  PH_TRACKING_ID?: string;
  MS_CLARITY_ID?: string;
}) => {
  useEffect(() => {
    if (PH_TRACKING_ID) {
      posthog.init(PH_TRACKING_ID, {
        api_host: "https://app.posthog.com",
      });
    }

    if (MS_CLARITY_ID && typeof window !== "undefined") {
      window.clarity =
        window.clarity ||
        function (...args: unknown[]) {
          (window.clarity as { q?: unknown[] }).q = (
            (window.clarity as { q?: unknown[] }).q || []
          ).concat([args]);
        };

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${MS_CLARITY_ID}`;
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript?.parentNode?.insertBefore(script, firstScript);
    }
  }, [PH_TRACKING_ID, MS_CLARITY_ID]);

  return null;
};

export default Analytics;
