import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function PlusFill({ width = 18, height = 18, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 18 18"
      width={width}
      height={height}
      aria-hidden
      {...restProps}
    >
      <path d="M2.63868,15.36132A8.99627,8.99627,0,1,1,9,18,8.99628,8.99628,0,0,1,2.63868,15.36132ZM8.10306,9.897h0v4.56743H9.897V9.897h4.56743V8.10305H9.897V3.53562H8.10306V8.10305H3.53563V9.897l4.56679.00063Z" />
    </ProtoSVG>
  );
}

PlusFill.displayName = "SVG.PlusFill";

PlusFill.propTypes = {
  ...svgProps,
};
