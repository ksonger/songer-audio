import { css } from "styled-components";
import { logicalWithFallback } from "@/styles/mixins/layout";

// State
// --------------------

// Utility classes for setting styles based on component state.
// Classes are prefixed with `is-` or `has-`.

export default css`
  &.has-scroll-lock {
    position: absolute;
    ${logicalWithFallback({ "inline-size": "100%" })}
    overflow: hidden;
  }
`;
