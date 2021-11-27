import upperFirst from "lodash/upperFirst";
import { getVariable, fluidScale, fluidFontSize } from "@/styles/mixins/common";

const FONT_WEIGHT_MAP = {
  xLarge: "black",
  large: "light",
  medium: "black",
  small: "light",
  xSmall: "bold",
};

// Typography
// -------------------

// Typography-specific mixins.
// Mixins are prefixed with `t`.
export function tHeadingStyle(size) {
  if (size in FONT_WEIGHT_MAP === false)
    throw new Error(
      `${size} is not a defined heading style. Available options: ["large", "medium", "small", "xSmall].`
    );
  const keyedSize = `h${upperFirst(size)}`;
  return `
    font-size: ${fluidFontSize(keyedSize)};
    font-weight: ${getVariable("fontWeight", FONT_WEIGHT_MAP[size])};
    line-height: ${getVariable("lineHeight", keyedSize)};
  `;
}

export const tLabel = `
  color: var(--accent-primary);
  font-size: ${fluidScale("19px", "16px")};
  font-weight: ${getVariable("fontWeight", "bold")};
  text-transform: uppercase;
`;

export const tTruncate = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
