import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function GivingBusinessDonating({
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
        className="a-fill-light a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M388.7 48.7H218.2L305.6 13z"
      />
      <path
        className="a-fill-light a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M231.9 48.5h143v102h-143z"
      />
      <path
        className="a-fill-light a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M222.9 147.5h161v16h-161zM262.9 88.5h81v59h-81z"
      />
      <path
        className="a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M263.3 62.9H344M263.3 72.9H344M271.5 132.8h14V147h-14z"
      />
      <path
        className="a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M271.5 118.7h14v14.2h-14zM271.5 104.5h14v14.2h-14zM285.5 125.8h14V147h-14zM321.5 125.8h14V147h-14zM299.5 132.8h14V147h-14zM285.5 111.6h14v14.2h-14z"
      />
      <path
        className="a-stroke-dark"
        strokeWidth="3"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M37.4 384.7h280.9"
      />
      <path
        className="a-fill-accent-primary"
        d="M20.8 168.9h.5c.9 6.6 6.4 11.5 13.3 11.5s12.4-5 13.3-11.5h15.3c.9 6.6 6.4 11.5 13.3 11.5 6.8 0 12.4-5 13.3-11.5H91c2.5 0 4.4-2.1 4.4-4.4V159h2.1c.5 1.4 2 2.3 3.4 2.3H127c1.1 0 1.8-.7 1.8-1.8s-.7-1.8-1.8-1.8h-26.3s-.2 0-.2-.2v-13.7c0-2-1.6-3.7-3.7-3.7h-6.2c-.2 0-.2-.2-.2-.2v-37.3c0-1.1-.7-1.8-1.8-1.8s-1.8.7-1.8 1.8v37.3c0 1.6 1.1 2.8 2.5 3.4v2.7h-4.1v-.2l-.9-5.2c-1.4-9.4-5.2-33.2-6.6-42.6 2.7-.4 5-2.7 5-5.5 0-3-2.5-5.5-5.5-5.5H28.8c-3 0-5.5 2.5-5.5 5.5s2.3 5.3 5.3 5.5l-3.4 32.5h-4.4c-3 0-5.5 2.5-5.5 5.5v27.5c0 2.9 2.5 5.4 5.5 5.4zm13.7 8c-5.3 0-9.8-4.4-9.8-9.8 0-5.5 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8c0 5.5-4.5 9.8-9.8 9.8zm41.7 0c-5.3 0-9.8-4.4-9.8-9.8 0-5.5 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8c.2 5.5-4.3 9.8-9.8 9.8zm16.7-33.2h3.9c.2 0 .2.2.2.2v11.5h-1.8v-4.8c0-1.6-.9-3.2-2.3-3.9v-3zm-25-4.5H52.8V136c0-2.5-1.6-4.4-3.7-5.2V116c0-2-1.6-3.4-3.4-3.4h-3.6c-2 0-3.4 1.6-3.4 3.4v14.6H29L32.2 98h42.3l3.6 22.9h-6v-6.2l2-.7c.9-.4 1.4-1.4 1.1-2.3-.4-.9-1.4-1.4-2.3-1.1l-7.1 2.5c-.9.4-1.4 1.4-1.1 2.3.2.7.9 1.2 1.6 1.2.2 0 .4 0 .5-.2l1.8-.5v5H65c-.7 0-1.2.4-1.6 1.1-.4.5-.2 1.4.2 2l17.9 22.2h-9.9v-3.6c-.3-1.9-1.9-3.4-3.7-3.4zm0 6.8H53.1c-.2 0-.4-.2-.4-.2v-3h14.9l.3 3.2zm-22.4-30v14.4h-3.2l-.2-14.4h3.4zm32.9 8.5c0 .2 2.5 16.3 2.3 15.3l-12.4-15.3h10.1zm-51.7-32c0-1.1.9-2 2-2h48.7c1.1 0 2 .9 2 2s-.9 2-2 2H28.8c-1.3 0-2.1-.9-2.1-2zM21 134.1zm-2.2 1.8c0-1.1.9-2 2-2h26.7c1.1 0 2 .9 2 2v9.8c0 2.1 1.8 3.7 3.7 3.7h37.7c.5 0 .9.5.9.9v13.9c0 .5-.5.9-.9.9h-1.2c-.9-6.6-6.6-11.5-13.3-11.5s-12.4 5-13.3 11.5H47.6c-.9-6.6-6.4-11.5-13.3-11.5s-12.4 5-13.3 11.5h-.2c-1.1 0-2-.9-2-2v-27.2z"
      />
      <path
        className="a-stroke-accent-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M298.3 175.2h61M219.3 175.2H254M352.3 199.2H387"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M127.9 178.6v74.8s0 8.1 8.2 8.2c4.9.1 24.7.1 39.8 0H194s7.9-.6 8.2-8.2 0-78.2 0-78.2l-9.8-18.1.1-9.4s-.7-4.3-4.2-4.2c-3.5.1-43.7 0-43.7 0s-4.6-.2-4.2 4.2c.2 3 .2 5.9 0 8.9l-12.5 22z"
      />
      <path
        className="a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M177.9 261.2V176l14.6-19M152.9 159l37.9.5M190.6 175.3h-48"
      />
      <circle
        cx="115.7"
        cy="223.7"
        r="30.4"
        className="a-fill-light a-stroke-dark"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M109.7 202.6s-14.9 4.2-13.4 21.1M115.7 193.3c-.2-3.7.2-7.4.9-11 .5-2.6 1.3-5.2 2.3-7.6M113.6 182.1s-5.6-16.2-29.2-9.7c0 0 7.7 22.1 29.2 9.7zM202.6 225.4h78.6v-36.3h-78.6z"
      />
      <path
        className="a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M241.9 207.2h39.3"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M230.3 147.5c2-6.5 2.7-13.2 2-20-2.2 5.5-11.8 11.6-14.4 16.5l-.3.6c-2.3-5.6-6.7-12.2-14.2-18.5 2.4 5.4 0 16.5 1.6 21.8 2 6.4 5.2 10 8 11.7l9.2 3.5c3.1.4 7.6-.5 12.9-3.7 4.7-2.8 10.4-12.7 15.8-15.1-7-.4-14 .7-20.6 3.2zM222.5 172.5s7.9 3.3 8.5 7.1c-.9-6.9-5.1-12.5-13.7-15.8-11.5-4.4-19.8-1.3-25.6 6.1 2.1.3 4.2 1 6.1 2 .5.3-4.3-1.7-6.4-1.8-2.1 3.1-7 14.2-7.8 18.4-6.7 31.8-12.4 58.9-12.6 61 0 0 5.4 1.8 5.6 1.9.5.2.7.9.5 1.4v.1c-.3.5-.9.7-1.5.5-1.5-.7-3.1-1.3-4.8-1.7-3.6 13.5-5.9 29.1-3.7 30.3 1.3.7 5.5-3.7 10.4-9.9l19.9-28 3.1-4.5 6.7-9.1c-1.2-3.6-3.8-6.5-7.2-8.2-.6-.2-.9-.8-.7-1.4s.8-.9 1.4-.7c.1 0 .1 0 .2.1 3.5 1.7 6.3 4.6 7.9 8.1l3-4.1c3.7-4.9 13.1-16.7 13.1-18.7-4-9-11.2-16.3-20.1-20.5 3.9 1.8 7.5 4.2 10.7 7 4.2 3.7 7.4 8.3 9.4 13.5 3.9-7.8 7.6-18.3 6.7-24.9-1-4.8-9.1-8.2-9.1-8.2z"
      />
      <path
        className="a-fill-accent-secondary"
        d="M194.1 222.4v150.8L70.5 359.8V222.4z"
      />
      <path
        className="a-fill-accent-secondary-dark"
        d="M284.4 222.4v135.5l-90.3 15.3V222.4z"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M71 222.4l-33.2 42.9 134.1 1.4 23.5-44.3zM282.7 222.2L306 265l-94.1 1.4-16.5-44.2z"
      />
    </ProtoSVG>
  );
}

GivingBusinessDonating.displayName = "SVG.ContentIcon.GivingBusinessDonating";

GivingBusinessDonating.propTypes = svgProps;

export default GivingBusinessDonating;
