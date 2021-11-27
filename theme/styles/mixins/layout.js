import { stripUnit } from "@/styles/mixins/base";
import {
  getVariable,
  getVariableValue,
  fluidScale,
} from "@/styles/mixins/common";

// Layout
// -------------------

// Layout-specific mixins.
// They may style nested classes/elements if the style properties are layout-related only.
// E.g. using the lobotomized owl selector (`> * + *`).
// Mixins are prefixed with `l`.

const FALLBACK_MAP = {
  "block-size": "height",
  "max-block-size": "max-height",
  "min-block-size": "min-height",
  "inline-size": "width",
  "max-inline-size": "max-width",
  "min-inline-size": "min-width",
  "margin-inline": ["margin-left", "margin-right"],
  "margin-inline-end": {
    ltr: "margin-right",
    rtl: "margin-left",
  },
  "margin-inline-start": {
    ltr: "margin-left",
    rtl: "margin-right",
  },
  "margin-block": ["margin-top", "margin-bottom"],
  "margin-block-end": "margin-bottom",
  "margin-block-start": "margin-top",
  inset: ["top", "right", "bottom", "left"],
  "inset-inline": ["left", "right"],
  "inset-inline-end": {
    ltr: "right",
    rtl: "left",
  },
  "inset-inline-start": {
    ltr: "left",
    rtl: "right",
  },
  "inset-block": ["top", "bottom"],
  "inset-block-end": "bottom",
  "inset-block-start": "top",
  "padding-inline": ["padding-left", "padding-right"],
  "padding-inline-end": {
    ltr: "padding-right",
    rtl: "padding-left",
  },
  "padding-inline-start": {
    ltr: "padding-left",
    rtl: "padding-right",
  },
  "padding-block": ["padding-top", "padding-bottom"],
  "padding-block-end": "padding-bottom",
  "padding-block-start": "padding-top",
  "border-block": ["border-top", "border-bottom"],
  "border-block-color": ["border-top-color", "border-bottom-color"],
  "border-block-style": ["border-top-style", "border-bottom-style"],
  "border-block-width": ["border-top-width", "border-bottom-width"],
  "border-block-end": "border-bottom",
  "border-block-end-color": "border-bottom-color",
  "border-block-end-style": "border-bottom-style",
  "border-block-end-width": "border-bottom-width",
  "border-block-start": "border-top",
  "border-block-start-color": "border-top-color",
  "border-block-start-style": "border-top-style",
  "border-block-start-width": "border-top-width",
  "border-inline": ["border-left", "border-right"],
  "border-inline-color": ["border-left-color", "border-right-color"],
  "border-inline-style": ["border-left-style", "border-right-style"],
  "border-inline-width": ["border-left-width", "border-right-width"],
  "border-inline-end": {
    ltr: "border-right",
    rtl: "border-left",
  },
  "border-inline-end-color": {
    ltr: "border-right-color",
    rtl: "border-left-color",
  },
  "border-inline-end-style": {
    ltr: "border-right-style",
    rtl: "border-left-style",
  },
  "border-inline-end-width": {
    ltr: "border-right-width",
    rtl: "border-left-width",
  },
  "border-inline-start": {
    ltr: "border-left",
    rtl: "border-right",
  },
  "border-inline-start-color": {
    ltr: "border-left-color",
    rtl: "border-right-color",
  },
  "border-inline-start-style": {
    ltr: "border-left-style",
    rtl: "border-right-style",
  },
  "border-inline-start-width": {
    ltr: "border-left-width",
    rtl: "border-right-width",
  },
  "border-end-end-radius": {
    ltr: "border-bottom-right-radius",
    rtl: "border-bottom-left-radius",
  },
  "border-end-start-radius": {
    ltr: "border-bottom-left-radius",
    rtl: "border-bottom-right-radius",
  },
  "border-start-end-radius": {
    ltr: "border-top-right-radius",
    rtl: "border-top-left-radius",
  },
  "border-start-start-radius": {
    ltr: "border-top-left-radius",
    rtl: "border-top-right-radius",
  },
};

function generateFallbackDeclaration(property, value) {
  const fallbackProperty = FALLBACK_MAP[property];

  if (!fallbackProperty) return `${property}: ${value};`;
  if (Array.isArray(fallbackProperty))
    return fallbackProperty.map((f) => `${f}: ${value};`).join("");
  if (typeof fallbackProperty === "object" && "rtl" in fallbackProperty)
    return `
      [dir='ltr'] & { ${fallbackProperty.ltr}: ${value}; }
      [dir='rtl'] & { ${fallbackProperty.rtl}: ${value}; }
  `;
  return `${fallbackProperty}: ${value};`;
}

