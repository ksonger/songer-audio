import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function AdditionalAssistanceChildCare({
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
        d="M276.55 288.5H23.45a11 11 0 01-10.95-10.95V118c0-6 4.93-38.95 11-38.95h253.1c6 0 10.95 32.93 10.95 39v159.6a11 11 0 01-11 10.85z"
        strokeWidth="5.47"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="a-fill-light a-stroke-dark"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
        d="M65.76 20h-1.13c-7.5 0-20.45 30-20.45 37.48v157.89A13.67 13.67 0 0057.81 229h14.77a13.67 13.67 0 0013.63-13.63V57.48C86.21 50 73.26 20 65.76 20zM44.18 60.11h42.03M46.12 77.44h37.47M46.12 94.48h37.47M107.79 31h-1.14c-7.49 0-20.44 30-20.44 37.48v157.89A13.67 13.67 0 0099.84 240h14.77a13.67 13.67 0 0013.63-13.63V68.48C128.24 61 115.29 31 107.79 31zM86.21 71.11h42.03M88.15 88.44h37.47M88.15 105.48h37.47M149.82 21h-1.14c-7.49 0-20.44 30-20.44 37.48v157.89A13.67 13.67 0 00141.87 230h14.76a13.67 13.67 0 0013.63-13.63V58.48C170.26 51 157.31 21 149.82 21zM128.24 61.11h42.02M130.17 78.44h37.47M130.17 95.48h37.47M191.85 26h-1.14c-7.5 0-20.45 30-20.45 37.48v157.89A13.67 13.67 0 00183.89 235h14.77a13.67 13.67 0 0013.63-13.63V63.48C212.29 56 199.34 26 191.85 26zM170.26 66.11h42.03M172.2 83.44h37.47M172.2 100.48h37.47M235.37 40.5h-1.13c-7.5 0-20.45 30-20.45 37.48v157.89a13.67 13.67 0 0013.63 13.63h14.77a13.67 13.67 0 0013.63-13.63V78c0-7.51-12.95-37.5-20.45-37.5zM213.79 80.61h42.03M215.73 97.94h37.47M215.73 114.98h37.47"
      />
      <rect
        x="12.5"
        y="126"
        width="275"
        height="164"
        rx="2.23"
        className="a-fill-accent-secondary"
      />
      <path
        d="M15.23 129h270.54a2.23 2.23 0 012.23 2.23V291c-26-1-7-83-59-126S14.63 129 15.23 129z"
        className="a-fill-accent-secondary-dark"
      />
      <rect
        x="12.5"
        y="126"
        width="275"
        height="164"
        rx="2.23"
        strokeWidth="6"
        className="a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
        cx="150"
        cy="223.75"
        rx="72"
        ry="34.25"
      />
    </ProtoSVG>
  );
}

AdditionalAssistanceChildCare.displayName =
  "SVG.ContentIcon.AdditionalAssistanceChildCare";

AdditionalAssistanceChildCare.propTypes = svgProps;

export default AdditionalAssistanceChildCare;
