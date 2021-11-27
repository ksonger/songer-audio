import { useState, useEffect, useRef } from "react";

/*
  Modified from https://usehooks.com/useDebounce/

  This hook allows you to debounce any fast changing value. The debounced value will only reflect the latest value when the useDebounce hook has not been called for the specified time period.

  Set immediate to `true` if you want the value to update _before_ the timeout beings
*/
export default function useDebounce(value, delay, immediate) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  // Keep track of the current timeout
  const timeoutRef = useRef();

  useEffect(() => {
    // Timeout function
    const updateLater = () => {
      timeoutRef.current = null;
      setDebouncedValue(value);
    };

    // Check if we should fire the call now
    const callNow = immediate && !timeoutRef.current;

    // Clear any existing timeouts, create a new timeout
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(updateLater, delay);

    // If we should call now, do it!
    if (callNow) setDebouncedValue(value);

    return () => {
      // Clean up any existing timeouts
      clearTimeout(timeoutRef.current);
    };
  }, [value, delay, immediate]);

  return debouncedValue;
}
