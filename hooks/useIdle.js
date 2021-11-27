import { useState, useEffect, useRef } from "react";

export default function useIdle(options = { timeToIdle: 10000 }) {
  const activityDetector = useRef(null);
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    async function loadActivityDetector() {
      const createActivityDetector = (await import("activity-detector"))
        .default;
      activityDetector.current = createActivityDetector(options);
      activityDetector.current.on("idle", () => setIsIdle(true));
      activityDetector.current.on("active", () => setIsIdle(false));
    }

    loadActivityDetector();

    return () => {
      if (!activityDetector?.current) return;
      activityDetector.current.stop();
    };
  }, [JSON.stringify(options)]); // eslint-disable-line react-hooks/exhaustive-deps

  return isIdle;
}
