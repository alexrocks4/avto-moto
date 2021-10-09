import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logoImg from './logo.svg';
import styles from './logo.module.scss';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';

function Logo({ className }) {
  return (
    <NavLink
      className={classNames(className, styles.logo)}
      to={AppRoute.ROOT}
    >
      <img className={classNames(styles['logo__img'])} src={logoImg} width="134" height="55" alt="Логотип. Колесо автомобиля черно-красного цвета с текстом Avto Moto" />
    </NavLink>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
