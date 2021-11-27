import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function VolunteerCalendar({
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
        d="M225.95 280.98H23.26V75.01H276.5v164.55"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M57.5 113.44h48v48h-48zM105.5 113.44h48v48h-48zM57.5 161.44h48v48h-48zM105.5 161.44h48v48h-48zM57.5 209.44h48v48h-48zM105.5 209.44h48v48h-48zM153.5 113.44h48v48h-48zM201.5 113.44h48v48h-48z"
      />
      <path
        className="a-fill-accent-secondary"
        d="M173.18 180.39l29.74 80.72a3.86 3.86 0 007.06.39l12.34-24.69a.07.07 0 01.12 0L256.69 271a5 5 0 006.84.27 5.3 5.3 0 000-7.69l-34-34a.08.08 0 010-.12l26.24-13.12a3.09 3.09 0 00-.31-5.67l-82.35-30.34zM278.45 20.46a5 5 0 00-3.53-1.46H25.08A5.06 5.06 0 0020 24.09v49.05h260v-49a5 5 0 00-1.55-3.68z"
      />
      <path
        className="a-fill-accent-secondary-dark"
        d="M280 24.09v47.65a1.4 1.4 0 01-1.4 1.4H160s97.55-2.59 117.25-49.59a1.4 1.4 0 012.69.5z"
      />
    </ProtoSVG>
  );
}

VolunteerCalendar.displayName = "SVG.ContentIcon.VolunteerCalendar";

VolunteerCalendar.propTypes = svgProps;

export default VolunteerCalendar;
