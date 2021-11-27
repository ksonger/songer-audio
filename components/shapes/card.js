import PropTypes from "prop-types";
import { buttonStyleProps } from "@/shapes/button";
import { craftImageShape } from "@/shapes/image";
import { iconShape } from "@/shapes/icon";

export const cardProps = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf([
    "search",
    "bio",
    "blogPost",
    "icon",
    "cardSection",
    "placeholder",
    "default",
  ]),
  image: PropTypes.arrayOf(craftImageShape),
  icon: PropTypes.arrayOf(iconShape),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  link: PropTypes.array,
  linkProps: PropTypes.shape({
    ...buttonStyleProps,
  }),
  FooterComponent: PropTypes.func,
  imageSizes: PropTypes.string,
};

export const cardShape = PropTypes.shape(cardProps);

export default cardShape;
