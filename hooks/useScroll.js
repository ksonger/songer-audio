import { useEffect } from "react";
import throttle from "lodash/throttle";

export default function useScroll(callback) {
  useEffect(() => {
    window.addEventListener("scroll", throttle(callback, 100));
    return () => window.removeEventListener("scroll", throttle(callback, 100));
  }, [callback]);
}
