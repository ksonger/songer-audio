import PropTypes from "prop-types";
import { useThemedGroupContext, useNestingContext } from "@/hooks";
import * as Styled from "./styles";

function Container({
  as,
  bgColor = "default",
  width = "wide",
  stretchBlock = true,
  children,
}) {
  const grouped = useThemedGroupContext();
  const nested = useNestingContext();

  return (
    <Styled.Container
      as={as}
      className={!grouped ? `a-bg-${bgColor}` : null}
      $padBlock={!grouped}
      $stretchBlock={stretchBlock && nested}
    >
      <Styled.Inner $width={width} $padInline={!nested}>
        {children}
      </Styled.Inner>
    </Styled.Container>
  );
}

Container.displayName = "Layout.Container";

Container.propTypes = {
  bgColor: PropTypes.oneOf([
    "default",
    "accent-primary",
    "neutral15",
    "transparent",
  ]),
  width: PropTypes.oneOf(["max", "wide", "narrow", "min"]),
  nested: PropTypes.bool,
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  stretchBlock: PropTypes.bool,
};

export default Container;
