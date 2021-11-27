import PropTypes from "prop-types";
import { svgProps } from "@/shapes/svg";

function ProtoSVG({ title, description, children, ...svgProps }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" {...svgProps}>
      {title && <title>{title}</title>}
      {description && <desc>{description}</desc>}
      {children}
    </svg>
  );
}

ProtoSVG.propTypes = {
  ...svgProps,
  children: PropTypes.node.isRequired,
};

export default ProtoSVG;
