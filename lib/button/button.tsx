import React from 'react';
import './button.scss';
import classes from 'ROOT/lib/helpers/classes';

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
      className={classes('algae-ui-button', type, className)}
      type={htmlType}
      style={{ ...style }}
      {...restProps}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
