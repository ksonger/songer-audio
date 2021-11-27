import styled from "styled-components";
import { logicalWithFallback } from "@/styles/mixins/layout";

const GAP_MAP = {
  small: 5,
  medium: 15,
  large: 45,
};

function setColumnMinWidthVar(columns, gap) {
  const shrinkAffordance = 0.83; // set column min-width a bit below computation from --container-inline-size
  return `
    --column-min-inline-size: calc(
      (var(--container-inline-size) - ${GAP_MAP[gap] * (columns - 1)}px) /
        ${columns} * ${shrinkAffordance}
    );
  `;
}

function getSliderStyles(sliderActive, gap) {
  if (!sliderActive) return ``;

  return `
    display: block;

    /* initialize flickity via CSS (https://flickity.metafizzy.co/options.html#watchcss) */
    &::after {
      display: none;
      content: "flickity";
    }

    .slide {
      ${logicalWithFallback({
        "inline-size": "var(--column-inline-size, 67%)",
        "min-inline-size": "var(--column-min-inline-size)",
      })}
      margin: 0 ${GAP_MAP[gap] / 2}px ${GAP_MAP[gap] / 2}px;
    }
  `;
}

const sharedGridStyles = (gap) => `
  display: grid;
  column-gap: ${GAP_MAP[gap]}px;
  row-gap: var(--grid-row-gap, ${GAP_MAP[gap]}px);
`;

/*
 * FlowGrid looks for the nearest ancestor `--container-inline-size` value
 * (set on Container component instances) and uses that in conjunction with
 * the `$columns` and `$gap` props to compute a min-width for grid columns.
 * The resulting variable is used to declare an auto-filling grid template,
 * which on desktop should match the desired number of columns
 * but automatically wrap on narrower viewports.
 */
export const FlowGrid = styled.div`
  ${(p) => setColumnMinWidthVar(p.$columns, p.$gap)}
  ${(p) => sharedGridStyles(p.$gap)}
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--column-min-inline-size), 1fr)
  );

  ${(p) => getSliderStyles(p.$sliderActive, p.$gap)}
`;

export const FixedGrid = styled.div`
  ${(p) => sharedGridStyles(p.$gap)}
  grid-template-columns: repeat(${(p) => p.$columns}, 1fr);

  ${(p) => getSliderStyles(p.$sliderActive, p.$gap)}
`;
