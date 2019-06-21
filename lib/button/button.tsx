import React from 'react';
import './button.scss';
import classNames from 'ROOT/lib/helpers/classNames';

interface ButtonProps {
  type?: 'default' | 'primary' | 'danger' | 'ghost';
  className?: string;
  style?: React.CSSProperties;
  htmlType?: 'submit' | 'button' | 'reset';
  children?: React.ReactText;
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const {
    type = 'default',
    className,
    htmlType = 'button',
    style,
    children,
    ...restProps
  } = props;
  return (
    <button
      className={classNames('algae-ui-button', type, className)}
      type={htmlType}
      style={{ ...style }}
      {...restProps}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
