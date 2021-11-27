import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function Advocacy({ width = 280, height = 280, className, ...restProps }) {
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
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="5"
        d="M54 111.73s-17.44 7.89-9.41 23.11S68.71 141 68.71 141"
      />
      <path
        className="a-fill-dark a-stroke-dark"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="5"
        d="M217.01 33.73l7.48-28.06M227.86 41.87l24.86-13.5M229.98 56.03l26.89 7.2"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="5"
        d="M129.77 287.75a115.11 115.11 0 0115.17-14.51s48.74-28.62 61-39-3.68-19.47-3.68-19.47l-11.31 9.79s5.65-5 10.24-9.79-.18-10.24-.18-10.24l-9-9.5-15.54 14.17 13.38-12.8c7.23-6.91 1.66-12.45 1.66-12.45l-10.35-10.82-18.37 18L179.67 175c1.45-1.38 5.82-6.94-.4-13.44-4.75-5-10.48-3.36-12.92-2.32a6.41 6.41 0 00-1.89 1.25l-25.32 24.21c-6.5 6.22-11.64-2.2-11.64-2.2l-8-16c-17.85 7.38-22 44.85-23.68 57.55s-9.58 17.46-9.58 17.46"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="5"
        d="M133.5 186.5l-26.26-51 11.48-5.79-39 19.69s-4.51 2.12-7.66-4.13L51.69 105s-1.3-4.79 3.16-7l52.61-26.6L170 22s11.57-17 18.33-3.64 36.47 70.08 36.47 70.08 8.09 11.6-11.13 13.46c-17.15 1.66-60.94 14.08-70.2 16.75a8 8 0 00-3.38 1.92c-2.41 2.31-6.4 7.07-4.13 11.57l17.57 34.82"
      />
      <path
        d="M12 300l60.35-65.42a8.72 8.72 0 0112.32.28l51.7 54.05c3.32 3.48 4.2 8 .72 11.32"
        className="a-fill-accent-secondary"
      />
      <path
        d="M98 300c14-6 19-29-12.14-61.59l48.26 50.46c3.37 3.53 4.25 8.13.72 11.51"
        className="a-fill-accent-secondary-dark"
      />
    </ProtoSVG>
  );
}

Advocacy.displayName = "SVG.ContentIcon.Advocacy";

Advocacy.propTypes = svgProps;

export default Advocacy;
