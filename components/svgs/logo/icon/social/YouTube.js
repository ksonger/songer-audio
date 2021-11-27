import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function YouTube({ width = 36.903, height = 26, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 36.90323 26"
      width={width}
      height={height}
      title="YouTube logo"
      {...restProps}
    >
      <path d="M36.90323,13s0,6.04349-.77113,8.94007a4.63694,4.63694,0,0,1-3.26262,3.28379C29.99158,26,18.45162,26,18.45162,26s-11.54,0-14.41786-.77615A4.63694,4.63694,0,0,1,.77114,21.94006C0,19.04348,0,13,0,13s0-6.04347.77114-8.94A4.637,4.637,0,0,1,4.03376.77613C6.91166,0,18.45162,0,18.45162,0s11.54,0,14.41786.77613A4.637,4.637,0,0,1,36.1321,4.05994C36.90323,6.95652,36.90323,13,36.90323,13ZM14.67742,18.487l9.64516-5.48684L14.67742,7.513Z" />
    </ProtoSVG>
  );
}

YouTube.displayName = "SVG.Social.YouTube";

YouTube.propTypes = {
  ...svgProps,
};
