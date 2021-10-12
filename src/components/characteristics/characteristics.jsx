import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { characteristicsData } from '../../mocks/characteristics';
import styles from './characteristics.module.scss';

function Characteristics({ className }) {
  return (
    <section className={classNames(className, styles['characteristics'])}>
      <h3 className="visually-hidden">Характеристики</h3>
      <dl className={styles['characteristics__description-list']}>
        {characteristicsData.map((item) => (
          <div
            className={styles['characteristics__list-item-container']}
            key={item.id}
          >
            <dt className={styles['characteristics__term']}>
              {item.name}
            </dt>
            <dd className={styles['characteristics__description']}>
              {item.data}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

Characteristics.propTypes = {
  className: PropTypes.string.isRequired,
};

Characteristics.defaultProps = {
  className: '',
};

export default Characteristics;
