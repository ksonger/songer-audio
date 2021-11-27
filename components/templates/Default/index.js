import PropTypes from "prop-types";
import pageShape from "@/shapes/page";
function DefaultPage({
  data: {
    pageTitle,
    pageDescription,
    pageUrl,
    featuredImage,
  },
  children,
}) {
  const bodyProps = {
    pageTitle,
    pageDescription,
    pageUrl,
    featuredImage,
    preFooterType: "compact",
  };

  return (
    <div {...bodyProps}>
      {children}
    </div>
  );
}

DefaultPage.displayName = "Template.Default";

DefaultPage.propTypes = {
  data: pageShape,
  children: PropTypes.node,
};

export default DefaultPage;
