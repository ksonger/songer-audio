import PropTypes from "prop-types";
import { craftImageShape } from "@/shapes/image";
import { ancestorsShape, mixedLinkShape } from "@/shapes/link";
import { postPreviewShape } from "@/shapes/post";
import { eventShape } from "@/shapes/event";

const pageProps = {
  id: PropTypes.string,
  uri: PropTypes.string,
  typeHandle: PropTypes.string,
  sectionHandle: PropTypes.string,
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  pageUrl: PropTypes.string,
  language: PropTypes.any,
  localized: PropTypes.arrayOf(
    PropTypes.shape({
      uri: PropTypes.string.isRequired,
      locale: PropTypes.any,
    })
  ),
  featuredImage: PropTypes.arrayOf(craftImageShape),
  ancestors: ancestorsShape,
  heroColor: PropTypes.string,
  heroHeader: PropTypes.string,
  homepageHeroHeader: PropTypes.string,
  heroText: PropTypes.node,
  heroImage: PropTypes.arrayOf(craftImageShape),
  heroLink: PropTypes.arrayOf(mixedLinkShape),
  videoAssets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      mimeType: PropTypes.string.isRequired,
    })
  ),
  contentBlocks: PropTypes.arrayOf(PropTypes.object),
  navigationTabs: PropTypes.arrayOf(PropTypes.object),
  headerType: PropTypes.oneOf(["default", "overlay"]),
  preFooterType: PropTypes.oneOf(["default", "compact"]),
  landingType: PropTypes.oneOf(["posts", "events"]),
  featuredPost: PropTypes.arrayOf(postPreviewShape),
  entryListHeader: PropTypes.string,
  entryListSubheader: PropTypes.string,
  posts: PropTypes.arrayOf(postPreviewShape),
  postCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  postCount: PropTypes.number,
  events: PropTypes.arrayOf(eventShape),
  eventTypes: PropTypes.arrayOf(PropTypes.string),
  total: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

const pageShape = PropTypes.shape(pageProps);

export default pageShape;
