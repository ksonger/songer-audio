import { useContext } from "react";
import GlobalDataContext from "@/contexts/GlobalData";

export default function useGlobalContext() {
  return useContext(GlobalDataContext);
}
