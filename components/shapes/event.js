import PropTypes from "prop-types";

export const eventProps = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  browser_url: PropTypes.string,
  event_type: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  featured_image_url: PropTypes.string,
  timeslots: PropTypes.arrayOf(
    PropTypes.shape({
      start_date: PropTypes.number.isRequired,
    })
  ),
};

export const eventShape = PropTypes.shape(eventProps);

export default eventShape;
