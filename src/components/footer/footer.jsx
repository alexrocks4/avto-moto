import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <WrapperFluid className={styles['footer__container']}>
        <ul className={styles['footer__list']}>
          <li className={styles['footer__list-item']}>
            <Link
              className={styles['footer__link']}
              to={AppRoute.CORPORATE_CLIENTS}
            >
              Корпоративным клиентам
            </Link>
          </li>

          <li className={styles['footer__list-item']}>
            <Link
              className={styles['footer__link']}
              to={AppRoute.CLIENTS}
            >
              Клиентам
            </Link>
          </li>

          <li className={styles['footer__list-item']}>
            <Link
              className={styles['footer__link']}
              to={AppRoute.AUTO_RENT}
            >
              Аренда авто
            </Link>
          </li>

          <li className={styles['footer__list-item']}>
            <Link
              className={styles['footer__link']}
              to={AppRoute.CARSHARING}
            >
              Каршеринг
            </Link>
          </li>

          <li className={styles['footer__list-item']}>
            <Link
              className={styles['footer__link']}
              to={AppRoute.HOW_TO_SELL_AUTO}
            >
              Как продать авто
            </Link>
          </li>

          <li className={styles['footer__list-item']}>
            <Link
              className={styles['footer__link']}
              to={AppRoute.TRADE_IN}
            >
              Trade-in
            </Link>
          </li>

          <li className={styles['footer__list-item']}>
            <Link
              className={styles['footer__link']}
              to={AppRoute.TEST_DRIVE}
            >
              Test drive
            </Link>
          </li>
        </ul>
      </WrapperFluid>
    </footer>
  );
}

export default Footer;
