import _ from "lodash";
import responsive from "../constants/responsive";

/**
 * Returns form factor boolean according to breakpoint
 * @returns {boolean}
 */
export const mobile = (bp) => {
  return window.innerWidth <= responsive.BREAKPOINTS[bp]
};

/**
 * Update page content per display form factor
 */
export const onWindowResize = (cb) => {
  const windowWidth = window.innerWidth
  let bp = ''
  _.forEach(_.keys(responsive.BREAKPOINTS), (key) => {
    if (windowWidth > responsive.BREAKPOINTS[key]) {
      bp = key
    }
  })
  const debounced = _.debounce(
    () => {
      cb(bp)
    },
    200,
    false
  )
  debounced()
}

/**
 * Returns a class value per form factor
 * @param element
 * @param bp
 * @returns {string}
 */
export const styleState = (element, bp) => {
  return mobile(bp) ? `${element}--mobile` : `${element}--desktop`
}