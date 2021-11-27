import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function LibraryFAQs({ width = 280, height = 280, className, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 300 300"
      width={width}
      height={height}
      className={`a-icon-content ${className || ""}`}
      {...restProps}
    >
      <circle className="a-fill-light" cx="86.5" cy="109.5" r="82.5" />
      <path
        d="M86.83 24.53a85.34 85.34 0 1085.33 85.33 85.33 85.33 0 00-85.33-85.33zM85.67 166a9.77 9.77 0 119.77-9.77 9.79 9.79 0 01-9.77 9.77zm10.68-47.42s-1 .34-1 .91v7.75a9.72 9.72 0 01-19.44 0v-7.75a20.55 20.55 0 0114.18-19.34 13.79 13.79 0 009.42-13.54 14.19 14.19 0 00-14-13.44A13.74 13.74 0 0073.22 81a9.72 9.72 0 11-17.52-8.43 33.07 33.07 0 0129.72-18.84h.2A33.55 33.55 0 01119 86a33.14 33.14 0 01-22.59 32.54z"
        className="a-fill-accent-secondary"
      />
      <path
        d="M172 108.5a84.1 84.1 0 01-10.2 40.28C153 127 161 17 32.81 44.08A84.5 84.5 0 01172 108.5z"
        className="a-fill-accent-secondary-dark"
      />
      <rect
        className="a-fill-light"
        x="150"
        y="134"
        width="124"
        height="76"
        rx="12"
      />
      <ellipse
        className="a-fill-light"
        cx="206.42"
        cy="135.07"
        rx="44.58"
        ry="47"
      />
      <circle className="a-fill-light" cx="157.86" cy="170.71" r="38.86" />
      <circle className="a-fill-light" cx="255.86" cy="170.71" r="38.86" />
      <path
        className="a-fill-dark"
        d="M253.3 129.05C250.12 103 231 84.49 206.19 84.49s-44.56 18.46-47.1 44.56c-27.38 1.28-45.2 17.19-45.2 41.38 0 24.83 19.1 41.38 47.74 41.38h12.73a3.19 3.19 0 100-6.37h-12.73c-20.37 0-41.38-10.82-41.38-35s21-35 41.38-35a3 3 0 003.19-3.18c1.91-24.19 18.46-41.38 41.37-41.38s39.47 17.19 41.38 41.38a3 3 0 003.19 3.18c20.37 0 41.37 10.82 41.37 35s-21 35-41.37 35H238a3.19 3.19 0 000 6.37h12.74c28.64 0 47.74-16.55 47.74-41.38.02-24.19-17.8-40.1-45.18-41.38z"
      />
      <path
        className="a-fill-dark"
        d="M235.48 237.91l-26.1 26.74V176.8a3.19 3.19 0 10-6.37 0v87.85l-26.1-26.1a3.15 3.15 0 00-4.45 4.45l31.82 31.83a2.23 2.23 0 001.28.64h2.54c.64 0 .64-.64 1.28-.64L241.21 243a3.08 3.08 0 000-4.45c-1.28-1.28-4.46-1.28-5.73-.64z"
      />
    </ProtoSVG>
  );
}

LibraryFAQs.displayName = "SVG.ContentIcon.LibraryFAQs";

LibraryFAQs.propTypes = svgProps;

export default LibraryFAQs;
