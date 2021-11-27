import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function GivingIndividualsDonateVehicle({
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
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M235 51h72v117h-72zM366 168h-59V51l30-27 29 27z"
      />
      <path
        className="a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M245 65h11v15h-11zM265 65h11v15h-11zM286 65h11v15h-11zM321 58h11v15h-11zM341 58h11v15h-11zM321 83h11v15h-11zM341 83h11v15h-11zM321 108h11v15h-11zM341 108h11v15h-11zM245 89h11v15h-11zM265 89h11v15h-11zM286 89h11v15h-11zM245 113h11v15h-11zM265 113h11v15h-11zM286 113h11v15h-11zM262 141h16v26h-16zM321 137h31v30h-31z"
      />
      <circle className="a-fill-accent-primary" cx="268" cy="156" r="2" />
      <path
        className="a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M336.5 137v30M265.3 178h60.9M186.3 178H221M319.3 202H354M208.3 200H289"
      />
      <ellipse
        transform="rotate(-16.383 218.021 218.455)"
        className="a-fill-accent-secondary-dark-alt"
        cx="218"
        cy="218.5"
        rx="11"
        ry="18"
      />
      <path
        className="a-fill-accent-secondary-dark-alt"
        d="M219.6 232.7l-2.8 8.4s2 5.6 1.4 6.1c-.6.5-11.2-2.8-11.2-2.8s3.3-13.9 2.5-17.2 10.1 5.5 10.1 5.5z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M225.5 248.6s23.3 37.5 26.5 44.8c0 0-6.5 26.2-11.5 22.1-4.9-4.1-18.8-26.3-19.6-35.7-.8-9.4-2.5-34.2 0-33.7 2.5.7 4.6 2.5 4.6 2.5z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M208.7 238.6s1.4 6.3 5.1 6.3c4.1 0 5.6-.6 3.9-3.9 0 0 12.9.5 14.5 12 1.6 11.5 13.3 31 17.7 65.6.9 7.4-37.1 3.5-58.4-.6 0 0 9-59.8 7.4-65.5-1.7-5.7 3.2-16.3 9.8-13.9z"
      />
      <path
        className="a-fill-accent-secondary-dark-alt"
        d="M201.6 327.7c-.2.3-.1.7.2.8 2.7.9 9.3 3.7 14.3 3.5 1.3-.1 5.1 2.8 7.1 4.7.9.8 2.2 1.2 3.4.9 1.5-.3 3.2-1 3.2-2.4 0-2.5-2.6-6.1-2.6-6.1s1.9 3.5 3.2 3.1c.6-.2 2-.8.8-2.6-1.6-2.4-5.2-5.5-12.5-6.3-6.1-.7-9.8-2.2-10.9-2.7-.2-.1-.4 0-.6.1l-5.6 7z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M206.8 332.5s-26.6-12.3-34.8-28.1c0 0 22-64.3 30.8-62.5 8.9 1.8 9 44.7.3 56.1 0 0 23.1 14.9 22.1 16.5s-18.4 18-18.4 18z"
      />
      <path
        className="a-fill-dark"
        d="M215.6 209.3s4.3 2 6 0c0 0 8.4 4.9 12.5 0 4-4.9-1.1-14.5-10-11.6 0 0-6.6-3.7-10.3.7 0 0-9.6-1.5-10.3 8.1 0 0-5.5 5.2-3.1 10.7 0 0 .2 14.3 5.4 14.3s3.9-6.2 3.9-6.2-1.9-7.4 5.9-16z"
      />
      <ellipse
        className="a-fill-accent-secondary-dark-alt"
        cx="207"
        cy="219.4"
        rx="4.9"
        ry="6.1"
      />
      <path
        className="a-fill-neutral30"
        d="M103.3 52.8c-2.1-8.4-10.6-13.5-19-11.4l-1.2.3c-4.5 1.5-8.2 4.7-10.3 8.9-3.4-5-9.8-7.1-15.5-4.9-4.9 1.8-8.8 5.6-10.8 10.4-.2.5-.7.9-1.3 1l-.6.1c-5.9 1-10.9 4.7-13.6 10-.6 1.3-.1 2.8 1.1 3.4.4.2.7.3 1.1.3h59.7c2.3 0 4.4-.9 6-2.5 4.1-4 5.8-10 4.4-15.6zM164.3 90.2c-3.1-12.2-15.4-19.6-27.7-16.6-.6.1-1.1.3-1.7.5-6.5 2.2-11.9 6.8-15.1 12.9-5-7.3-14.3-10.3-22.6-7.2C90.1 82.5 84.4 88 81.5 95c-.3.8-1 1.3-1.9 1.5l-.9.1c-8.5 1.4-15.9 6.9-19.8 14.6-.9 1.8-.2 4.1 1.7 5 .5.3 1.1.4 1.7.4h86.9c3.3 0 6.4-1.3 8.8-3.6 5.9-6 8.3-14.6 6.3-22.8z"
      />

      <path
        className="a-stroke-dark"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M36.5 382.9h328.6"
      />
      <path
        className="a-fill-neutral30"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.8 302.6c20 0 36.3 16.2 36.3 36.3s-16.2 36.3-36.3 36.3-36.3-16.2-36.3-36.3c0-20.1 16.2-36.3 36.3-36.3zm20.7 36.2c0-11.5-9.3-20.8-20.8-20.8S40 327.3 40 338.8s9.3 20.8 20.8 20.8c11.4 0 20.7-9.3 20.7-20.8zM308.7 302c20 0 36.3 16.2 36.3 36.3s-16.2 36.3-36.3 36.3c-20 0-36.3-16.2-36.3-36.3s16.3-36.3 36.3-36.3zm20.8 36.3c0-11.5-9.3-20.8-20.8-20.8s-20.8 9.3-20.8 20.8 9.3 20.8 20.8 20.8c11.5-.1 20.8-9.4 20.8-20.8z"
      />
      <path
        d="M387.9 275l-79.7-11.4-63.6-70.2c-2.6-2.9-6.4-4.5-10.3-4.4H105.1c-5.3 0-10.1 3-12.4 7.8l-32.4 66.8H35.6c-18.8 0-34 15.2-34 34v26.8c0 5.6 3.4 10.7 8.6 12.8.3-27.6 22.9-49.8 50.6-49.6 26.2.3 47.5 20.6 49.4 46.3 57.2-1.7 137.2-2.3 151.5-14.4 8.3-16.3 27.2-31.4 46.7-31.4 18.6 0 34.8 10.1 43.4 25.1 14.6-9.2 27.9-21.6 37-38.1-.3 0-.6-.1-.9-.1zm-224.7-11.4H75.6l25.8-53.1c2.3-4.8 7.1-7.8 12.4-7.8h49.4v60.9zm13.8 0v-60.9h51.3c3.9 0 7.6 1.6 10.3 4.4l50.8 56.4H177z"
        className="a-fill-accent-secondary"
      />
      <path
        className="a-stroke-dark"
        clipRule="evenodd"
        strokeWidth="3"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M180.7 289.6H207"
      />
      <circle
        className="a-stroke-dark"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        cx="60.1"
        cy="339.3"
        r="20.1"
      />
      <circle
        className="a-stroke-dark"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        cx="308.4"
        cy="339.3"
        r="20.1"
      />
      <path
        className="a-fill-accent-secondary-dark"
        d="M261.7 319.6c-3.5 6.8-3.4 10.5-3.4 18.6h-148c0-1.4 0-2.8-.1-4.2 57.2-1.7 137.2-2.3 151.5-14.4zM400 288.7v35.7c0 7.6-6.1 13.7-13.6 13.8h-27.9c0-9.1-4.2-20.9-8.5-28.2 14.6-9.2 29.8-18.3 38.8-34.9 6.5 1.3 11.2 6.9 11.2 13.6z"
      />
    </ProtoSVG>
  );
}

GivingIndividualsDonateVehicle.displayName =
  "SVG.ContentIcon.GivingIndividualsDonateVehicle";

GivingIndividualsDonateVehicle.propTypes = svgProps;

export default GivingIndividualsDonateVehicle;
