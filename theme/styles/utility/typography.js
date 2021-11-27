import { getVariable, fluidScale, respond } from "@/styles/mixins/common";
import { tLabel, tTruncate, tHeadingStyle } from "@/styles/mixins/typography";
import { logicalWithFallback } from "@/styles/mixins/layout";

// Typography
// -------------------

// Typography-specific utility classes.
// Classes are prefixed with `t-`.

const BLOCK_RTE_TAGS = "p, ul, ol, blockquote, div";

export default `
  .t-rte {
    & :is(${/* sc-selector */ BLOCK_RTE_TAGS}) {
      a {
        &:not([class]) {
          text-decoration: underline;

          &:hover {
            var(--hover-color);
          }
        }
      }
    }

    blockquote {
      ${logicalWithFallback({
        "padding-inline-start": "0.643em",
        "border-inline-start": "2px solid",
      })}
    }

    ul {
      ${logicalWithFallback({ "margin-inline-start": "1em" })}
      list-style-type: disc;
    }

    ol {
      ${logicalWithFallback({ "margin-inline-start": "1em" })}
      list-style-type: decimal;
    }
  }

  .t-label {
    ${tLabel}
  }

  .t-truncate {
    ${tTruncate}
  }

  .t-h-xsmall-accent {
    ${tHeadingStyle("xSmall")}
    color: var(--accent-primary);
  }

  .t-lead-p {
    font-size: ${fluidScale("28px", "20px")};
    font-weight: ${getVariable("fontWeight", "light")};

    ${respond(
      `
        line-height: 1.2;
        font-weight: ${getVariable("fontWeight", "regular")};
    `,
      getVariable("breakpoint", "introText")
    )}
  }

  .t-legacy-post {
    video,
    img {
      ${logicalWithFallback({
        "max-inline-size": getVariable("containerWidth", "min"),
      })}
      margin: 1.625em auto;
    }

    iframe {
      margin: 1.625em auto;
      border: none;
    }
  }
`;
