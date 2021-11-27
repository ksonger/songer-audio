import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function CloseMenu({ width = 25, height = 25, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 25 25"
      width={width}
      height={height}
      aria-hidden
      {...restProps}
    >
      <path
        d="M31.444,9.915,29.052,7.523l-9.569,9.569L9.915,7.523,7.523,9.915l9.569,9.569L7.523,29.052l2.392,2.392,9.569-9.569,9.569,9.569,2.392-2.392-9.569-9.569Z"
        transform="translate(-6.816 -6.816)"
      />
    </ProtoSVG>
  );
}

CloseMenu.displayName = "SVG.CloseMenu";

CloseMenu.propTypes = {
  ...svgProps,
};
