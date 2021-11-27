import PropTypes from "prop-types";

export const stepProps = {
  step: PropTypes.number,
  question: PropTypes.string,
  options: PropTypes.object,
  text: PropTypes.string,
  iconSlug: PropTypes.string,
  proceedText: PropTypes.string,
};

export const stepShape = PropTypes.shape(stepProps);

export default stepShape;
