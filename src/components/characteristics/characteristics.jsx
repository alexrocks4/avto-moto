import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './characteristics.module.scss';

function Characteristics({ className }) {
  return (
    <section className={classNames(className, styles['characteristics'])}>
      <h3 className="visually-hidden">Характеристики</h3>

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
