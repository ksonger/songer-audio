import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function FindSupportProduce({
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
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M115.85 70.36L93.49 88.11 70.61 63.62l1.14 33.5-28.37 3.26a44.19 44.19 0 0120.47 17.24 44.39 44.39 0 0129.76 1.51 44.21 44.21 0 0120-22.11 44.28 44.28 0 012.24-26.66z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M162.3 99.83a47 47 0 00-44.69-4.73 44.23 44.23 0 00-24 24 44.28 44.28 0 00-34 0 47.06 47.06 0 00-25.48 61.49 78.39 78.39 0 0098.64 43.83M234.14 62.16c2.84-8.64 4.41-19.62 3.21-32.88-3.56 9-19.38 19.15-23.63 27.13-.19.35-.36.69-.54 1-3.76-9.36-11-20.14-23.36-30.45 3.88 8.86-.07 27.17 2.6 35.8C195.7 73.4 201 79.33 205.54 82l15.15 5.79c5.16.61 12.58-.88 21.28-6 7.79-4.64 17.19-20.87 26-24.87-13.91-.51-25.2 1.79-33.86 5.29z"
      />
      <path
        d="M219.66 106.55a1.79 1.79 0 01-.89-2.39 1.82 1.82 0 012.4-.88c5.25 2.41 9.9 6.67 14 11.68-1.59-11.34-8.37-20.51-22.64-26-18.93-7.24-32.5-2.15-42.21 10a31.29 31.29 0 0110 3.31 1.8 1.8 0 01.75 2.44 1.82 1.82 0 01-2.46.74 27.5 27.5 0 00-10.8-3.11c-3.41 5-9.57 20.27-11 27.17-11 52.41-20.43 96.92-20.67 100.34 0 0 8.95 2.9 9.36 3.05a1.72 1.72 0 01.74 2.44 1.83 1.83 0 01-2.45.74 44.65 44.65 0 00-7.88-2.82c-5.88 22.22-9.74 47.92-6.11 49.82 2.18 1.14 9-6.09 17.16-16.28l32.82-46 5.06-7.41 11-15.05a23.59 23.59 0 00-11.79-13.55 1.8 1.8 0 111.38-3.33 26.56 26.56 0 0112.93 13.41l4.95-6.79c6-7.93 17.27-22.37 19.11-25.83-2.45-8.88-7.63-16.93-15.54-24a67.26 67.26 0 00-16.67-11 1.8 1.8 0 111.41-3.32 69.61 69.61 0 0117.6 11.61 55.56 55.56 0 0115.52 22.27c6.38-12.82 10.52-25.27 10.75-36.18-4.49-6.43-9.79-12.1-15.84-14.88z"
        className="a-fill-accent-secondary"
      />
      <path
        d="M187.07 164.22a137.9 137.9 0 00-33.85-17.71"
        className="a-stroke-light"
        strokeWidth="3.53"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </ProtoSVG>
  );
}

FindSupportProduce.displayName = "SVG.ContentIcon.FindSupportProduce";

FindSupportProduce.propTypes = svgProps;

export default FindSupportProduce;
