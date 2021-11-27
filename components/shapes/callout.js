import PropTypes from "prop-types";
import { craftImageShape } from "@/shapes/image";

export const calloutProps = {
  heading: PropTypes.string,
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  label: PropTypes.string,
  image: PropTypes.arrayOf(craftImageShape),
  imagePosition: PropTypes.oneOf(["left", "right"]),
  link: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  showZipCode: PropTypes.bool,
  layout: PropTypes.oneOf(["columns", "stack"]),
  className: PropTypes.string,
  mobileButtonProps: PropTypes.shape({
    type: PropTypes.string,
    postIcon: PropTypes.string,
  }),
};

export const calloutShape = PropTypes.shape(calloutProps);

export default calloutShape;
