import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function EndHunger({ width = 280, height = 280, className, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 300 300"
      width={width}
      height={height}
      className={`a-icon-content ${className || ""}`}
      {...restProps}
    >
      <circle
        className="a-fill-light a-stroke-dark"
        strokeMiterlimit="10"
        strokeWidth="5"
        cx="151.02"
        cy="162.36"
        r="68.64"
      />
      <circle
        className="a-fill-light a-stroke-dark"
        strokeMiterlimit="10"
        strokeWidth="5"
        cx="151.02"
        cy="162.36"
        r="54.4"
      />
      <circle
        className="a-fill-light a-stroke-dark"
        strokeMiterlimit="10"
        strokeWidth="5"
        cx="151.02"
        cy="162.36"
        r="41.45"
      />
      <circle
        cx="151.02"
        cy="162.36"
        r="23.3"
        strokeWidth="5"
        strokeMiterlimit="10"
        className="a-stroke-dark a-fill-accent-secondary-dark"
      />
      <circle
        className="a-fill-light a-stroke-dark"
        strokeMiterlimit="10"
        strokeWidth="5"
        cx="110.99"
        cy="199.54"
        r="68.64"
      />
      <circle
        className="a-fill-light a-stroke-dark"
        strokeMiterlimit="10"
        strokeWidth="5"
        cx="110.99"
        cy="199.54"
        r="54.4"
      />
      <circle
        className="a-fill-light a-stroke-dark"
        strokeMiterlimit="10"
        strokeWidth="5"
        cx="110.99"
        cy="199.54"
        r="41.45"
      />
      <circle
        className="a-stroke-dark a-fill-accent-primary"
        strokeMiterlimit="10"
        strokeWidth="3.56"
        cx="110.99"
        cy="199.54"
        r="23.3"
      />
      <circle
        className="a-fill-light a-stroke-dark"
        strokeMiterlimit="10"
        strokeWidth="5"
        cx="191.06"
        cy="199.54"
        r="68.64"
      />
      <circle
        className="a-fill-light a-stroke-dark"
        strokeMiterlimit="10"
        strokeWidth="5"
        cx="191.06"
        cy="199.54"
        r="54.4"
      />
      <circle
        className="a-fill-light a-stroke-dark"
        strokeMiterlimit="10"
        strokeWidth="5"
        cx="191.06"
        cy="199.54"
        r="41.45"
      />
      <circle
        className="a-stroke-dark"
        strokeMiterlimit="10"
        strokeWidth="5"
        cx="191.06"
        cy="199.54"
        r="23.3"
      />
      <path
        d="M8 179.55h286V193a101 101 0 01-101 101h-84A101 101 0 018 193z"
        className="a-fill-accent-secondary a-stroke-accent-secondary"
        strokeWidth="3.56"
      />
      <path
        d="M268.21 179.53a114.38 114.38 0 01-114.33 111.52H97.1a114.09 114.09 0 0025.25 2.88h57.2a114.66 114.66 0 00104.73-68.17 113.27 113.27 0 009.72-46.23z"
        style={{ isolation: "isolate" }}
        className="a-fill-accent-secondary-dark"
      />
      <path
        strokeLinecap="round"
        strokeWidth="5"
        className="a-stroke-dark"
        d="M6 296.93h288"
      />
      <path
        className="a-stroke-dark"
        strokeMiterlimit="10"
        strokeWidth="5"
        strokeLinecap="round"
        d="M116.53 3.07a35.13 35.13 0 01.11 36.32 35.25 35.25 0 001 37.73"
      />
      <path
        className="a-stroke-dark"
        strokeMiterlimit="10"
        strokeWidth="5"
        strokeLinecap="round"
        d="M149.61 3.1a40.82 40.82 0 01.07 31.25 40.79 40.79 0 00.59 32.44"
      />
      <path
        d="M184.09 3.07a68.16 68.16 0 010 36.32h0c-3.42 11.7-3.23 26.4.47 37.73"
        strokeWidth="3.49"
        strokeLinecap="round"
        strokeMiterlimit="10"
        className="a-stroke-dark"
      />
    </ProtoSVG>
  );
}

EndHunger.displayName = "SVG.ContentIcon.EndHunger";

EndHunger.propTypes = svgProps;

export default EndHunger;
