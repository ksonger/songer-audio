import PropTypes from "prop-types";
import * as Components from "@/dynamic";

const COMPONENT_MAP = {
  postList: Components.PostList,
};

export default function DynamicComponentFactory({ type }) {
  const Component = COMPONENT_MAP[type];
  if (!Component) return null;
  return <Component />;
}

DynamicComponentFactory.propTypes = {
  type: PropTypes.string.isRequired,
};
