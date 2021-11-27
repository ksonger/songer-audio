import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function GeoMarker({ width = 12.6, height = 18, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 12.6 18"
      width={width}
      height={height}
      aria-hidden
      {...restProps}
    >
      <path d="M6.29914,18h0a40.90346,40.90346,0,0,1-3.14957-4.07744C1.71277,11.79285,0,8.74226,0,6.3016a6.29914,6.29914,0,1,1,12.59828,0c0,2.44066-1.71276,5.49125-3.14957,7.621A40.902,40.902,0,0,1,6.29914,18Zm0-13.9481A2.2497,2.2497,0,1,0,8.54883,6.3016,2.24969,2.24969,0,0,0,6.29914,4.0519Z" />
    </ProtoSVG>
  );
}

GeoMarker.displayName = "SVG.GeoMarker";

GeoMarker.propTypes = {
  ...svgProps,
};
