// State
// --------------------------------------------------------

// Utility functions for setting styles based on component state.
// Classes are prepended with `is-` or `has-`.

export const hasScrollLock = () => `
  &.has-scroll-lock {
    position: absolute;
    width: 100%;
    overflow: hidden;
  }
`;
