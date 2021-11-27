import PropTypes from "prop-types";
import { craftImageShape } from "@/shapes/image";

export const postPreviewProps = {
  id: PropTypes.string,
  uri: PropTypes.string,
  title: PropTypes.string,
  teaser: PropTypes.string,
  postImage: PropTypes.arrayOf(craftImageShape),
  thumbnail: PropTypes.arrayOf(craftImageShape),
  postType: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export const postPreviewShape = PropTypes.shape(postPreviewProps);

export const postProps = {
  ...postPreviewProps,
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
  ISODate: PropTypes.string,
  formattedDate: PropTypes.string,
  postTopics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  promotedPost: PropTypes.bool,
  contentBlocks: PropTypes.arrayOf(PropTypes.object),
  importHtml: PropTypes.node,
  previousPost: PropTypes.shape({
    id: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
  }),
  nextPost: PropTypes.shape({
    id: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
  }),
  relatedPosts: PropTypes.arrayOf(postPreviewShape),
};

export const postShape = PropTypes.shape(postProps);

export default postShape;
