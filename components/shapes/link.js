import PropTypes from "prop-types";

export const internalLinkProps = {
  id: PropTypes.string,
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const internalLinkShape = PropTypes.shape(internalLinkProps);

export const internalLinkWithChildrenProps = {
  ...internalLinkProps,
  children: PropTypes.arrayOf(internalLinkShape),
};

export const internalLinkWithChildrenShape = PropTypes.shape(
  internalLinkWithChildrenProps
);

const mixedLinkProps = {
  id: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  linkEntry: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  linkText: PropTypes.string,
  titleOverride: PropTypes.string,
  urlOverride: PropTypes.string,
};

export const mixedLinkShape = PropTypes.shape(mixedLinkProps);

export const ancestorsShape = PropTypes.shape({
  ...internalLinkProps,
  parent: PropTypes.shape({
    ...internalLinkProps,
    parent: PropTypes.shape({
      ...internalLinkProps,
    }),
  }),
});

export default internalLinkShape;
