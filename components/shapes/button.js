import PropTypes from "prop-types";

export const buttonStyleProps = {
  type: PropTypes.oneOf([
    "primary",
    "primaryAccent",
    "outlined",
    "outlinedSmall",
    "underlined",
    "underlinedOnActive",
    "inline",
    "bolded",
  ]),
  preIcon: PropTypes.string,
  postIcon: PropTypes.string,
};

export const buttonProps = {
  ...buttonStyleProps,
  label: PropTypes.string.isRequired,
  as: PropTypes.string,
  href: PropTypes.string,
  active: PropTypes.bool,
  htmlType: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};

export const buttonShape = PropTypes.shape(buttonProps);

export default buttonShape;
