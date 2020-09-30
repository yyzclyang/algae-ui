import React from 'react';
import Icon from '../icon';
import { classNames, useDiffuseAnimation } from '../utils';
import './style/button.scss';

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

  const [diffuseClassName, setDiffuseClassName] = useDiffuseAnimation();

  const handleClick: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!diffuseClassName && !disabled) {
      setDiffuseClassName();
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
        diffuseClassName
      )}
      onClick={handleClick}
      {...restProps}
    >
      {iconPosition === 'right' && children}
      {loading ? (
        <Icon
          className={'animation-loading'}
          type="loading"
          style={{ fill: 'inherit' }}
        />
      ) : icon ? (
        <Icon type={icon} className={iconPosition} />
      ) : null}
      {iconPosition === 'left' && children}
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

export default Button;
