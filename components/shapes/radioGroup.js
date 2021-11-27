import PropTypes from "prop-types";

export const radioGroupProps = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export const radioGroupShape = PropTypes.shape(radioGroupProps);

export default radioGroupShape;
