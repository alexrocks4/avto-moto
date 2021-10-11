import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './info.module.scss';


function Info({ className }) {
  return (
    <section className={classNames(className, styles['info'])}>
      111
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
