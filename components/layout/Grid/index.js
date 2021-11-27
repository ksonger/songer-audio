import React from "react";
import PropTypes from "prop-types";
import MobileSlider from "@/layout/MobileSlider";
import * as Styled from "./styles";

function Grid({
  type = "flow",
  columns = 3,
  gap = "medium",
  children,
  slideOnMobile,
  sliderProps = {},
}) {
  const StyledGridEl = type === "flow" ? Styled.FlowGrid : Styled.FixedGrid;
  const GridComponent = ({
    slideWrapperRef,
    sliderActive,
    activeIndex,
    slideProps,
  }) => (
    <StyledGridEl
      ref={slideWrapperRef}
      $columns={columns}
      $gap={gap}
      $sliderActive={sliderActive}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...slideProps,
            isActiveSlide: !sliderActive || index === activeIndex,
          });
        }
        return child;
      })}
    </StyledGridEl>
  );

  if (slideOnMobile)
    return (
      <MobileSlider {...sliderProps}>
        {(slideWrapperRef, sliderActive, activeIndex, slideProps) => (
          <GridComponent
            slideWrapperRef={slideWrapperRef}
            sliderActive={sliderActive}
            activeIndex={activeIndex}
            slideProps={slideProps}
          />
        )}
      </MobileSlider>
    );

  return <GridComponent />;
}

Grid.displayName = "Layout.Grid";

Grid.propTypes = {
  type: PropTypes.oneOf(["flow", "fixed"]),
  columns: PropTypes.oneOf([2, 3, 4, 5]),
  gap: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
  slideOnMobile: PropTypes.bool,
  slideWrapperRef: PropTypes.object,
  sliderActive: PropTypes.bool,
  sliderProps: PropTypes.shape({
    ariaLabel: PropTypes.string,
    navYOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    breakpoint: PropTypes.number,
  }),
};

export default Grid;
