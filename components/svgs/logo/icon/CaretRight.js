import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function CaretRight({ width = 8, height = 12, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 8 12"
      width={width}
      height={height}
      aria-hidden
      {...restProps}
    >
      <path d="M.4405,1.5845l4.4,4.416-4.4,4.416,1.355,1.356,5.764-5.772L1.7955.2285Z" />
    </ProtoSVG>
  );
}

CaretRight.displayName = "SVG.CaretRight";

CaretRight.propTypes = {
  ...svgProps,
};
