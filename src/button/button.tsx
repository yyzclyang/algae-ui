import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import './style/button.scss';
import { classNames } from '../utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'default' | 'primary' | 'success' | 'danger';
  icon?: string;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  ghost?: boolean;
  full?: boolean;
  children?: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const {
    buttonType,
    className,
    onClick,
    icon,
    iconPosition,
    disabled,
    loading,
    ghost,
    full,
    children,
    ...restProps
  } = props;

  const [animatingClassName, setAnimatingClassName] = useState<string>('');

  const handleClick: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!animatingClassName && !disabled) {
      setAnimatingClassName('algae-ui-button-animation-diffuse');
      setTimeout(() => {
        setAnimatingClassName('');
      }, 300);
    }
    !disabled && onClick && onClick(e);
  };

  return (
    <button
      className={classNames(
        'algae-ui-button',
        `algae-ui-button-${buttonType}`,
        className,
        ghost ? 'algae-ui-button-ghost' : undefined,
        full ? 'algae-ui-button-full' : undefined,
        disabled ? 'algae-ui-button-disabled' : undefined,
        animatingClassName
      )}
      onClick={handleClick}
      {...restProps}
    >
      {loading && (
        <Icon
          className={'animation-loading'}
          type="loading"
          style={{ fill: 'inherit' }}
        />
      )}
      {icon && iconPosition === 'left' && (
        <Icon type={icon} className={'left'} />
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <Icon type={icon} className={'right'} />
      )}
    </button>
  );
};

Button.displayName = 'Button';

Button.defaultProps = {
  buttonType: 'default',
  loading: false,
  iconPosition: 'left',
  ghost: false
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(['default', 'primary', 'success', 'danger']),
  icon: PropTypes.string,
  loading: PropTypes.bool,
  ghost: PropTypes.bool,
  onClick: PropTypes.func,
  full: PropTypes.bool,
  children: PropTypes.node
};

export default Button;
