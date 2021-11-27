export function lSetAspectRatio(width, height) {
  return `
    &::before {
      float: left;
      content: "";
      padding-top: ${(height / width) * 100}%;
    }

    &::after {
      display: block;
      content: "";
      clear: both;
    }

    @supports (aspect-ratio: 1 / 1) {
      aspect-ratio: ${width} / ${height};

      &::before,
      &::after {
        content: none;
      }
    }
  `;
}
