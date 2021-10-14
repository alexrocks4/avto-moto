import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './contacts.module.scss';
import MapImg from './map.png';
import useMap from '../../hooks/useMap';

const OfficeLocation = {
  LAT: 59.96819954716697,
  LNG: 30.31650272741537,
};

function Contacts({ className }) {
  const mapRef = useRef(null);
  const { isMapLoaded, isMapError } = useMap(mapRef, OfficeLocation);

  return (
    <section className={classNames(className, styles['contacts'])}>
      <h3 className="visually-hidden">Контакты</h3>
      <dl className={styles['contacts__list']}>
        <dt className={styles['contacts__term']}>Адрес</dt>
        <dd className={styles['contacts__description']}>
          <address className={styles['contacts__address']}>
            Санкт-Петербург,<br />набережная реки Карповки, дом 5
          </address>
        </dd>
        <dt className={styles['contacts__term']}>Режим работы</dt>
        <dd className={styles['contacts__description']}>Ежедневно, с 10:00 до 21:00</dd>

        <dt className={styles['contacts__term']}>Телефон</dt>
        <dd className={styles['contacts__description']}>
          <a
            className={styles['contacts__link']}
            href="tel:88003335599"
          >
            8 (800) 333-55-99
          </a>
        </dd>

        <dt className={styles['contacts__term']}>E-mail</dt>
        <dd className={styles['contacts__description']}>
          <a
            className={styles['contacts__link']}
            href="mailto:info@avto-moto.ru"
          >
            info@avto-moto.ru
          </a>
        </dd>
      </dl>
      <figure className={styles['contacts__map']}>
        <div
          className={styles['contacts__map-container']}
          id="map"
          ref={mapRef}
        />

        <img
          className={classNames(
            styles['contacts__map-img'],
            { [styles['contacts__map-img--hidden']]: isMapLoaded && !isMapError },
          )}
          src={MapImg}
          width="431"
          height="271"
          alt="Карта с указанием местоположения офиса компании"
        />
      </figure>
    </section>
  );
}

Contacts.propTypes = {
  className: PropTypes.string.isRequired,
};

Contacts.defaultProps = {
  className: '',
};

export default Contacts;
