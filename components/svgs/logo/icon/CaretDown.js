import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function CaretDown({ width = 12, height = 8, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 12 8"
      width={width}
      height={height}
      aria-hidden
      {...restProps}
    >
      <path d="M10.416.441,6,4.841,1.584.441.228,1.796,6,7.56l5.772-5.764Z" />
    </ProtoSVG>
  );
}

CaretDown.displayName = "SVG.CaretDown";

CaretDown.propTypes = {
  ...svgProps,
};
