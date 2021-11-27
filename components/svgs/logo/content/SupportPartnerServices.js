import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function SupportPartnerServices({
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
        className="a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M65.45 294s-5-36-31-68-10-62-8-68 9-36 11-36 18 0 19 15-7 31-7 31"
      />
      <path
        className="a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M77.07 240.12S48 201.5 47 190.5s10.37-22.31 18.5-11.75C73 188.5 76 210.5 99.7 223.16c23.13 12.33 27.37 60.41 12.31 69.37M234.55 294.72s5-36 31-68 10-62 8-68-9-36-11-36-18 0-19 15 7 31 7 31"
      />
      <path
        className="a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M222.93 240.84s29.12-38.62 30.12-49.62-10.37-22.31-18.5-11.75c-7.5 9.75-10.5 31.75-34.25 44.41-23.13 12.33-27.37 60.41-12.31 69.37"
      />
      <path
        className="a-fill-accent-secondary"
        d="M235.92 93.52C221.27 119.46 195.28 139 150 174.13 104.72 139 78.73 119.46 64.08 93.52 43.45 57 56 26.06 82.1 13.93c24.52-11.33 56.57-.67 67.9 23.81 11.33-24.48 43.42-35.14 68-23.81 26 12.13 38.55 43.07 17.92 79.59z"
      />
      <path
        className="a-fill-accent-secondary"
        d="M240.76 95.85c-15.48 27.4-42.93 48.07-90.76 85.15-47.83-37.08-75.28-57.75-90.76-85.15-21.79-38.57-8.55-71.25 19-84.07 25.91-12 59.76-.7 71.73 25.16 12-25.86 45.87-37.13 71.77-25.16 27.57 12.82 40.8 45.5 19.02 84.07z"
      />
      <path
        className="a-fill-accent-secondary-dark"
        d="M240.76 95.85c.66-34.6 4.07-85.76-90.76-58.91 12-25.86 45.87-37.13 71.77-25.16 27.54 12.82 40.77 45.5 18.99 84.07z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        d="M150 117.38a20.53 20.53 0 1120.53-20.53A20.53 20.53 0 01150 117.38zm42.79-4.14l-1.73-1.81a18.75 18.75 0 01-5.17-13.16v-.18a.91.91 0 00-.09-.41 18.54 18.54 0 015.2-12.93l1.73-1.81a1 1 0 00.17-1.18l-7.44-12.88a.42.42 0 00-.16-.21 1 1 0 00-.92-.25l-2.45.64A18.33 18.33 0 01168 67l-.18-.1a18.52 18.52 0 01-8.8-11l-.63-2.44a1.07 1.07 0 00-1-.73h-14.86a.88.88 0 00-.91.81L140.9 56a18.89 18.89 0 01-8.81 11h-.18A18.74 18.74 0 01118 69.06l-2.44-.64a1 1 0 00-1.09.46l-7.44 12.88a1 1 0 00.18 1.18l1.79 1.81a18.75 18.75 0 015.17 13.16v.18a.11.11 0 000 0 .06.06 0 000 0v.18a18.53 18.53 0 01-5.17 13.16l-1.72 1.81a1 1 0 00-.18 1.18l7.44 12.88a1 1 0 001.09.46l2.44-.64a18.28 18.28 0 0113.88 2.08l.18.1a18.51 18.51 0 018.81 11l.63 2.45a1.08 1.08 0 00.8.71h15.08a.88.88 0 00.9-.82l.73-2.45a18.84 18.84 0 018.8-11h.12a18.74 18.74 0 0113.88-2.08l2.54.64a1 1 0 001.09-.46l7.49-12.87a1.17 1.17 0 00-.21-1.18z"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </ProtoSVG>
  );
}

SupportPartnerServices.displayName = "SVG.ContentIcon.SupportPartnerServices";

SupportPartnerServices.propTypes = svgProps;

export default SupportPartnerServices;
