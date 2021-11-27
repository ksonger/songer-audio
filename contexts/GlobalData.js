import { createContext } from "react";
import { globalDataProps } from "@/shapes/globalData";

const GlobalDataContext = createContext(null);

function GlobalDataProvider({ data, children }) {
  return (
    <GlobalDataContext.Provider value={data}>
      {children}
    </GlobalDataContext.Provider>
  );
}

GlobalDataProvider.displayName = "GlobalData.Provider";

GlobalDataProvider.propTypes = globalDataProps;

export default GlobalDataContext;

export { GlobalDataProvider };
