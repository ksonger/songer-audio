import { getVariable, fluidScale } from "@/styles/mixins/common";
import { logicalWithFallback } from "@/styles/mixins/layout";

// Appearance
// --------------------

// Appearance mixins contain primarily texture parameters: background-color, transparency, borders, etc.
// They should be limited to appearance-related properties only.
// Mixins are prefixed with `a`.

export const defaultFocusStyle = `
  outline: ${getVariable("focusOutline", "width")}
    ${getVariable("focusOutline", "style")}
    ${getVariable("focusOutline", "color")};
`;

export const aBottomBorder = (color) =>
  logicalWithFallback({
    "border-block-end-width": fluidScale(
      getVariable("borderWidth", "default"),
      getVariable("borderWidth", "thin")
    ),
    "border-block-end-style": "solid",
    "border-block-end-color": color || "currentColor",
  });

export const aPrimaryButton = (size) => `
  padding: 0.25em 0.5em;
  font-size: ${
    size === "small" ? fluidScale("16px", "14px") : fluidScale("20px", "14px")
  };
  font-weight: ${getVariable("fontWeight", "bold")};
  border-radius: 0.2em;
  border: 2px solid var(--bg-color);
`;

export const aHidden = `
  position: absolute;
  ${logicalWithFallback({
    "inline-size": "1px",
    "block-size": "1px",
  })}
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;
