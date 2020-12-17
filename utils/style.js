import responsive from "../constants/responsive";

/**
 * Applies form factor suffixes to class names
 * @param element
 * @returns {string}
 */
export const styleState = (element) => {
  const mobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= responsive.BREAKPOINTS[responsive.BREAKPOINT]
    }
  };
  return mobile() ? `${element}--mobile` : `${element}--desktop`
}