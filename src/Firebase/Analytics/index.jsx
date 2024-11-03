import { useEffect } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";
import { firebaseApp } from "..";

export function usePageView() {
  useEffect(() => {
    const analytics = getAnalytics(firebaseApp);
    logEvent(analytics, "page_view");
  }, []);
}
