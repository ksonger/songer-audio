import { getVariable } from "@/styles/mixins/common";
import { aHidden, aPrimaryButton } from "@/styles/mixins/appearance";

// Appearance
// --------------------

// Appearance classes contain primarily texture parameters: background-color, transparency, borders, etc.
// Appearance classes can define a CSS variable for all children, such as --secondary-color
// These should be limited to appearance-related properties only.
// Classes are prefixed with `a-`.

export default `
  .a-hidden {
    ${aHidden}
  }

  [class*="a-bg-"] {
    color: var(--color);
    background-color: var(--bg-color);
  }

  .a-bg-default-gradient,
  .a-bg-neutral15-gradient,
  .a-bg-accent-primary-gradient {
    color: var(--color);
    background: linear-gradient(to bottom, ${getVariable(
      "palette",
      "defaultBgColor"
    )}, var(--bg-color));
  }

  .a-bg-default,
  .a-bg-default-gradient {
    --color: ${getVariable("palette", "defaultColor")};
    --header-color: ${getVariable("palette", "neutral90")};
    --accent-primary: ${getVariable("palette", "accentPrimary")};
    --bg-color: ${getVariable("palette", "defaultBgColor")};
    --box-bg-color: ${getVariable("palette", "neutral15")};
    --hover-color: ${getVariable("palette", "neutral100")};
  }

  .a-bg-neutral05 {
    --color: ${getVariable("palette", "defaultColor")};
    --header-color: ${getVariable("palette", "neutral90")};
    --accent-primary: ${getVariable("palette", "accentPrimary")};
    --bg-color: ${getVariable("palette", "neutral05")};
    --box-bg-color: ${getVariable("palette", "defaultBgColor")};
    --hover-color: ${getVariable("palette", "neutral100")};
  }

  .a-bg-neutral15,
  .a-bg-neutral15-gradient {
    --color: ${getVariable("palette", "defaultColor")};
    --header-color: ${getVariable("palette", "neutral90")};
    --accent-primary: ${getVariable("palette", "accentPrimary")};
    --bg-color: ${getVariable("palette", "neutral15")};
    --box-bg-color: ${getVariable("palette", "defaultBgColor")};
    --hover-color: ${getVariable("palette", "neutral100")};
  }

  .a-bg-neutral90 {
    --color: ${getVariable("palette", "defaultBgColor")};
    --header-color: ${getVariable("palette", "defaultBgColor")};
    --accent-primary: ${getVariable("palette", "defaultBgColor")};
    --bg-color: ${getVariable("palette", "neutral90")};
    --box-bg-color: ${getVariable("palette", "defaultBgColor")};
    --hover-color: ${getVariable("palette", "defaultBgColor")};
  }

  .a-bg-accent-primary,
  .a-bg-accent-primary-gradient {
    --color: ${getVariable("palette", "defaultBgColor")};
    --header-color: ${getVariable("palette", "defaultBgColor")};
    --accent-primary: ${getVariable("palette", "neutral90")};
    --bg-color: ${getVariable("palette", "accentPrimary")};
    --box-bg-color: ${getVariable("palette", "defaultBgColor")};
    --small-text-font-weight: ${getVariable("fontWeight", "bold")};
    --hover-color: ${getVariable("palette", "defaultBgColor")};
  }

  .a-bg-accent-secondary {
    --color: ${getVariable("palette", "neutral90")};
    --header-color: ${getVariable("palette", "neutral90")};
    --accent-primary: ${getVariable("palette", "neutral90")};
    --bg-color: ${getVariable("palette", "accentSecondary")};
    --box-bg-color: ${getVariable("palette", "defaultBgColor")};
    --hover-color: ${getVariable("palette", "neutral100")};
  }

  .a-bg-transparent {
    --color: ${getVariable("palette", "defaultBgColor")};
    --header-color: ${getVariable("palette", "defaultBgColor")};
    --accent-primary: ${getVariable("palette", "accentPrimary")};
    --bg-color: transparent;
    --box-bg-color: ${getVariable("palette", "defaultBgColor")};
    --hover-color: ${getVariable("palette", "defaultBgColor")};
  }

  /* Icon fill classes */
  .a-icon-content {
    fill: none;
  }

  .a-fill-dark {
    fill: ${getVariable("palette", "neutral90")};
  }

  .a-stroke-dark {
    stroke: ${getVariable("palette", "neutral90")};
  }

  .a-fill-light {
    fill: ${getVariable("palette", "defaultBgColor")};
  }

  .a-stroke-light {
    stroke: ${getVariable("palette", "defaultBgColor")};
  }

  .a-fill-neutral30 {
    fill: ${getVariable("palette", "neutral30")};
  }

  .a-stroke-neutral30 {
    stroke: ${getVariable("palette", "neutral30")};
  }

  .a-fill-neutral40 {
    fill: ${getVariable("palette", "neutral40")};
  }

  .a-stroke-neutral40 {
    stroke: ${getVariable("palette", "neutral40")};
  }

  .a-fill-accent-primary {
    fill: ${getVariable("palette", "accentPrimary")};
  }

  .a-stroke-accent-primary {
    stroke: ${getVariable("palette", "accentPrimary")};
  }

  .a-fill-accent-primary-alt {
    fill: ${getVariable("palette", "accentPrimaryAlt")};
  }

  .a-stroke-accent-primary-alt {
    stroke: ${getVariable("palette", "accentPrimaryAlt")};
  }

  .a-fill-accent-secondary {
    fill: ${getVariable("palette", "accentSecondary")};
  }

  .a-stroke-accent-secondary {
    stroke: ${getVariable("palette", "accentSecondary")};
  }

  .a-fill-accent-secondary-alt {
    fill: ${getVariable("palette", "accentSecondaryAlt")};
  }

  .a-stroke-accent-secondary-alt {
    stroke: ${getVariable("palette", "accentSecondaryAlt")};
  }

  .a-fill-accent-secondary-dark {
    fill: ${getVariable("palette", "accentSecondaryDark")};
  }

  .a-stroke-accent-secondary-dark {
    stroke: ${getVariable("palette", "accentSecondaryDark")};
  }

  .a-fill-accent-secondary-dark-alt {
    fill: ${getVariable("palette", "accentSecondaryDarkAlt")};
  }

  .a-stroke-accent-secondary-dark-alt {
    stroke: ${getVariable("palette", "accentSecondaryDarkAlt")};
  }

  .a-fill-accent-secondary-light {
    fill: ${getVariable("palette", "accentSecondaryLight")};
  }

  .a-stroke-accent-secondary-light {
    stroke: ${getVariable("palette", "accentSecondaryLight")};
  }

  .a-fill-accent-tertiary {
    fill: ${getVariable("palette", "accentTertiary")};
  }

  .a-stroke-accent-tertiary {
    stroke: ${getVariable("palette", "accentTertiary")};
  }

  /* RTE utility classes */
  .a-button-primary-accent {
    --color: ${getVariable("palette", "defaultBgColor")};
    --bg-color: ${getVariable("palette", "accentPrimary")};

    ${aPrimaryButton()}
    display: inline-block;
    color: var(--color);
    background-color: var(--bg-color);
    transition: background-color var(--transition-duration) var(--transition-timing);

    &:hover,
    &:focus-visible {
      --bg-color: ${getVariable("palette", "accentPrimaryDark")};
    }
  }
`;
