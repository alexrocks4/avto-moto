import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './info.module.scss';
import { AppRoute, ButtonRootElement } from '../../const';
import ButtonPrimary from '../button-primary/button-primary';
import ButtonSecondary from '../button-secondary/button-secondary';


function Info({ className }) {
  return (
    <section className={classNames(className, styles['info'])}>
      <h2 className="visually-hidden">Описание предложения о приобретении автомобиля</h2>
      <p className={styles['info__title']}>Марпех 11</p>
      <ul className={styles['info__features-list']}>
        <li
          className={classNames(styles['info__features-list-item'], styles['info__features-list-item--benzin'])}
        >
          бензин
        </li>
        <li
          className={classNames(styles['info__features-list-item'], styles['info__features-list-item--mechanical'])}
        >
          механика
        </li>
        <li
          className={classNames(styles['info__features-list-item'], styles['info__features-list-item--power'])}
        >
          100 л.с.
        </li>
        <li
          className={classNames(styles['info__features-list-item'], styles['info__features-list-item--volume'])}
        >
          1.4 л
        </li>
      </ul>
      <p className={styles['info__price']}>
        <span className={styles['info__price-new']}>2&nbsp;300&nbsp;000&nbsp;₽</span>
        <del className={styles['info__price-old']}>2&nbsp;&nbsp;400&nbsp;000&nbsp;₽</del>
      </p>
      <div className={styles['info__actions-container']}>
        <ButtonPrimary
          className={styles['info__request-button']}
          rootElement={ButtonRootElement.ROUTER_LINK}
          to={AppRoute.LEAVE_REQUEST}
        >
          оставить заявку
        </ButtonPrimary>
        <ButtonSecondary
          className={styles['info__credit-button']}
          rootElement={ButtonRootElement.ROUTER_LINK}
          to={AppRoute.LEAVE_REQUEST}
        >
          В кредит от 11 000 ₽
        </ButtonSecondary>
      </div>

    </section>
  );
}

Info.propTypes = {
  className: PropTypes.string.isRequired,
};

Info.defaultProps = {
  className: '',
};

export default Info;
