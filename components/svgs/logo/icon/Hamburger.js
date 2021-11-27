import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function Hamburger({ width = 24, height = 24, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 24 24"
      width={width}
      height={height}
      aria-hidden
      {...restProps}
    >
      <rect x="0.5" y="4" width="23" height="2.667" />
      <rect x="0.5" y="10.6665" width="23" height="2.667" />
      <rect x="0.5" y="17.333" width="23" height="2.667" />
    </ProtoSVG>
  );
}

Hamburger.displayName = "SVG.Hamburger";

Hamburger.propTypes = {
  ...svgProps,
};
