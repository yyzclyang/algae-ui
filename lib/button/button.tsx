import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import './button.scss';
import { classNames } from '../utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'default' | 'primary' | 'danger';
  icon?: string;
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
    loading,
    ghost,
    full,
    children,
    ...restProps
  } = props;
  const handleClick: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClick && onClick(e);
  };
  return (
    <button
      className={classNames(
        'algae-ui-button',
        `algae-ui-button-${buttonType}`,
        className,
        ghost ? 'algae-ui-button-ghost' : undefined,
        full ? 'algae-ui-button-full' : undefined
      )}
      onClick={handleClick}
      {...restProps}
    >
      {loading && (
        <Icon className={'algae-ui-icon-loading'} type="loading"></Icon>
      )}
      {icon && <Icon type="wechat"></Icon>}
      {children}
    </button>
  );
};

Button.displayName = 'Button';

Button.defaultProps = {
  buttonType: 'default',
  loading: false,
  ghost: false
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(['default', 'primary', 'danger']),
  icon: PropTypes.string,
  loading: PropTypes.bool,
  ghost: PropTypes.bool,
  onClick: PropTypes.func,
  full: PropTypes.bool,
  children: PropTypes.node
};

export default Button;
