import React from 'react';
import styles from './under-construction-screen.module.scss';

function UnderConstructionScreen() {
  return (
    <main className={styles['under-construction']}>
      <h1 className={styles['under-construction__title']}>
        Страница в разработке
      </h1>
    </main>
  );
}

export default UnderConstructionScreen;
