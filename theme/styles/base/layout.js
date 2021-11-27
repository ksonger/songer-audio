import { logicalWithFallback } from "@/styles/mixins/layout";

// Base Layout
// --------------------

export default `
  legend {
    & + * {
      ${logicalWithFallback({ "margin-block-start": "20px" })}
    }
  }
`;
