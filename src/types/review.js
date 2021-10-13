import PropTypes from 'prop-types';

const review = PropTypes.shape({
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  advantages: PropTypes.string.isRequired,
  disadvantages: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
});

export { review };
