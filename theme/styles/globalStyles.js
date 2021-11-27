import { createGlobalStyle } from "styled-components";
import baseFonts from "./base/fonts";
import baseRoot from "./base/root";
import baseResets from "./base/resets";
import baseAppearance from "./base/appearance";
import baseLayout from "./base/layout";
import baseTypography from "./base/typography";
import utilityAppearance from "./utility/appearance";
import utilityLayout from "./utility/layout";
import utilityTypography from "./utility/typography";
import utilityState from "./utility/state";

// Define global styles
const GlobalStyles = createGlobalStyle`
  ${baseFonts}
  ${baseRoot}
  ${baseResets}
  ${baseAppearance}
  ${baseLayout}
  ${baseTypography}

  ${utilityAppearance}
  ${utilityLayout}
  ${utilityTypography}
  ${utilityState}
`;

export default GlobalStyles;