function transformLogicalProperty(property, value) {
  const logicalDeclaration = `${property}: ${value};`;
  const fallbackDeclaration = generateFallbackDeclaration(property, value);

  if (!fallbackDeclaration) return logicalDeclaration;

  return `
    ${logicalDeclaration}

    @supports not (${logicalDeclaration.replace(";", "")}) {
      ${fallbackDeclaration}
    }
  `;
}

/*
 * Create logical property declarations with fallbacks
 * to directional properties wrapped in `@supports not`
 * usage: logical({ "margin-block-start": "20px" })
 */
export function logicalWithFallback(declarations = {}) {
  const transformedDeclarations = Object.keys(declarations).map((property) =>
    transformLogicalProperty(property, declarations[property])
  );
  const output = transformedDeclarations.join("");
  return output;
}

export const lContainerInnerStyle = (width, padInline = true) => `
  --container-inline-size: ${getVariable("containerWidth", width)};
  --container-inline-padding: ${padInline ? "inherit" : 0};

  ${logicalWithFallback({
    "max-inline-size":
      "calc(var(--container-inline-size) + 2 * var(--container-inline-padding))",
    "margin-inline": "auto",
    "padding-inline": "var(--container-inline-padding)",
  })}
`;

export const lFullBleed = (aspectX, aspectY) => `
  ${aspectX && aspectY ? lSetAspectRatio(aspectX, aspectY) : ""}
  ${logicalWithFallback({
    "inline-size": "100vw",
    "inset-inline": "50%",
    "margin-inline": "-50vw",
  })}
`;

export const lOffsetImageOffset = fluidScale(
  getVariable("offsetImageOffset", "max"),
  getVariable("offsetImageOffset", "min")
);

function round(value) {
  return Math.round(value * 100000) / 100000;
}

function getRelativeSize(width, breakpoint) {
  return `${round(width / breakpoint) * 100}vw`;
}

export function lGenerateSizesObj(
  relativeSize,
  fullBreakpoint,
  halfBreakpoint
) {
  const containerWidth = getVariableValue("containerWidth", "wide");
  const containerBreakpoint =
    containerWidth + 2 * getVariableValue("containerPadding", "inline", "max");
  const maxImageWidth = containerWidth;
  const scaledImageWidth = containerWidth * relativeSize;
  const fluidSize = getRelativeSize(scaledImageWidth, containerBreakpoint);

  const sizeObj = {
    max: round(scaledImageWidth),
    [containerBreakpoint]: fluidSize,
  };

  fullBreakpoint &&
    Object.assign(sizeObj, {
      [fullBreakpoint]: getRelativeSize(maxImageWidth, containerBreakpoint),
    });
  halfBreakpoint &&
    Object.assign(sizeObj, {
      [halfBreakpoint]: getRelativeSize(
        maxImageWidth * 0.5,
        containerBreakpoint
      ),
    });
  return sizeObj;
}

// sizesObj = {max: value, 800: value, 400, value}
export function lGenerateSizesString(sizesObj) {
  const breakpoints = Object.keys(sizesObj).sort((a, b) => a - b);
  const sizes = Object.values(sizesObj).map((size) =>
    typeof size === "number" ? `${size}px` : size
  );

  return breakpoints
    .map((bp, i) => {
      return bp === "max"
        ? sizes[i]
        : `(max-width: ${stripUnit(bp)}px) ${sizes[i]}`;
    })
    .join(", ");
}

export function lGetImageSizes(relativeSize, fullBreakpoint, halfBreakpoint) {
  const sizesObj = lGenerateSizesObj(
    relativeSize,
    fullBreakpoint,
    halfBreakpoint
  );
  return lGenerateSizesString(sizesObj);
}

export function lSetAspectRatio(width, height) {
  return `
    &::before {
      float: left;
      content: "";
      padding-top: ${height / width * 100}%;
    }

    &::after {
      display: block;
      content: "";
      clear: both;
    }

    @supports (aspect-ratio: 1 / 1) {
      aspect-ratio: ${width} / ${height};

      &::before,
      &::after {
        content: none;
      }
    }
  `;
}
