import { useState, useEffect, useRef } from "react";

// https://usehooks.com/useHover/
export default function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    node.addEventListener("mouseenter", handleMouseOver);
    node.addEventListener("mouseleave", handleMouseOut);
    return () => {
      node.removeEventListener("mouseenter", handleMouseOver);
      node.removeEventListener("mouseleave", handleMouseOut);
    };
  }, []);
  return [ref, value];
}
