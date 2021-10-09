import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppRoute } from '../../const';
import styles from './main-nav.module.scss';
import { NavLink } from 'react-router-dom';

function MainNav({ className }) {
  return (
    <nav className={classNames(className, styles['main-nav'])}>
      <ul className={styles['main-nav__list']}>
        <li className={styles['main-nav__list-item']}>
          <NavLink
            className={styles['main-nav__link']}
            activeClassName={styles['main-nav__link--active']}
            to={AppRoute.AUTOS}
          >
            Автомобили
          </NavLink>
        </li>
        <li className={styles['main-nav__list-item']}>
          <NavLink
            className={styles['main-nav__link']}
            activeClassName={styles['main-nav__link--active']}
            to={AppRoute.CONTACTS}
          >
            Контакты
          </NavLink>
        </li>
        <li className={styles['main-nav__list-item']}>
          <NavLink
            className={styles['main-nav__link']}
            activeClassName={styles['main-nav__link--active']}
            to={AppRoute.SERVICES}
          >
            Услуги
          </NavLink>
        </li>
        <li className={styles['main-nav__list-item']}>
          <NavLink
            className={styles['main-nav__link']}
            activeClassName={styles['main-nav__link--active']}
            to={AppRoute.VACANCIES}
          >
            Вакансии
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

MainNav.propTypes = {
  className: PropTypes.string.isRequired,
};

MainNav.defaultProps = {
  className: '',
};

export default MainNav;
