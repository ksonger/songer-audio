import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function AdditionalAssistanceTransportation({
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
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M245.56 15v270.22"
      />
      <rect
        x="202.24"
        y="27.34"
        width="87.08"
        height="111.72"
        rx="3.36"
        className="a-fill-accent-secondary"
      />
      <path
        d="M285.74 139.06s8-55-11.74-82.06c-20.91-28.72-69.57-29.66-68.61-29.66h80.35a3.35 3.35 0 013.36 3.36v105a3.36 3.36 0 01-3.36 3.36z"
        className="a-fill-accent-secondary-dark"
      />
      <rect
        className="a-stroke-dark"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        x="33"
        y="162"
        width="143"
        height="40"
        rx="5.57"
      />
      <path
        className="a-stroke-dark"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 240.5h176.67M57.5 202.5V240M38.5 242v43.22M169.5 242v43.22M148.5 202.5V240"
      />
      <path
        className="a-fill-light"
        d="M275.57 75.15h-2.21v12.73h2.21a2.24 2.24 0 002.21-2.21v-8.49a2.21 2.21 0 00-2.21-2.03zM216 75.15h2v12.73h-2a2.13 2.13 0 01-2.22-2.21v-8.49a2.09 2.09 0 012.22-2.03zM271.33 70.73v38.54a4.3 4.3 0 01-4.25 4.25v4.24a4.17 4.17 0 01-4.24 4.24h-4.24a4.17 4.17 0 01-4.24-4.24v-4.24h-17.15v4.24A4.18 4.18 0 01233 122h-4.24a4.17 4.17 0 01-4.24-4.24v-4.24a4.46 4.46 0 01-4.43-4.25V70.73A12.92 12.92 0 01233 58h25.6a12.76 12.76 0 0112.73 12.73zM233 105a4.44 4.44 0 00-4.24-4.42 4.33 4.33 0 000 8.66A4.41 4.41 0 00233 105zm34.12 0a4.24 4.24 0 10-4.24 4.24 4.32 4.32 0 004.2-4.24zm0-34.3h-42.6v25.66h42.6zm-29.87-4.25h17.15v-4.21h-17.19z"
      />
    </ProtoSVG>
  );
}

AdditionalAssistanceTransportation.displayName =
  "SVG.ContentIcon.AdditionalAssistanceTransportation";

AdditionalAssistanceTransportation.propTypes = svgProps;

export default AdditionalAssistanceTransportation;
