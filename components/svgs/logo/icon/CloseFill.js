import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function CloseFill({ width = 15, height = 15, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 15 15"
      width={width}
      height={height}
      aria-hidden
      {...restProps}
    >
      <path d="M7.5,0A7.5,7.5,0,1,0,15,7.5h0A7.499,7.499,0,0,0,7.502,0ZM9.398,10.2151,7.5,8.31713l-1.898,1.898a.57638.57638,0,1,1-.81656-.81369L4.78689,9.4l1.898-1.898-1.898-1.898A.57638.57638,0,0,1,5.602,4.78889L7.5,6.68687l1.898-1.898a.57639.57639,0,0,1,.81657.8137l-.00143.00143-1.898,1.898,1.898,1.898a.57938.57938,0,0,1,0,.81513.57239.57239,0,0,1-.80948.00167L9.401,10.21411Z" />
    </ProtoSVG>
  );
}

CloseFill.displayName = "SVG.CloseFill";

CloseFill.propTypes = {
  ...svgProps,
};
