import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function OurFoodNetworkPartnerOpps({
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
        d="M102.85 78.59v79.67s0 8.67 8.79 8.79c5.26.07 26.35.06 42.43 0h19.33s8.45-.6 8.79-8.79 0-83.39 0-83.39l-10.46-19.29.06-10.06s-.7-4.53-4.43-4.44-46.54 0-46.54 0-4.88-.23-4.43 4.44a57.63 57.63 0 010 9.48z"
      />
      <path
        className="a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M156.19 166.69V75.88l15.54-20.3M129.57 57.8l40.36.48M169.68 75.09h-51.16"
      />
      <circle
        cx="89.84"
        cy="126.68"
        r="32.4"
        strokeMiterlimit="10"
        strokeWidth="5"
        className="a-fill-light a-stroke-dark"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M83.54 104.18s-15.92 4.44-14.26 22.47M89.84 94.28a46.81 46.81 0 011-11.75A38.69 38.69 0 0199.11 65M87.62 82.34S81.68 65.08 56.51 72c0 0 8.2 23.59 31.11 10.34zM182.53 128.48h83.7v-38.7h-83.7v38.7zM224.38 109.13h41.84"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M212.05 45.53a52.81 52.81 0 002.09-21.28c-2.31 5.82-12.55 12.4-15.3 17.56-.13.23-.24.45-.35.67-2.43-6-7.1-13-15.13-19.71 2.52 5.74 0 17.59 1.69 23.18 2.12 6.86 5.53 10.7 8.49 12.42l9.81 3.74c3.34.4 8.15-.56 13.77-3.9 5-3 11.13-13.51 16.85-16.1a53.3 53.3 0 00-21.92 3.42zM203.66 72.15s8.39 3.52 9.05 7.56c-1-7.34-5.42-13.27-14.65-16.8-12.26-4.69-21.05-1.4-27.33 6.45a20.11 20.11 0 016.49 2.14c.57.3-4.6-1.76-6.87-1.94-2.21 3.26-7.42 15.11-8.36 19.57-7.12 33.93-13.23 62.74-13.38 65 0 0 5.79 1.88 6 2a1.11 1.11 0 01.49 1.57 1.17 1.17 0 01-1.59.48 29 29 0 00-5.11-1.82c-3.8 14.39-6.3 31-3.95 32.25 1.41.74 5.83-3.95 11.11-10.54l21.24-29.8 3.28-4.8 7.1-9.74a15.33 15.33 0 00-7.64-8.78 1.17 1.17 0 11.9-2.15 17.19 17.19 0 018.37 8.68l3.21-4.39C196 121.83 206 109.24 206 107.2a43.82 43.82 0 00-21.41-21.81 45.38 45.38 0 0111.39 7.51 36 36 0 0110 14.42c4.12-8.3 8.11-19.45 7.09-26.57-.72-5.02-9.41-8.6-9.41-8.6z"
      />
      <path
        className="a-fill-accent-secondary"
        d="M173.4 125.37V286L41.71 271.76V125.37H173.4z"
      />
      <path
        className="a-fill-accent-secondary-dark"
        d="M269.68 125.37v144.36L173.4 286V125.37h96.28z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M42.27 125.37L6.92 171.03l142.88 1.48 25.04-47.14H42.27zM267.88 125.09l24.81 45.66-100.27 1.47-17.58-47.13h93.04z"
      />
    </ProtoSVG>
  );
}

OurFoodNetworkPartnerOpps.displayName =
  "SVG.ContentIcon.OurFoodNetworkPartnerOpps";

OurFoodNetworkPartnerOpps.propTypes = svgProps;

export default OurFoodNetworkPartnerOpps;
