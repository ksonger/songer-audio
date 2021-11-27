import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function Facebook({ width = 16, height = 30, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 16 30"
      width={width}
      height={height}
      title="Facebook logo"
      {...restProps}
    >
      <path
        d="M90.243,30.226V16.456h4.7l.672-5.373H90.243V7.724c0-1.511.5-2.687,2.687-2.687h2.855V.168c-.672,0-2.351-.168-4.2-.168C87.556,0,84.7,2.519,84.7,7.053v4.03H80v5.373h4.7V30.226Z"
        transform="translate(-80)"
        fillRule="evenodd"
      />
    </ProtoSVG>
  );
}

Facebook.displayName = "SVG.Social.Facebook";

Facebook.propTypes = {
  ...svgProps,
};
