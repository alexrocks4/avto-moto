import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './characteristics.module.scss';
import { nanoid } from '@reduxjs/toolkit';

const characteristicsData = [
  {
    id: nanoid(),
    name: 'Трансмиссия',
    data: 'Роботизированная',
  },
  {
    id: nanoid(),
    name: 'Мощность двигателя, л.с.',
    data: '249',
  },
  {
    id: nanoid(),
    name: 'Тип двигателя',
    data: 'Бензиновый',
  },
  {
    id: nanoid(),
    name: 'Привод',
    data: 'Полный',
  },
  {
    id: nanoid(),
    name: 'Объем двигателя, л',
    data: '2.4',
  },
  {
    id: nanoid(),
    name: 'Макс. крутящий момент',
    data: '370/4500',
  },
  {
    id: nanoid(),
    name: 'Количество цилиндров',
    data: '4',
  },
];

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
