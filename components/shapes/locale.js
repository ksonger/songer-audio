import PropTypes from "prop-types";

export const siteProps = {
  handle: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  subpath: PropTypes.string,
};

export const siteShape = PropTypes.exact(siteProps);

export default siteShape;
