import * as variables from "@/styles/base/variables";
import { respondBase, fluidScaleBase, stripUnit } from "@castiron/style-mixins";

function hasValidParams(key, childKey, grandchildKey) {
  const keyIsValid = () => {
    if (!Object.prototype.hasOwnProperty.call(variables, key)) {
      throw new Error(`${key} is not defined in the theme’s variables.`);
    }
  };

  const childKeyIsValid = () => {
    if (
      !!childKey &&
      !Object.prototype.hasOwnProperty.call(variables[key], childKey)
    ) {
      throw new Error(
        `${childKey} is not a recognized property of \`${key}\` in the theme’s variables.`
      );
    }
  };

  const grandchildKeyIsValid = () => {
    if (
      !!grandchildKey &&
      !Object.prototype.hasOwnProperty.call(
        variables[key][childKey],
        grandchildKey
      )
    ) {
      throw new Error(
        `${grandchildKey} is not a recognized property of \`${childKey}\` in theme variable \`${key}\`.`
      );
    }
  };

  // this block causes a false linting violation
  // eslint-disable-next-line no-useless-catch
  try {
    keyIsValid();
    childKeyIsValid();
    grandchildKeyIsValid();
    return true;
  } catch (error) {
    throw error;
  }
}

function getVariableProperties(key, childKey, grandchildKey) {
  if (grandchildKey) return variables[key][childKey][grandchildKey];
  return childKey ? variables[key][childKey] : variables[key];
}

export function getVariable(key, childKey, grandchildKey) {
  if (!hasValidParams(key, childKey, grandchildKey)) return;
  const { value, unit = "" } = getVariableProperties(
    key,
    childKey,
    grandchildKey
  );
  return `${value}${unit}`;
}

export function getVariableValue(key, childKey, grandchildKey) {
  if (!hasValidParams(key, childKey, grandchildKey)) return;
  const { value } = getVariableProperties(key, childKey, grandchildKey);
  return value;
}

export function respond(
  content,
  pxSize = getVariable("breakpoint", "wide"),
  operator = "max",
  aspect = "width"
) {
  return respondBase(content, pxSize, operator, aspect);
}

/*
 * Global `breakpoint.header` value makes sense for `@media (max-width)`,
 * but content is too tall for a phone in landscape orientation,
 * so we need a more complex media query
 */
export function globalHeaderRespond(
  content,
  widthBreakpoint = getVariable("breakpoint", "header", "width")
) {
  const heightBreakpoint = getVariable("breakpoint", "header", "height");

  return `
    @media all and (max-width: ${widthBreakpoint}), all and (max-height: ${heightBreakpoint})  {
      ${content}
    }
  `;
}

export function fluidScale(
  max,
  min,
  maxVw = getVariable("breakpoint", "wide"),
  minVw = getVariable("breakpoint", "narrow")
) {
  if (max === min) return max;
  return fluidScaleBase(max, min, maxVw, minVw);
}

export function fluidShrink(max, maxVw = getVariable("breakpoint", "wide")) {
  return `min(${max}, ${((stripUnit(max) / stripUnit(maxVw)) * 100).toFixed(
    3
  )}vw)`;
}

export function fluidFontSize(size) {
  return fluidScale(
    getVariable("fontSize", size, "max"),
    getVariable("fontSize", size, "min")
  );
}
