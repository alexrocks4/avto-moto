import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button-secondary.module.scss';
import Button from '../button/button';

function ButtonSecondary({ className, children, ...props }) {
  return (
    <Button
      className={classNames(className, styles['button-secondary'])}
      {...props}
    >
      {children}
    </Button>
  );
}

ButtonSecondary.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

ButtonSecondary.defaultProps = {
  className: '',
};

export default ButtonSecondary;
