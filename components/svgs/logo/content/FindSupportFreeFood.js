import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

function FindSupportFreeFood({
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
        d="M274.63 29.85a51.82 51.82 0 003.31-20.76c-2.6 5.57-13.05 11.42-16.06 16.32l-.38.64c-2-6.09-6.19-13.22-13.66-20.24 2.12 5.77-1.1 17.25.27 22.84 1.67 6.86 4.79 10.82 7.59 12.69l9.4 4.26c3.25.59 8-.06 13.75-3C284 40 290.57 30 296.35 27.8a52.14 52.14 0 00-21.72 2.05z"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="a-fill-light a-stroke-dark"
      />
      <path
        className="a-fill-accent-secondary"
        d="M263.72 57.49a1.14 1.14 0 01-.47-1.55 1.15 1.15 0 011.56-.47 25.82 25.82 0 018.42 8c-.56-7.26-4.52-13.35-13.37-17.37-11.75-5.32-20.57-2.62-27.2 4.7a20 20 0 016.24 2.49 1.15 1.15 0 11-1.21 2 17.39 17.39 0 00-6.69-2.48c-2.36 3.07-6.86 12.51-8 16.83-9 32.87-16.72 60.78-17 62.94 0 0 5.57 2.19 5.82 2.3a1.09 1.09 0 01.38 1.58 1.15 1.15 0 01-1.58.37 28.74 28.74 0 00-4.9-2.09c-4.59 13.89-8 30.06-5.81 31.41 1.34.81 6-3.52 11.53-9.68l22.63-28 3.5-4.52 7.55-9.13a15.07 15.07 0 00-7-9.07 1.14 1.14 0 01-.53-1.53 1.16 1.16 0 011.54-.52 16.94 16.94 0 017.7 9l3.4-4.12c4.09-4.82 11.77-13.58 13.1-15.68A32 32 0 00254.4 77a43 43 0 00-10.17-7.66 1.14 1.14 0 111-2.05A44.42 44.42 0 01256 75.37a35.4 35.4 0 019 14.75c4.54-7.9 7.65-15.65 8.22-22.57-2.61-4.26-5.75-8.07-9.49-10.06z"
      />
      <path
        className="a-fill-accent-secondary"
        d="M293.12 98.59H191.25l-20.65 20.66c-.77-6.93-5.63-13.34-14.26-14.25l6.41-6.41H14.63a3.36 3.36 0 00-2.49 3.23v39.1a3.31 3.31 0 001.77 2.94 3.26 3.26 0 001.58.41h7l1.54 11.66 15.29 116.33a22 22 0 0021.79 19.1h186.52a22 22 0 0021.79-19.1l15.27-116.33 1.52-11.66h7a3.23 3.23 0 001.58-.41 3.31 3.31 0 001.77-2.94v-39.1c-.01-1.99-.87-2.88-3.44-3.23zm-145.07 15a2.8 2.8 0 001.23-.8c5.37-3 14.78-1 14.78 8.42 0 13.43-19.46 13.51-19.46.17a9.89 9.89 0 013.45-7.81zM78.42 248.41v-67.88a9.25 9.25 0 0118.5 0v67.88a9.25 9.25 0 01-18.5 0zm66.66 0v-67.88a9.26 9.26 0 0118.52 0v67.88a9.26 9.26 0 01-18.52 0zm66.68 0v-67.88c0-12.23 18.5-12.23 18.5 0v67.88a9.25 9.25 0 01-18.5 0zM18.84 137.57v-32.4h96.51a.09.09 0 01.1 0h31.26a21.83 21.83 0 00-3.2 3.52c-9.69 8.4-6.52 26 6.94 28.88zm271 0H158.22a15.16 15.16 0 008.94-5.63c.89-.52 26.27-26 27-26.77h95.7z"
      />
      <path
        d="M12.14 140.92a3.31 3.31 0 001.77 2.94 3.26 3.26 0 001.58.41h7l.15 1.1 260 25.65 3.6-26.75h7a3.23 3.23 0 001.58-.41 3.31 3.31 0 001.77-2.94"
        className="a-fill-accent-secondary-dark"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M91 45.07v88.53s0 9.63 9.77 9.77c5.85.08 29.28.06 47.16 0h21.48s9.39-.67 9.76-9.77 0-92.67 0-92.67L167.5 19.5l.07-11.18s-.78-5-4.93-4.93-51.71 0-51.71 0-5.42-.26-4.93 4.93a64.12 64.12 0 010 10.54z"
      />
      <path
        className="a-stroke-dark"
        strokeWidth="5"
        strokeMiterlimit="10"
        d="M150.23 142.97V42.06L167.5 19.5M120.65 21.96l44.85.54M165.22 41.18h-56.85"
      />
      <circle
        className="a-fill-light a-stroke-dark"
        strokeWidth="5"
        strokeMiterlimit="10"
        cx="76.5"
        cy="98.5"
        r="36"
      />
      <path
        className="a-fill-light a-stroke-dark"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M69.5 73.5s-17.69 4.94-15.85 25M76.5 62.5a52.53 52.53 0 011.12-13.06A42.86 42.86 0 0186.81 30M74 49.23s-6.6-19.17-34.57-11.45c.04 0 9.15 26.22 34.57 11.45z"
      />
      <rect
        className="a-fill-light a-stroke-dark"
        strokeWidth="5"
        strokeMiterlimit="10"
        x="14.5"
        y="100.5"
        width="280"
        height="43"
        rx="1.93"
      />
      <rect
        className="a-fill-light a-stroke-dark"
        strokeWidth="5"
        strokeMiterlimit="10"
        x="133.2"
        y="67.23"
        width="123.35"
        height="25.79"
        rx="12.9"
        transform="rotate(-45 194.868 80.123)"
      />
      <circle
        className="a-fill-light a-stroke-dark"
        strokeWidth="5"
        strokeMiterlimit="10"
        cx="160"
        cy="115"
        r="12.5"
      />
    </ProtoSVG>
  );
}

FindSupportFreeFood.displayName = "SVG.ContentIcon.FindSupportFreeFood";

FindSupportFreeFood.propTypes = svgProps;

export default FindSupportFreeFood;
