import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function Play({ width = 32, height = 36.59, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 16 18.28509"
      width={width}
      height={height}
      aria-hidden
      {...restProps}
    >
      <path d="M15.15728,7.66669,2.58568.23446A1.70493,1.70493,0,0,0,0,1.7095V16.57024a1.71271,1.71271,0,0,0,2.58568,1.47567l12.5716-7.42913a1.71256,1.71256,0,0,0,0-2.95009Z" />
    </ProtoSVG>
  );
}

Play.displayName = "SVG.Play";

Play.propTypes = {
  ...svgProps,
};
