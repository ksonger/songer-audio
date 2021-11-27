import PropTypes from "prop-types";

export const iconProps = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export const iconShape = PropTypes.shape(iconProps);

export default iconShape;
