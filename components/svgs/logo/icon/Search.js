import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function Search({ width = 16, height = 16, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 16 16"
      width={width}
      height={height}
      aria-hidden
      {...restProps}
    >
      <path d="M14.23188,15.50888h0l-4.289-4.279v-.678l-.234-.243a5.582,5.582,0,1,1,.6-.6l.24.232h.678l4.282,4.291Zm-8.148-13.285a3.859,3.859,0,1,0,3.859,3.86A3.859,3.859,0,0,0,6.08388,2.22388Z" />
    </ProtoSVG>
  );
}

Search.displayName = "SVG.Search";

Search.propTypes = {
  ...svgProps,
};
