import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './slider.module.scss';

// Images
import Slide1JPGImg from './slide-1.jpg';
import Slide2JPGImg from './slide-2.jpg';
import Slide3JPGImg from './slide-3.jpg';

import Slide1JPG2xImg from './slide-1@2x.jpg';
import Slide2JPG2xImg from './slide-2@2x.jpg';
import Slide3JPG2xImg from './slide-3@2x.jpg';

import Slide1WEBPImg from './slide-1.webp';
import Slide2WEBPImg from './slide-2.webp';
import Slide3WEBPImg from './slide-3.webp';

import Slide1WEBP2xImg from './slide-1@2x.webp';
import Slide2WEBP2xImg from './slide-2@2x.webp';
import Slide3WEBP2xImg from './slide-3@2x.webp';

import Preview1JPGImg from './slide-1-mini.jpg';
import Preview2JPGImg from './slide-2-mini.jpg';
import Preview3JPGImg from './slide-3-mini.jpg';

import Preview1JPG2xImg from './slide-1-mini@2x.jpg';
import Preview2JPG2xImg from './slide-2-mini@2x.jpg';
import Preview3JPG2xImg from './slide-3-mini@2x.jpg';

import Preview1WEBPImg from './slide-1-mini.webp';
import Preview2WEBPImg from './slide-2-mini.webp';
import Preview3WEBPImg from './slide-3-mini.webp';

import Preview1WEBP2xImg from './slide-1-mini@2x.webp';
import Preview2WEBP2xImg from './slide-2-mini@2x.webp';
import Preview3WEBP2xImg from './slide-3-mini@2x.webp';


import Slide from '../slide/slide';
import Button from '../button/button';

const DEFAULT_ACTIVE_SLIDE_ID = 0;

// Array of main slider images
const mainSliderImages = [
  {
    description: 'Кабриолет черного цвета',
    desktop: {
      jpeg: {
        standardImg: Slide1JPGImg,
        retinaImg: Slide1JPG2xImg,
      },
      webp: {
        standardImg: Slide1WEBPImg,
        retinaImg: Slide1WEBP2xImg,
      },
    },
  },
  {
    description: 'Передняя часть салона автомобиля. Панель приборов автомобиля.',
    desktop: {
      jpeg: {
        standardImg: Slide2JPGImg,
        retinaImg: Slide2JPG2xImg,
      },
      webp: {
        standardImg: Slide2WEBPImg,
        retinaImg: Slide2WEBP2xImg,
      },
    },
  },
  {
    description: 'Спидометр',
    desktop: {
      jpeg: {
        standardImg: Slide3JPGImg,
        retinaImg: Slide3JPG2xImg,
      },
      webp: {
        standardImg: Slide3WEBPImg,
        retinaImg: Slide3WEBP2xImg,
      },
    },
  },
];

function Slider({ className }) {
  const [ activeSlideId, setActiveSlideId ] = useState(DEFAULT_ACTIVE_SLIDE_ID);
  const isNextButtonInactive = activeSlideId >= (mainSliderImages.length - 1);
  const isPreviousButtonInactive = activeSlideId <= 0;

  const handlePreviousButtonClick = (evt) => {
    evt.preventDefault();
    setActiveSlideId((id) => id - 1);
  };

  const handleNextButtonClick = (evt) => {
    evt.preventDefault();
    setActiveSlideId((id) => id + 1);
  };

  return (
    <figure className={`${className} ${styles.slider}`}>
      <div className={styles['slider__main-slider']}>
        <p className={styles['slider__label']}>New model</p>
        <Slide
          className={styles['slider__slide']}
          slideImg={mainSliderImages[activeSlideId]}
        />
      </div>

      <figure className={styles['slider__preview']}>
        <div>
          <picture>
            <source
              type="image/webp"
              srcSet={`${Preview1WEBPImg} 1x, ${Preview1WEBP2xImg} 2x`}
            />
            <img
              className={styles['slider__preview-img']}
              src={Preview1JPGImg}
              srcSet={`${Preview1JPG2xImg} 2x`}
              width="128"
              height="80"
              alt="Кабриолет черного цвета"
            />
          </picture>
        </div>

        <div>
          <picture>
            <source
              type="image/webp"
              srcSet={`${Preview2WEBPImg} 1x, ${Preview2WEBP2xImg} 2x`}
            />
            <img
              className={styles['slider__preview-img']}
              src={Preview2JPGImg}
              srcSet={`${Preview2JPG2xImg} 2x`}
              width="128"
              height="80"
              alt="Передняя часть салона автомобиля. Панель приборов автомобиля."
            />
          </picture>
        </div>

        <div>
          <picture>
            <source
              type="image/webp"
              srcSet={`${Preview3WEBPImg} 1x, ${Preview3WEBP2xImg} 2x`}
            />
            <img
              className={styles['slider__preview-img']}
              src={Preview3JPGImg}
              srcSet={`${Preview3JPG2xImg} 2x`}
              width="128"
              height="80"
              alt="Спидометр"
            />
          </picture>
        </div>

        <div className={styles['slider__previous-button-container']}>
          <Button
            className={classNames(styles['slider__previous-button'], {
              [styles['slider__prevous-button--inactive']]: isPreviousButtonInactive,
            })}
            type="button"
            onClick={handlePreviousButtonClick}
            disabled={isPreviousButtonInactive}
          />
        </div>

        <div className={styles['slider__next-button-container']}>
          <Button
            className={classNames(styles['slider__next-button'], {
              [styles['slider__next-button--inactive']]: isNextButtonInactive,
            })}
            type="button"
            onClick={handleNextButtonClick}
            disabled={isNextButtonInactive}
          />
        </div>
      </figure>
    </figure>
  );
}

Slider.propTypes = {
  className: PropTypes.string.isRequired,
};

Slider.defaultProps = {
  className: '',
};

export default Slider;
