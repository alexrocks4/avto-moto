import React from 'react';
import MainInfo from '../main-info/main-info';
import Main from '../main/main';
import SecondaryInfo from '../secondary-info/secondary-info';
import styles from './offer-screen.module.scss';

function OfferScreen() {
  return (
    <Main className={styles['offer-screen']}>
      <h1 className="visually-hidden">Сведения об автомобиле Марпех 11</h1>
      <MainInfo className={styles['offer-screen__main-info']} />
      <SecondaryInfo className={styles['offer-screen__secondary-info']} />
    </Main>
  );
}

export default OfferScreen;
