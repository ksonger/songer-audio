import { useContext } from "react";
import ThemedGroupContext from "@/contexts/ThemedGroup";

export default function useThemedGroupContext() {
  return useContext(ThemedGroupContext);
}
