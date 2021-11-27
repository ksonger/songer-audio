import PropTypes from "prop-types";
import * as Styled from "./styles";

function Navigation({ sliderId, yOffset, onClick, disabled }) {
  return (
    <Styled.Navigation $yOffset={yOffset}>
      <Styled.PrevButton
        direction="previous"
        sliderId={sliderId}
        onClick={() => onClick("previous")}
        disabled={disabled.previous}
      />
      <Styled.NextButton
        direction="next"
        sliderId={sliderId}
        onClick={() => onClick("next")}
        disabled={disabled.next}
      />
    </Styled.Navigation>
  );
}

Navigation.displayName = "Layout.MobileSlider.Navigation";

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
  sliderId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  yOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.shape({
    previous: PropTypes.bool,
    next: PropTypes.bool,
  }),
};

export default Navigation;
