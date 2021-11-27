import { useState, useEffect } from "react";

/*
  Check if the user has reduced motion set
  Great if you're using `react-transition-group` or another javascript based motion library
*/
export default function useReduceMotion() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const onChange = () => {
      setReduceMotion(mediaQuery.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", onChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(onChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener(onChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(onChange);
      }
    };
  }, []);

  return reduceMotion;
}
