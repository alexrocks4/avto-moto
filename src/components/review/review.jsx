import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './review.module.scss';
import { review } from '../../types/review';
import Button from '../button/button';

const MAX_RATING = 5;

function Review({ className, data }) {
  const {
    username,
    advantages,
    disadvantages,
    comment,
    rating,
    date,
  } = data;

  const percentageRating = rating / MAX_RATING * 100;

  return (
    <article className={classNames(className, styles['review'])}>
      <h4 className="visually-hidden">Отзыв об автомобиле</h4>
      <p className={styles['review__username']}>{username}</p>
      <dl className={styles['review__list']}>
        <div className={styles['review__advantages-container']}>
          <dt className={styles['review__list-term']}>Достоинства</dt>
          <dd className={styles['review__list-description']}>{advantages}</dd>
        </div>
        <div className={styles['review__disadvantages-container']}>
          <dt className={styles['review__list-term']}>Недостатки</dt>
          <dd className={styles['review__list-description']}>{disadvantages}</dd>
        </div>
        <div>
          <dt className={styles['review__list-term']}>Комментарий</dt>
          <dd className={styles['review__list-description']}>{comment}</dd>
        </div>
      </dl>
      <p className={styles['review__rating']}>
        <span
          className={styles['review__rating-stars']}
          style={{ width: percentageRating }}
          aria-label={`Рейтинг ${rating} из ${MAX_RATING}`}
        />
        Советует
      </p>

      <footer className={styles['review__footer']}>
        <time
          className={styles['review__time']}
          dateTime={date}
        >
          1 минуту назад
        </time>
        <Button
          className={styles['review__reply-button']}
          type="button"
        >
          Ответить
        </Button>
      </footer>
    </article>
  );
}

Review.propTypes = {
  className: PropTypes.string.isRequired,
  data: review.isRequired,
};

Review.defaultProps = {
  className: '',
};

export default Review;
