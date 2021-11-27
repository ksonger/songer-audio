import { getVariable, fluidScale } from "@/styles/mixins/common";

const INTERACTIVE_ELS =
  "[href], button, input, textarea, select, summary, [tabindex='0']";

export default `
  body {
    color: var(--color);
    background-color: var(--bg-color);
  }

  /* Remove link styling */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Remove button styling */
  button {
    padding: 0;
    color: inherit;
    cursor: pointer;
    background: transparent;
    border: 0;
    appearance: none;

    &[aria-disabled="true"] {
      pointer-events: none;
    }
  }

  input[type='text'],
  input[type='email'],
  input[type='tel'],
  textarea {
    display: block;
    padding: ${fluidScale("11px", "6px")} 0.875em;
    appearance: none;
    color: ${getVariable("palette", "defaultColor")};
    background-color: var(--box-bg-color);
    border: none;
    border-radius: 4px;
    font-size: 0.889em;

    &::placeholder {
      color: inherit;
    }
  }

  select {
    appearance: none;
    border: none;
    background-color: transparent;
  }

  h1,
  h2,
  h3 {
    color: var(--header-color);
  }

  h4 {
    color: var(--accent-primary);
  }

  .js-focus-visible :is(${INTERACTIVE_ELS}):focus:not(.focus-visible) {
    outline: none;
  }

  :is(${INTERACTIVE_ELS}):focus-visible {
    outline: solid 2px currentColor;
  }
`;
