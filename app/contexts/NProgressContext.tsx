import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ReactNode, useEffect, useMemo } from "react";
import { useFetchers, useLocation, useNavigation } from "react-router";

NProgress.configure({ showSpinner: false });

export function NProgressProvider({ children }: { children: ReactNode }) {
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

  return <>{children}</>;
}
