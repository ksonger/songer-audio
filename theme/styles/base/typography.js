import { getVariable, fluidScale, fluidFontSize } from "@/styles/mixins/common";
import { tHeadingStyle } from "@/styles/mixins/typography";
import { logicalWithFallback } from "@/styles/mixins/layout";

const HEADER_TAGS = "h1, h2, h3, h4, h5, h6";
const CONTENT_TAGS = "h2, p, ul, ol, blockquote, a, button";
const BODY_FONT_FAMILY = "roboto";

// Base Typography
// --------------------
export default `
  /* style fallback font to prevent FOUT using https://meowni.ca/font-style-matcher/ */
  /* when loaded (.font-roboto-loaded), remove fallback-specific styles */
  body {
    font-size: calc(${fluidFontSize("base")} * 15 / 16);
    font-family: ${getVariable("fontFamily", "default")};
    font-weight: ${getVariable("fontWeight", "regular")};
    line-height: calc(${getVariable("lineHeight", "default")} * 16 / 15);
    letter-spacing: 0.3px;
    word-spacing: 1px;
  }

  html.font-${BODY_FONT_FAMILY}-loaded body {
    font-size: ${fluidFontSize("base")};
    line-height: ${getVariable("lineHeight", "default")};
    word-spacing: initial;
    letter-spacing: initial;
  }

  :is(${HEADER_TAGS}) {
    ${logicalWithFallback({ "margin-block-end": "0.625em" })}
    font-family: ${getVariable("fontFamily", "header")};

    &:last-child {
      ${logicalWithFallback({ "margin-block-end": 0 })}
    }
  }

  h1 {
    ${tHeadingStyle("large")}
  }

  h2 {
    ${tHeadingStyle("medium")}
  }

  h3 {
    ${tHeadingStyle("small")}
  }

  h4 {
    ${tHeadingStyle("xSmall")}
  }

  h5 {
    font-size: inherit;
    font-weight: inherit;
    line-height: ${getVariable("lineHeight", "hDefault")};
  }

  blockquote {
    font-size: ${fluidScale("28px", "16px")};
    font-weight: ${getVariable("fontWeight", "light")};
    font-style: italic;
    line-height: 1.357;

    &::before {
      content: "“";
      display: inline;
    }

    &::after {
      content: "”";
      display: inline;
    }
  }

  ul,
  ol {
    list-style: none;
  }

  li + li {
    ${logicalWithFallback({ "margin-block-start": "0.5rem" })}
  }

  :is(${CONTENT_TAGS}) {
    & + & {
      ${logicalWithFallback({ "margin-block-start": "1.625em" })}
    }
  }

  select {
    font-weight: ${getVariable("fontWeight", "bold")};
  }

  legend {
    font-size: ${fluidScale("22px", "16px")};
  }

  figcaption {
    font-size: ${fluidScale("14px", "12px")};
    line-height: 1.25;
  }
`;
