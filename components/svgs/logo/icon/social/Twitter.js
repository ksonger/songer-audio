import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function Twitter({ width = 33, height = 27, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 33 27"
      width={width}
      height={height}
      title="Twitter logo"
      {...restProps}
    >
      <path
        d="M48.485,28.856c12.508,0,19.314-10.3,19.314-19.314v-.92A14.952,14.952,0,0,0,71.11,5.127a15.27,15.27,0,0,1-3.863,1.1A7.157,7.157,0,0,0,70.19,2.552,16.872,16.872,0,0,1,65.96,4.207,6.569,6.569,0,0,0,60.993,2a6.911,6.911,0,0,0-6.806,6.806,3.586,3.586,0,0,0,.184,1.472A19.018,19.018,0,0,1,40.391,3.1a7.044,7.044,0,0,0-.92,3.495,7.308,7.308,0,0,0,2.943,5.7,6.2,6.2,0,0,1-3.127-.92h0A6.723,6.723,0,0,0,44.806,18a5.671,5.671,0,0,1-1.839.184A3.13,3.13,0,0,1,41.679,18a6.969,6.969,0,0,0,6.438,4.783,13.888,13.888,0,0,1-8.461,2.943A5.093,5.093,0,0,1,38,25.545a17.362,17.362,0,0,0,10.485,3.311"
        transform="translate(-38 -2)"
        fillRule="evenodd"
      />
    </ProtoSVG>
  );
}

Twitter.displayName = "SVG.Social.Twitter";

Twitter.propTypes = {
  ...svgProps,
};
