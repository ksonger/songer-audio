import PropTypes from "prop-types";

const searchResultProps = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  fallbackDescription: PropTypes.string,
  uri: PropTypes.string,
};

const searchResultShape = PropTypes.shape(searchResultProps);

export default searchResultShape;
