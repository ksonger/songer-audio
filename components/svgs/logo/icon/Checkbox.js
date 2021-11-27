import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function Checkbox({ width = 30, height = 30, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 30 30"
      width={width}
      height={height}
      aria-hidden
      {...restProps}
    >
      <rect id="background" width="30" height="30" rx="2.30998" />
      <path
        id="outline"
        d="M0,2.31V27.69A2.31,2.31,0,0,0,2.31,30H27.69A2.31,2.31,0,0,0,30,27.69V2.31A2.31,2.31,0,0,0,27.69,0H2.31A2.31,2.31,0,0,0,0,2.31ZM25.69,28H4.31A2.31,2.31,0,0,1,2,25.69V4.31A2.31,2.31,0,0,1,4.31,2H25.69A2.31,2.31,0,0,1,28,4.31V25.69A2.31,2.31,0,0,1,25.69,28Z"
      />
      <path
        id="checkmark"
        d="M23.98663,9.83079,22.49887,8.343a.61814.61814,0,0,0-.87418,0L13.051,16.91678a.61815.61815,0,0,1-.87419,0l-3.24294-3.243a.61813.61813,0,0,0-.87418,0L6.57179,15.16159a.61815.61815,0,0,0,0,.87419l3.68012,3.68L12.19307,21.657a.61814.61814,0,0,0,.87418,0l1.92484-1.92484-.0162-.01631L23.98663,10.705A.61814.61814,0,0,0,23.98663,9.83079Z"
      />
    </ProtoSVG>
  );
}

Checkbox.displayName = "SVG.Checkbox";

Checkbox.propTypes = svgProps;
