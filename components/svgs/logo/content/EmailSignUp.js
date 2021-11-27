import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function EmailSignUp({ width = 280, height = 280, className, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 300 300"
      width={width}
      height={height}
      className={`a-icon-content ${className || ""}`}
      {...restProps}
    >
      <path
        d="M250.71 81a23.34 23.34 0 00-21.19-13.58H28.21A23.38 23.38 0 004.85 90.71v128.78a23.4 23.4 0 0023.36 23.37h34.4a8.71 8.71 0 012 6.26c-.94 8.93-13.36 19.25-18.07 22.47a4 4 0 002.24 7.25h.12c36.24-1.2 45.36-26.41 47.5-36h133.12a23.39 23.39 0 0023.35-23.37V90.71a23 23 0 00-2.16-9.71zm-38.86 35.64v77a9.05 9.05 0 01-.62 3l-61.93-42.27 61.88-41.07a9.24 9.24 0 01.67 3.29zm-83 41.83L50.71 107.7a9.06 9.06 0 012.67-.54h149a9.29 9.29 0 012.79.56zM44 116.59a9.35 9.35 0 01.68-3.35L108 154.38 44.64 197a9.33 9.33 0 01-.68-3.33zm71.3 42.5l11.44 7.42a3.85 3.85 0 002.16.65 3.93 3.93 0 002.2-.68l11.1-7.36 63.41 43.29a8.94 8.94 0 01-3.15.65h-149a9.22 9.22 0 01-2.77-.56z"
        className="a-fill-accent-secondary"
      />
      <path
        d="M214.7 231.77a26.84 26.84 0 0022.5-22.21L250.71 81a23 23 0 012.16 9.76v128.73a23.39 23.39 0 01-23.35 23.37H96"
        className="a-fill-accent-secondary-dark"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        className="a-stroke-accent-secondary"
        d="M268.67 74.79l26.48 4.92M253.75 47.34l6.31-26.18M266.43 58.29l22.96-14.08M235.57 48.95l-13.33-23.4"
      />
      <rect
        x="45.37"
        y="103.28"
        width="168.39"
        height="102.5"
        rx="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        className="a-fill-light a-stroke-dark"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        className="a-stroke-dark"
        d="M48.72 107.16l82.32 56.56 79.38-55.34M208.57 203.55l-64.78-46.92M50.57 203.55l64.77-46.92"
      />
    </ProtoSVG>
  );
}

EmailSignUp.displayName = "SVG.ContentIcon.EmailSignUp";

EmailSignUp.propTypes = svgProps;

export default EmailSignUp;
