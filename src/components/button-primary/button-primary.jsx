import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button-primary.module.scss';
import Button from '../button/button';

function ButtonPrimary({ className, children, ...props }) {
  return (
    <Button className={classNames(className, styles['button-primary'])} {...props}>
      {children}
    </Button>
  );
}

ButtonPrimary.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

ButtonPrimary.defaultProps = {
  className: '',
};

export default ButtonPrimary;
