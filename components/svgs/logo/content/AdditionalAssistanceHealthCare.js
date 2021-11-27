import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function AdditionalAssistanceHealthCare({
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
        className="a-fill-accent-secondary"
        d="M283 152.72c-22.69 40.16-62.92 70.45-133 124.8-70.11-54.35-110.34-84.64-133-124.8C-15 96.18 4.43 48.27 44.86 29.49c38-17.55 87.59-1 105.14 36.87 17.54-37.9 67.23-54.42 105.2-36.87C295.57 48.27 315 96.18 283 152.72z"
      />
      <path
        className="a-fill-accent-secondary"
        d="M283 152.72c-22.69 40.16-62.92 70.45-133 124.8-70.11-54.35-110.34-84.64-133-124.8C-15 96.18 4.43 48.27 44.86 29.49c38-17.55 87.59-1 105.14 36.87 17.54-37.9 67.23-54.42 105.2-36.87C295.57 48.27 315 96.18 283 152.72z"
      />
      <rect
        className="a-fill-light"
        x="127.5"
        y="93.11"
        width="44.99"
        height="123.38"
        rx="5.89"
      />
      <path
        className="a-fill-dark"
        d="M166.61 95.61A3.39 3.39 0 01170 99v111.6a3.39 3.39 0 01-3.39 3.39h-33.22a3.39 3.39 0 01-3.39-3.39V99a3.39 3.39 0 013.39-3.39h33.22m0-5h-33.22A8.4 8.4 0 00125 99v111.6a8.4 8.4 0 008.39 8.39h33.22a8.4 8.4 0 008.39-8.39V99a8.4 8.4 0 00-8.39-8.39z"
      />
      <rect
        className="a-fill-light"
        x="88.31"
        y="132.3"
        width="123.38"
        height="44.99"
        rx="5.88"
      />
      <path
        className="a-fill-dark"
        d="M205.81 134.8a3.38 3.38 0 013.38 3.38v33.23a3.38 3.38 0 01-3.38 3.39H94.19a3.38 3.38 0 01-3.38-3.39v-33.23a3.38 3.38 0 013.38-3.38h111.62m0-5H94.19a8.39 8.39 0 00-8.38 8.38v33.23a8.39 8.39 0 008.38 8.39h111.62a8.39 8.39 0 008.38-8.39v-33.23a8.39 8.39 0 00-8.38-8.38z"
      />
      <path
        d="M283 152.72C284 102 289 27 150 66.36c17.54-37.9 67.23-54.42 105.2-36.87C295.57 48.27 315 96.18 283 152.72z"
        fill="#dd841e"
      />
      <rect
        className="a-fill-light"
        x="130"
        y="95.61"
        width="39.99"
        height="118.38"
        rx="3.39"
      />
      <rect
        className="a-fill-light"
        x="130"
        y="95.61"
        width="39.99"
        height="118.38"
        rx="3.38"
        transform="rotate(90 150 154.8)"
      />
    </ProtoSVG>
  );
}

AdditionalAssistanceHealthCare.displayName =
  "SVG.ContentIcon.AdditionalAssistanceHealthCare";

AdditionalAssistanceHealthCare.propTypes = svgProps;

export default AdditionalAssistanceHealthCare;
