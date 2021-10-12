import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './reviews.module.scss';

function Reviews({ className }) {
  return (
    <section className={classNames(className, styles['reviews'])}>
      <h3 className="visually-hidden">Отзывы</h3>

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
