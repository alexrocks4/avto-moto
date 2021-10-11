import React from 'react';
import PropTypes from 'prop-types';
import styles from './slide.module.scss';

function Slide({ className, slideImg }) {
  const { desktop: desktopImg, description } = slideImg;

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${desktopImg.webp.standardImg} 1x, ${desktopImg.webp.retinaImg} 2x`}
      />
      <img
        className={`${className} ${styles.slide}`}
        src={desktopImg.jpeg.standardImg}
        srcSet={`${desktopImg.jpeg.retinaImg} 2x`}
        width="600"
        height="375"
        alt={description}
      />
    </picture>
  );
}

Slide.propTypes = {
  className: PropTypes.string.isRequired,
  slideImg: PropTypes.shape({
    description: PropTypes.string.isRequired,
    desktop: PropTypes.shape({
      jpeg: PropTypes.shape({
        standardImg: PropTypes.string.isRequired,
        retinaImg: PropTypes.string.isRequired,
      }).isRequired,
      webp: PropTypes.shape({
        standardImg: PropTypes.string.isRequired,
        retinaImg: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

Slide.defaultProps = {
  className: '',
};

export default Slide;
