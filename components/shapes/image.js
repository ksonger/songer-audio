import PropTypes from "prop-types";

export const craftImageProps = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  altText: PropTypes.string,
  focalPoint: PropTypes.arrayOf(PropTypes.number),
};

export const craftImageShape = PropTypes.shape(craftImageProps);

const imageProps = {
  image: craftImageShape,
  priority: PropTypes.bool,
  sizes: PropTypes.string,
  layout: PropTypes.oneOf(["fixed", "intrinsic", "responsive", "fill"]),
  quality: PropTypes.number,
  objectFit: PropTypes.oneOf([
    "contain",
    "cover",
    "fill",
    "none",
    "scale-down",
  ]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default imageProps;
