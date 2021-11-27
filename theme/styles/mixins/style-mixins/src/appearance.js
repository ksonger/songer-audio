// Appearance mixins
// --------------------

export const aHidden = () => {
  return `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  `;
};

export const aFocus = (content) => {
  return `
    &:focus {
      outline: 0;
    }

    &:focus-visible {
      ${content}
    }
  `;
};

export const aHover = (content) => {
  return `
    @media (hover: hover) {
      &:hover {
        ${content}
      }
    }
  `;
};

export const aPxToRem = (px, rootSize = 16) => {
  const pxNum = parseInt(px, 10);
  const rootPxNum = parseInt(rootSize, 10);
  return `
    ${pxNum / rootPxNum}rem
  `;
};
