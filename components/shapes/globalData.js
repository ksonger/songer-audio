import PropTypes from "prop-types";
import { internalLinkWithChildrenShape } from "@/shapes/link";
import { craftImageShape } from "@/shapes/image";
import { siteShape } from "@/shapes/locale";

export const globalDataProps = {
  children: PropTypes.node,
  localeInfo: PropTypes.exact({
    site: siteShape,
    localized: PropTypes.arrayOf(
      PropTypes.exact({
        locale: PropTypes.string.isRequired,
        uri: PropTypes.string.isRequired,
      })
    ),
  }),
  siteInfo: PropTypes.exact({
    siteTitle: PropTypes.string,
    siteDescription: PropTypes.string,
    siteImage: PropTypes.arrayOf(craftImageShape),
  }),
  headerData: PropTypes.shape({
    navigation: PropTypes.arrayOf(internalLinkWithChildrenShape),
  }),
  footerData: PropTypes.shape({
    address: PropTypes.string,
    phone: PropTypes.string,
    facebookUrl: PropTypes.string,
    twitterUrl: PropTypes.string,
    instagramUrl: PropTypes.string,
    linkedinUrl: PropTypes.string,
    youtubeUrl: PropTypes.string,
  }),
  signUpModal: PropTypes.shape({
    heading: PropTypes.string,
  }),
};

const globalDataShape = PropTypes.shape(globalDataProps);

export default globalDataShape;
