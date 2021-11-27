import { css } from "styled-components";

function fontFace(name, filename, style = "normal", weight = 400) {
  return css`
    @font-face {
      font-family: ${name};
      font-style: ${style};
      font-weight: ${weight};
      font-display: swap;
      src: url("/fonts/${filename}.woff2") format("woff2"),
        url("/fonts/${filename}.woff") format("woff");
    }
  `;
}

export default css``;
