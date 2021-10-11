import React from 'react';
import classNames from 'classnames';
import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav';
import WrapperFluid from '../wrapper-fluid/wrapper-fluid';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={classNames('page__header', styles.header)}>
      <WrapperFluid>
        <div className={styles['header__container']}>
          <Logo className={styles['header__logo']}/>
          <MainNav />
        </div>
      </WrapperFluid>
    </header>
  );
}

export default Header;
