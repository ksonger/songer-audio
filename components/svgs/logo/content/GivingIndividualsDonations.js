import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function GivingIndividualsDonations({
  width = 400,
  height = 400,
  className,
  ...restProps
}) {
  return (
    <ProtoSVG
      viewBox="0 0 400 400"
      width={width}
      height={height}
      className={`a-icon-content ${className || ""}`}
      {...restProps}
    >
      <path
        className="a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M147.3 127h239.8M35 164.9v15.4M27.1 181.2V199M10.4 201.1H140M112.5 87.6V199"
      />
      <path
        className="a-fill-accent-primary"
        d="M129.2 138.7H96c-.8 0-1.4-.6-1.4-1.4V94.1c0-.8.6-1.4 1.4-1.4h33.1c.8 0 1.4.6 1.4 1.4v43.3c0 .7-.6 1.3-1.3 1.3z"
      />
      <path
        className="a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M81.5 164.7H27.2c-1.3 0-2.3-1-2.3-2.3v-11.9c0-1.3 1-2.3 2.3-2.3h54.4c1.3 0 2.3 1 2.3 2.3v11.9c-.1 1.2-1.1 2.3-2.4 2.3zM17.6 180.6h72.9M81.1 181.2V199M72.5 164.9v15.4"
      />
      <path
        className="a-fill-light"
        d="M124.9 112.4h-.9v5.2h.9c.5 0 .9-.4.9-.9v-3.5c0-.4-.5-.8-.9-.8zM100.3 112.4h.8v5.2h-.8c-.5 0-.9-.4-.9-.9v-3.5c0-.4.4-.8.9-.8zM123.1 110.6v15.9c0 .9-.8 1.7-1.7 1.7v1.7c0 1-.8 1.7-1.7 1.7H118c-1 0-1.7-.8-1.7-1.7v-1.7h-7.1v1.7c0 1-.8 1.7-1.7 1.7h-1.7c-1 0-1.7-.8-1.7-1.7v-1.7c-1 0-1.8-.8-1.8-1.7v-15.9c0-2.9 2.4-5.2 5.3-5.2h10.6c2.6-.1 4.9 2.3 4.9 5.2zm-15.8 14.1c0-1-.8-1.8-1.7-1.8-1 0-1.7.8-1.7 1.8 0 .9.8 1.7 1.7 1.7.9 0 1.7-.8 1.7-1.7zm14.1 0c0-1-.8-1.8-1.7-1.8s-1.7.8-1.7 1.8c0 .9.8 1.7 1.7 1.7s1.7-.8 1.7-1.7zm0-14.1h-17.6v10.6h17.6v-10.6zm-12.3-1.8h7.1v-1.7h-7.1v1.7z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeWidth="3"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeLinejoin="round"
        d="M343.4 393H157V203.5h232.9v151.4"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeWidth="3"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeLinejoin="round"
        d="M188.5 238.9h44.2v44.2h-44.2z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeWidth="3"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeLinejoin="round"
        d="M188.5 283h44.2v44.2h-44.2z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeWidth="3"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeLinejoin="round"
        d="M232.6 283h44.2v44.2h-44.2zM188.5 327.2h44.2v44.2h-44.2z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeWidth="3"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeLinejoin="round"
        d="M232.6 327.2h44.2v44.2h-44.2zM276.8 238.9H321v44.2h-44.2z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeWidth="3"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeLinejoin="round"
        d="M320.9 238.9h44.2v44.2h-44.2z"
      />
      <path
        className="a-fill-accent-secondary"
        d="M294.9 300.5l27.4 74.2c1.1 2.9 5.1 3.1 6.5.4l11.4-22.7s.1-.1.1 0l31.5 31.5c.9.9 2.1 1.4 3.3 1.4 1.1 0 2.1-.4 3-1.1 2.1-1.8 2-5.1 0-7.1l-31.3-31.3v-.1l24.1-12.1c2.2-1.1 2.1-4.4-.3-5.2l-75.7-27.9zM391.7 153.4c-.8-.8-2-1.3-3.3-1.3H158.6c-2.6 0-4.7 2.1-4.7 4.7v45.1H393v-45.1c.1-1.4-.4-2.6-1.3-3.4z"
      />
      <path
        className="a-fill-accent-secondary-dark"
        d="M393.1 156.7v43.8c0 .7-.6 1.3-1.3 1.3h-109s89.7-2.4 107.9-45.6c.5-1.3 2.4-.9 2.4.5z"
      />
      <path
        className="a-fill-accent-primary a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M232.6 238.9h44.2v44.2h-44.2z"
      />
      <path
        className="a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M239.3 230.7l2.8-15M223.8 239.1l-14.8-3.6M230 231.9l-8-12.9M224.7 249.4l-13.2 7.5"
      />
      <path
        className="a-fill-light a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M323.2 104.8l12.6-76.3 13 76.3zM331.6 104.8h8.8V116h-8.8z"
      />
      <path
        className="a-fill-light a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M343.1 106.9l14.4-87.3 14.8 87.3zM352.7 106.9h10.1v12.8h-10.1z"
      />
      <circle
        className="a-fill-light a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        cx="184.5"
        cy="81.7"
        r="22.4"
      />
      <path
        className="a-fill-light a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M162 82.2h44.8v36.6H162z"
      />
      <path
        className="a-fill-light a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M169.5 95h29.3v23.8h-29.3zM169.5 95l29.3 23.7M169.5 118.7L198.8 95"
      />
      <path
        className="a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M209.7 100.3h97.5M209.7 113.1h97.5M226 118.7V95M246.4 118.7V95M266.7 118.7V95M287.1 118.7V95M307.4 118.7V95"
      />
      <path
        className="a-fill-light"
        d="M256.8 260.1v-6.4c1.3.4 2.6 1 3.6 1.9.3.2.7.2 1-.1l1.7-2.1c.2-.3.2-.7-.1-.9-1.6-1.5-3.7-2.4-6.1-2.8v-3.9l-2.3-.1c-.8 0-1.5.7-1.5 1.5v2.3c-4.8.4-7.7 3.4-7.7 7.1 0 4.8 3.9 6.1 7.7 7v7.1c-2.3-.4-4.2-1.5-5.6-2.8-.3-.3-.7-.2-1 .1l-1.6 2.2c-.2.3-.2.6.1.9 1.9 1.8 4.6 3.2 8.2 3.4v3.6h1.8c1.1 0 2-.9 2-2v-1.7c4.9-.8 7.1-3.8 7.1-7.4-.1-4.4-3.7-5.9-7.3-6.9zm-3.7-1c-2-.5-3.3-1.3-3.3-2.7 0-1.6 1.3-2.7 3.3-3v5.7zm3.8 11.7v-5.9c1.6.6 2.7 1.4 2.7 2.8 0 1.2-.8 2.6-2.7 3.1z"
      />
    </ProtoSVG>
  );
}

GivingIndividualsDonations.displayName =
  "SVG.ContentIcon.GivingIndividualsDonations";

GivingIndividualsDonations.propTypes = svgProps;

export default GivingIndividualsDonations;
