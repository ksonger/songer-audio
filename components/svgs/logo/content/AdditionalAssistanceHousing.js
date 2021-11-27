import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function AdditionalAssistanceHousing({
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
        className="a-fill-dark"
        d="M87.18 23c-.47-.86-.36-1.35 0-2.67A8 8 0 0081.5 9.65c-1.3-.44-1.76-.63-2.23-1.49a2.67 2.67 0 00-4.71 2.51 8.18 8.18 0 005.27 4c1.29.43 1.76.62 2.22 1.48s.36 1.36 0 2.68a8 8 0 005.68 10.65C89 30 89.49 30.13 90 31s.36 1.36 0 2.66a8.13 8.13 0 00.42 6.61 2.66 2.66 0 003.48 1.17l.14-.06a2.67 2.67 0 001.09-3.61c-.46-.86-.35-1.36 0-2.67a8 8 0 00-5.73-10.65c-1.29-.45-1.76-.61-2.22-1.45zM76.68 37c-1.31-1.31-1.4-2.32-1.56-4a10.61 10.61 0 00-10.33-10.32c-1.65-.16-2.66-.27-4-1.58A2.67 2.67 0 0057 24.87 10.56 10.56 0 0064.27 28c1.66.17 2.66.27 4 1.58s1.41 2.32 1.57 4a10.61 10.61 0 0010.28 10.34c1.67.16 2.68.27 4 1.58s1.41 2.31 1.57 4a10.52 10.52 0 003.09 7.24 2.65 2.65 0 003 .54 2.67 2.67 0 00.75-4.3c-1.31-1.31-1.4-2.31-1.56-4a10.65 10.65 0 00-10.31-10.37C79 38.44 78 38.34 76.68 37z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="7.4"
        d="M56.32 159.89h187.36v134.36H56.32z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="7.4"
        d="M87.13 190.71h56.7v101.08h-56.7zM164.79 190.71h51.77v54.24h-51.77z"
      />
      <circle className="a-fill-dark" cx="104.7" cy="242.79" r="5.24" />
      <path
        className="a-fill-accent-secondary"
        d="M235.67 90.86H65.47A2.75 2.75 0 0063 92.5l-30.23 67.18a2.77 2.77 0 002.53 3.91h229.4a2.77 2.77 0 002.55-3.87l-29-67.19a2.78 2.78 0 00-2.58-1.67z"
      />
      <rect
        className="a-fill-accent-secondary"
        x="82.2"
        y="61.89"
        width="32.05"
        height="33.28"
        rx="3.85"
      />
      <path
        d="M235.67 90.86H115.49c-.53 0 63.81.37 99.84 17.87 38.73 18.82 49.37 54.86 49.37 54.86a2.77 2.77 0 002.55-3.87l-29-67.19a2.78 2.78 0 00-2.58-1.67z"
        className="a-fill-accent-secondary-dark"
      />
    </ProtoSVG>
  );
}

AdditionalAssistanceHousing.displayName =
  "SVG.ContentIcon.AdditionalAssistanceHousing";

AdditionalAssistanceHousing.propTypes = svgProps;

export default AdditionalAssistanceHousing;
