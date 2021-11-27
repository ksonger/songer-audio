import { useState, useEffect } from "react";
import FontFaceObserver from "fontfaceobserver";

const DEFAULT_FONT_OPTIONS = {
  weight: 400,
  style: "normal",
};

// adapted from https://github.com/iamskok/use-font-face-observer/blob/master/src/index.ts
export default function useFontFaceObserver(
  fontFamily,
  fontOptions = DEFAULT_FONT_OPTIONS,
  testString = "Roboto font family",
  timeout = 3000,
  showErrors = true
) {
  const [isResolved, setIsResolved] = useState(false);

  useEffect(() => {
    const fontObserver = new FontFaceObserver(fontFamily, fontOptions);
    fontObserver
      .load(testString, timeout)
      .then(() => setIsResolved(true))
      .catch((error) => {
        if (showErrors) {
          // eslint-disable-next-line no-console
          console.error(`An error occurred during font loading`);
          console.error(error);
        }
      });
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [
    fontFamily,
    JSON.stringify(fontOptions),
    testString,
    timeout,
    showErrors,
  ]);

  return isResolved;
}
