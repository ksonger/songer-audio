import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function CaretLeft({ width = 8, height = 12, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 8 12"
      width={width}
      height={height}
      aria-hidden
      {...restProps}
    >
      <path d="M7.5595,10.4165l-4.4-4.416,4.4-4.416L6.2045.2285.4405,6.0005l5.764,5.772Z" />
    </ProtoSVG>
  );
}

CaretLeft.displayName = "SVG.CaretLeft";

CaretLeft.propTypes = {
  ...svgProps,
};
