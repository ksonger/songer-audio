import { css } from "styled-components";
import { getVariable, fluidScale } from "@/styles/mixins/common";

function fluidPadding(side) {
  return fluidScale(
    getVariable("containerPadding", side, "max"),
    getVariable("containerPadding", side, "min")
  );
}

// Root CSS variables
// --------------------

export default css`
  :root {
    /* appearance */
    --color: ${getVariable("palette", "defaultColor")};
    --header-color: ${getVariable("palette", "neutral90")};
    --bg-color: ${getVariable("palette", "defaultBgColor")};
    --box-bg-color: ${getVariable("palette", "neutral15")};
    --accent-primary: ${getVariable("palette", "accentPrimary")};

    /* layout */
    --container-inline-size: ${getVariable("containerWidth", "wide")};
    --container-inline-padding: ${fluidPadding("inline")};
    --container-block-start-padding: ${fluidPadding("blockStart")};
    --container-block-end-padding: ${fluidPadding("blockEnd")};

    /* transitions */
    --transition-duration: ${getVariable("transition", "duration")};
    --transition-timing: ${getVariable("transition", "timing")};
  }
`;
