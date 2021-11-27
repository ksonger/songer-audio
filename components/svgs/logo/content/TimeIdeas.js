import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function TimeIdeas({ width = 280, height = 280, className, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 300 300"
      width={width}
      height={height}
      className={`a-icon-content ${className || ""}`}
      {...restProps}
    >
      <path
        d="M119.24 258s-8.26 15.3 32 15S180 258 180 258"
        className="a-fill-light a-stroke-dark"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M111.31 221.3s-.68 14.71 0 19S125 262.68 149 263.68s41-16.05 41-26.53-1-33.75 0-38.11 7-14.36 15-23.36 18.65-24.32 17.33-45.66-4.46-51.34-41.4-67.84-99.5-.5-100.71 66c-.22 35.5 18.78 47.5 23.71 53.91 2.87 3.74 7.07 9.59 9.07 23.59h37.65"
        className="a-fill-light"
      />
      <path
        d="M222 127a73.34 73.34 0 01-21.1 51.81 34.7 34.7 0 00-9.69 24.6v.44l.41 16.83v5.18c0 10.24-3.68 20.07-12 27.13 4.13-7.06 1.38-32.64 1.38-45.44a86 86 0 01.67-10.76l5.61-44.58A60.1 60.1 0 00174 106.92a59.2 59.2 0 00-53.52-20.87A48.34 48.34 0 0084 111.54c-2.81 5.3-5 9.31-5 8.79 3-35.87 31.43-63.87 66.53-66.33H154a71.2 71.2 0 0145.26 19.46A74.7 74.7 0 01222 127z"
        className="a-fill-accent-secondary"
      />
      <path
        className="a-stroke-dark"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M111.31 221.3s-.68 14.71 0 19c10.21 29.55 71.77 32.38 78.7-3.19 0-10.47-1-33.75 0-38.11s7-14.36 15-23.36c26.61-28.87 27.21-89.32-24.06-113.5-72.94-33.37-138.36 63.68-77 119.91 2.87 3.74 7.07 9.59 9.07 23.59h37.65M74.07 86.24L50.86 72.59M64.63 110.24l-26.33-5.65M63.93 137.33L37 137.5M92.45 62.26L76.49 40.57M120.02 44.4l-7.11-25.97M149.99 40.87l-1.05-26.91M228.8 87.8l23.22-13.65M208.43 63.82l15.96-21.7M180.85 45.96l7.12-25.98M237.2 110.7l26.33-5.65M237.9 137.79l26.93.17"
      />
      <path
        className="a-stroke-dark"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M142.93 261.5v-30.28a9.67 9.67 0 00-4.06-8 7.68 7.68 0 00-10.57 2.33c-6.3 9 20.24 10.92 28.78 9.89"
      />
      <path
        className="a-stroke-dark"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M157.08 261.5v-30.28a9.67 9.67 0 014.06-8 7.68 7.68 0 0110.57 2.33c6.3 9-20.48 10.92-29 9.89"
      />
    </ProtoSVG>
  );
}

TimeIdeas.displayName = "SVG.ContentIcon.TimeIdeas";

TimeIdeas.propTypes = svgProps;

export default TimeIdeas;
