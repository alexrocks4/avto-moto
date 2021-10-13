import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './reviews.module.scss';
import ButtonSecondary from '../button-secondary/button-secondary';
import { AppRoute, ButtonRootElement } from '../../const';
import { reviews } from '../../mocks/reviews';
import Review from '../review/review';

function Reviews({ className }) {
  return (
    <section className={classNames(className, styles['reviews'])}>
      <h3 className="visually-hidden">Отзывы</h3>
      {reviews.map((review) => (
        <Review
          className={styles['reviews__review']}
          key={review.id}
          data={review}
        />
      ))}
      <ButtonSecondary
        className={styles['reviews__comment-button']}
        rootElement={ButtonRootElement.ROUTER_LINK}
        to={AppRoute.LEAVE_COMMENT}
      >
        оставить отзыв
      </ButtonSecondary>
    </section>
  );
}

Reviews.propTypes = {
  className: PropTypes.string.isRequired,
};

Reviews.defaultProps = {
  className: '',
};

export default Reviews;
