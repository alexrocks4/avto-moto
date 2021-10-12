import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './contacts.module.scss';

function Contacts({ className }) {
  return (
    <section className={classNames(className, styles['contacts'])}>
      <h3 className="visually-hidden">Контакты</h3>

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
