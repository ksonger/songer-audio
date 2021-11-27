import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function Close({ width = 12, height = 12, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 12 12"
      width={width}
      height={height}
      aria-hidden
      {...restProps}
    >
      <path d="M11.88,1.297,10.704.12l-4.7,4.7L1.304.12.12,1.297l4.7,4.7-4.7,4.7L1.297,11.88l4.7-4.7,4.7,4.7,1.176-1.176-4.7-4.7Z" />
    </ProtoSVG>
  );
}

Close.displayName = "SVG.Close";

Close.propTypes = {
  ...svgProps,
};
