import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button-tab.module.scss';
import Button from '../button/button';

function ButtonTab({ className, children, isActive, ...props }) {
  return (
    <Button className={classNames(
      className,
      styles['button-tab'],
      {
        [styles['button-tab--active']]: isActive,
      },
    )}
    {...props}
    >
      {children}
    </Button>
  );
}

ButtonTab.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
  isActive: PropTypes.bool.isRequired,
};

ButtonTab.defaultProps = {
  className: '',
  isActive: false,
};

export default ButtonTab;
