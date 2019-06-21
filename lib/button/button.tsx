import React from 'react';
import Icon from '../icon';
import './button.scss';
import classNames from '../helpers/classNames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'default' | 'primary' | 'danger';
  className?: string;
  icon?: string;
  ghost?: boolean;
  children?: React.ReactText;
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { buttonType, className, icon, ghost, children, ...restProps } = props;
  return (
    <button
      className={classNames(
        'algae-ui-button',
        buttonType,
        className,
        ghost ? 'ghost' : undefined
      )}
      {...restProps}
    >
      {icon && <Icon type="wechat"></Icon>}
      {children}
    </button>
  );
};

Button.defaultProps = {
  buttonType: 'default',
  ghost: false
};

export default Button;
