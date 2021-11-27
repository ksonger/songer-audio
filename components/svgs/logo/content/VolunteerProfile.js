import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function VolunteerProfile({
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
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M120.06 222.81l-9.52 38.49h78.92l-12.57-38.49h-56.83z"
      />
      <rect
        className="a-fill-light a-stroke-dark"
        x="34.25"
        y="70.56"
        width="231.5"
        height="152.25"
        rx="11.98"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        className="a-fill-accent-secondary"
        d="M245.09 152.12a8.42 8.42 0 01.71 3.27 7.64 7.64 0 01-.71 3.27v.25a7.88 7.88 0 01-7.47 4.75h-83.05a7.47 7.47 0 01-7.43-5 7 7 0 01-.76-3.27 7.68 7.68 0 01.76-3.27 7.45 7.45 0 017.43-5h83.05a7.57 7.57 0 017.47 5zM245.09 182.69a8.13 8.13 0 01.71 3.26 7.42 7.42 0 01-.71 3.26 7.59 7.59 0 01-7.47 5h-83.05a7.46 7.46 0 01-7.43-5 6.93 6.93 0 01-.76-3.26 7.58 7.58 0 01.76-3.26 7.39 7.39 0 017.43-5h83.05a7.58 7.58 0 017.47 5zM147.14 128.34a8.78 8.78 0 01-.76-3.5 7.62 7.62 0 01.76-3.27c1-2.74 3.45-4.75 7.43-4.75h83.05c4 0 6.44 2 7.47 4.75a8.35 8.35 0 01.71 3.27 9.31 9.31 0 01-.63 3.28 3.38 3.38 0 01-.18.44 8 8 0 01-7.37 4.79h-83.05a7.45 7.45 0 01-7.43-5.01zM121.49 194.28H54.2v-23.39c0-5.7 4.25-10 10.52-13.15l.12-.07 4.44-2.23 5.11-2.53 4.72-2.38v-6.18c-4.65-3.8-7.66-10.27-7.66-17.54 0-13.5 5-21.09 17.25-21.09s17.24 7.59 17.24 21.09c0 7.27-3 13.74-7.66 17.54v6.18l4.72 2.38 4.89 2.42 4.6 2.31h.07c6.33 3.17 10.64 7.48 10.64 13.22v23.39h-1.54"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M76.04 261.3h147.92"
      />
    </ProtoSVG>
  );
}

VolunteerProfile.displayName = "SVG.ContentIcon.VolunteerProfile";

VolunteerProfile.propTypes = svgProps;

export default VolunteerProfile;
