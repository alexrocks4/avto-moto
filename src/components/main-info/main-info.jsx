import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './main-info.module.scss';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';
import Slider from '../slider/slider';
import Info from '../info/info';

function MainInfo({ className }) {
  return (
    <section className={classNames(className, styles['main-info'])}>
      <h2 className="visually-hidden">Основная информация об автомобиле</h2>
      <WrapperFluid>
        <div className={styles['main-info__container']}>
          <Slider className={styles['main-info__slider']} />
          <Info className={styles['main-info__info']} />
        </div>
      </WrapperFluid>
    </section>
  );
}

MainInfo.propTypes = {
  className: PropTypes.string.isRequired,
};

MainInfo.defaultProps = {
  className: '',
};

export default MainInfo;
