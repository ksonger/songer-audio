import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function OurFoodNetworkLocalOrgs({
  width = 280,
  height = 280,
  className,
  ...restProps
}) {
  return (
    <ProtoSVG
      viewBox="0 0 300 300"
      width={width}
      height={height}
      className={`a-icon-content ${className || ""}`}
      {...restProps}
    >
      <ellipse
        cx="130.66"
        cy="274.83"
        rx="81.09"
        ry="11.15"
        className="a-fill-accent-secondary-dark"
      />
      <path
        d="M130.45 1.41a93.51 93.51 0 0193.38 93.37c0 45.59-23.53 70.59-48.53 111l-44.85 72.05-44.85-72.02c-25-40.44-48.52-65.44-48.52-111a93.51 93.51 0 0193.37-93.4zm0 38.23A51.47 51.47 0 1179 91.11a51.62 51.62 0 0151.45-51.47z"
        className="a-fill-accent-secondary"
        fillRule="evenodd"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M149.16 202.76h109.67v78.64H149.16z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M167.2 220.8h33.19v59.16H167.2zM212.65 220.8h30.3v31.75h-30.3z"
      />
      <circle cx="177.48" cy="251.28" r="3.07" className="a-fill-dark" />
      <rect
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        x="164.31"
        y="145.41"
        width="18.76"
        height="19.48"
        rx="2.26"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M254.13 162.36h-99.61a1.63 1.63 0 00-1.48 1l-17.66 39.32a1.62 1.62 0 001.48 2.29h134.27a1.62 1.62 0 001.49-2.27l-17-39.32a1.62 1.62 0 00-1.49-1.02z"
      />
    </ProtoSVG>
  );
}

OurFoodNetworkLocalOrgs.displayName = "SVG.ContentIcon.OurFoodNetworkLocalOrgs";

OurFoodNetworkLocalOrgs.propTypes = svgProps;

export default OurFoodNetworkLocalOrgs;
