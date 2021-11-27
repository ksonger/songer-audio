// Media mixins
// --------------------------------------------------------

// Media queries
// --------------------------------------------------------
const BREAKPOINTS = {
  130: "1280px",
  50: "516px",
};

// Responds to viewport size
// This function is meant to be used as a base for your mixin, with your defined breakpoints
// Example:
// export function respond(content, size, operator, aspect) {
//   const pxSize = breakpoints[size];
//   return respondBase(content, pxSize, operator, aspect);
// }

// $pxSize -> viewport size
// $operator -> 'min' or 'max'
// $aspect -> 'width' or 'height'
export function respondBase(
  content,
  pxSize = BREAKPOINTS[50],
  operator = "max",
  aspect = "width"
) {
  return `
    @media all and (${operator}-${aspect}: ${pxSize}) {
      ${content}
    }
  `;
}

// Respond to users with reduced motion turned on
export const reducedMotion = (content) => {
  return `
    @media (prefers-reduced-motion: reduce) {
      ${content}
    }
  `;
};

// Fluid Elements
// --------------------------------------------------------
// Set min and max sizes and breakpoints and let  fluidly scale different properties in-between
// This function is meant to be used as a base for your mixin, with your defined breakpoints

export const fluidScaleBase = (max, min, maxVw, minVw) => {
  const maxNum = stripUnit(max);
  const minNum = stripUnit(min);

  if (minNum > maxNum) {
    return `clamp(${max}, ${fluidScaleCalc(max, min, maxVw, minVw)}, ${min})`;
  }

  return `clamp(${min}, ${fluidScaleCalc(max, min, maxVw, minVw)}, ${max})`;
};

// return fluid-scale calc value
export const fluidScaleCalc = (
  maxValue,
  minValue,
  maxVw = BREAKPOINTS[130],
  minVw = BREAKPOINTS[50]
) => {
  return `calc(${minValue} + ${
    stripUnit(maxValue) - stripUnit(minValue)
  } * (100vw - ${minVw}) / ${stripUnit(maxVw) - stripUnit(minVw)})`;
};

// used by fluid-scale mixin
export const stripUnit = (unit) => {
  return parseInt(unit.toString().replace(/[^\d\.]/g, "")); // eslint-disable-line no-useless-escape
};

// convert px to em
export function pxToRem(px, base = 16) {
  return stripUnit(px) / base + "rem";
}

// Initialize Project Variables
// --------------------------------------------------------

/**
 * Returns a reusable method for variable value lookup
 * @param projectVars {object} An object describing CSS values used on a project
 * @returns {function}
 */
export const initVariables = (projectVars) => {
  const vars = projectVars;
  /**
   * Returns the value of an object key. Possible lookup values
   * include an object with 'value' and 'unit' keys, or a primitive value.
   * @param keyString i.e. A key at any depth, 'font.homepage.size.max'
   * @param [asValue] If true, returns the value key, without units
   * @returns {function}
   */
  return (keyString, asValue = false) => {
    if (!keyString) return;
    const keys = keyString.split(".");
    let index = 0;
    let result;
    const valueLookup = (obj) => {
      if (keys[index] in obj) {
        if (index === keys.length - 1) {
          if (typeof obj[keys[index]] === "object") {
            result = asValue
              ? obj[keys[index]].value
              : `${obj[keys[index]].value}${obj[keys[index]].unit || ""}`;
          } else {
            return obj[keys[index]];
          }
        } else {
          index++;
          valueLookup(obj[keys[index - 1]]);
        }
      } else {
        throw new Error(
          `Key \`${keys[index]}\` not found on \`${keys[index - 1]}\`.`
        );
      }
    };
    valueLookup(vars);
    return result;
  };
};
