import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useUID } from "react-uid";
import useResizeObserver from "use-resize-observer";
import { getVariableValue } from "@/styles/mixins/common";
import defaultFlickityOptions from "./flickityOptions";
import Navigation from "./Navigation";
import * as Styled from "./styles";

const CONTAINER_BREAKPOINT = getVariableValue("breakpoint", "mobileSlider");

function MobileSlider({
  navYOffset = "50%",
  breakpoint = CONTAINER_BREAKPOINT,
  ariaLabel,
  flickityOptions = {},
  children,
}) {
  const flickity = useRef(null);
  const slideWrapperRef = useRef(null);
  const uid = useUID();
  const mergedFlickityOptions = Object.assign(
    {},
    defaultFlickityOptions,
    flickityOptions
  );

  useEffect(() => {
    async function loadFlickity() {
      const Flickity = (await import("flickity")).default;
      flickity.current = new Flickity(slideWrapperRef.current, {
        ...mergedFlickityOptions,
        initialIndex: activeIndex,
      });
      flickity.current.on("change", (index) => setActiveIndex(index));
    }

    loadFlickity();

    return () => {
      if (!flickity?.current) return;
      flickity.current.destroy();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [sliderActive, setSliderActive] = useState(false);
  const resizeObserver = useResizeObserver({
    ref: typeof window !== "undefined" ? document.documentElement : null,
    onResize: ({ width }) => {
      if (sliderActive && width > breakpoint) setSliderActive(false);
      if (!sliderActive && width <= breakpoint) setSliderActive(true);
    },
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!flickity?.current) return;
    flickity.current.select(activeIndex);
  }, [activeIndex]);

  function handleNavigationClick(direction) {
    const cellCount = flickity.current.cells.length;
    if (direction === "previous") {
      setActiveIndex((prevActive) =>
        prevActive === 0 ? cellCount - 1 : prevActive - 1
      );
      return;
    }

    setActiveIndex((prevActive) =>
      prevActive === cellCount - 1 ? 0 : prevActive + 1
    );
  }

  const slideProps = !sliderActive
    ? {}
    : {
        "aria-roledescription": "slide",
        role: "group",
        className: "slide",
      };

  return (
    <Styled.Slider
      id={uid}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      $sliderActive={sliderActive}
    >
      {sliderActive && (
        <Navigation
          sliderId={uid}
          yOffset={navYOffset}
          onClick={handleNavigationClick}
          disabled={{
            previous: !mergedFlickityOptions.wrapAround && activeIndex === 0,
            next:
              !mergedFlickityOptions.wrapAround &&
              activeIndex === flickity.current?.cells?.length - 1,
          }}
        />
      )}
      {children(slideWrapperRef, sliderActive, activeIndex, slideProps)}
    </Styled.Slider>
  );
}

MobileSlider.displayName = "Layout.MobileSlider";

MobileSlider.propTypes = {
  navYOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  breakpoint: PropTypes.number,
  ariaLabel: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func]).isRequired,
};

export default MobileSlider;
