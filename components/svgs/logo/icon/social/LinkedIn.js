import ProtoSVG from "@/svgs/ProtoSVG";
import { svgProps } from "@/shapes/svg";

export default function LinkedIn({ width = 41, height = 41, ...restProps }) {
  return (
    <ProtoSVG
      viewBox="0 0 41 41"
      width={width}
      height={height}
      title="LinkedIn logo"
      {...restProps}
    >
      <path
        d="M789.082,253.722l-21.9-6.736a2.239,2.239,0,0,0-2.87,1.353l-6.751,21.944a2.415,2.415,0,0,0,1.55,2.938L781,279.955a2.293,2.293,0,0,0,2.8-1.6l6.751-21.944a2.1,2.1,0,0,0-1.47-2.689Zm-22.732,16.944-3.759-1.156,3.6-11.686,3.758,1.156Zm2.392-14-.027-.008a2.135,2.135,0,1,1,.027.008Zm11.343,18.227-3.758-1.156,1.966-6.389c.471-1.531.246-2.745-1.114-3.163a2.15,2.15,0,0,0-2.354.794,2.65,2.65,0,0,0-.414.883l-2.048,6.656L768.6,271.36l3.6-11.686,3.758,1.156-.5,1.626a3.982,3.982,0,0,1,3.974-.857c2.467.759,3.833,2.96,2.755,6.465Z"
        transform="translate(-796.55 -4.901) rotate(-17)"
      />
    </ProtoSVG>
  );
}

LinkedIn.displayName = "SVG.Social.LinkedIn";

LinkedIn.propTypes = {
  ...svgProps,
};
