import PropTypes from "prop-types";
import IconFactory from "@/factories/IconFactory";

function Button({ direction, sliderId, onClick, disabled, className }) {
  const icon = direction === "previous" ? "caretLeft" : "caretRight";

  return (
    <button
      onClick={onClick}
      aria-controls={sliderId}
      aria-disabled={disabled}
      className={className}
    >
      <IconFactory
        icon={icon}
        width={13.08}
        height={20.85}
        className={`${className}__icon`}
      />
      <span className="a-hidden">{direction}</span>
    </button>
  );
}

Button.displayName = "Layout.MobileSlider.Navigation.Button";

Button.propTypes = {
  direction: PropTypes.oneOf(["previous", "next"]),
  onClick: PropTypes.func.isRequired,
  sliderId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
