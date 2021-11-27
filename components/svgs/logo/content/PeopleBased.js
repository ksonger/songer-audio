import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function PeopleBased({ width = 280, height = 280, className, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 300 300"
      width={width}
      height={height}
      className={`a-icon-content ${className || ""}`}
      {...restProps}
    >
      <path
        className="a-fill-accent-secondary-dark"
        fillRule="evenodd"
        d="M284.26 274c12.94-6 12.74-21.16 12.74-33.68v-19.71s.6-9.16-9.56-15.91c-7.4-4.91-22.67-12.57-30.44-16.39a22.69 22.69 0 00-10-2.31h-14.35a22.63 22.63 0 00-10.65 2.66l-27.42 14.58s-11.05 6.32-11.75 16c-.29 4.09-2.43 35.48-2.51 43.82-.1 12.61 10.33 28.89 22.94 28.89zM15.74 274C2.8 268 3 252.84 3 240.32v-19.71s-.6-9.16 9.56-15.91C20 199.79 35.23 192.13 43 188.31A22.69 22.69 0 0153 186h14.35A22.63 22.63 0 0178 188.66l27.42 14.58s11 6.32 11.75 16c.29 4.09 2.43 35.48 2.51 43.82.1 12.61-10.33 28.89-22.94 28.89z"
      />
      <path
        d="M58.26 297.42v-64.14s-1-13.87 15.39-24.07 56.6-28.3 56.6-28.3h40.61L223 207s17.77 9.56 18.89 24.28.9 66.14.9 66.14z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        fillRule="evenodd"
        className="a-fill-accent-secondary a-stroke-light"
      />
      <path
        d="M128 180.5c-.09 2.4.28 10.94 1.13 13.21 2.33 6.22 8.81 18.4 21.25 18.4 10.19 0 17.4-11.08 20.71-17.54 1.32-2.59 2-11.22 1.89-14.07"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        className="a-fill-light a-stroke-light"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M170.93 180.69l-.59-19.55-19.84.36-19.46-.55-.77 20.09"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M150 165.5a41.56 41.56 0 01-18.95-4.5A42.12 42.12 0 01108 123.5v-15a42.12 42.12 0 0142-42 42.12 42.12 0 0142 42v15a42.12 42.12 0 01-42 42zM61.11 190A26.38 26.38 0 0149 187.1a26.79 26.79 0 01-14.66-23.83v-9.54A26.81 26.81 0 0161.11 127a26.8 26.8 0 0126.72 26.73v9.54A26.8 26.8 0 0161.11 190zM240.11 190a26.38 26.38 0 01-12.11-2.9 26.79 26.79 0 01-14.66-23.83v-9.54A26.81 26.81 0 01240.11 127a26.8 26.8 0 0126.72 26.73v9.54A26.8 26.8 0 01240.11 190zM144.54 42.23v-29.7a5.38 5.38 0 00-5.38-5.38H14.24a5.38 5.38 0 00-5.38 5.38v70.89a5.38 5.38 0 005.07 5.37l5.11.29a5.37 5.37 0 015.08 5.36v11.71L41.7 91.06a5.33 5.33 0 013.45-1.3l47.85-.4M34.3 27.04h85.2M34.3 46.04h74.2M34.3 65.04h60.1M182.11 57.68V36.39h109.54V99.5H276.4v24.26l-16.94-24.71h-51.13"
      />
      <circle className="a-fill-dark" cx="220.9" cy="65.9" r="4.9" />
      <circle className="a-fill-dark" cx="240.5" cy="65.9" r="4.9" />
      <circle className="a-fill-dark" cx="260.1" cy="65.9" r="4.9" />
    </ProtoSVG>
  );
}

PeopleBased.displayName = "SVG.ContentIcon.PeopleBased";

PeopleBased.propTypes = svgProps;

export default PeopleBased;
