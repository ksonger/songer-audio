import { useContext } from "react";
import NestingContext from "@/contexts/Nesting";

export default function useNestingContext() {
  return useContext(NestingContext);
}
