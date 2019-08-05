import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from '../utils/classNames';
import './style/switch.scss';

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (arg1?: boolean) => void;
  onClick?: React.MouseEventHandler;
  className?: string;
}

const Switch: React.FunctionComponent<SwitchProps> = (props: SwitchProps) => {
  const {
    className,
    disabled,
    defaultChecked,
    checked,
    onClick,
    onChange
  } = props;
  const [switchChecked, setSwitchChecked] = useState<boolean>(() => {
    return checked !== undefined
      ? checked
      : defaultChecked !== undefined
      ? defaultChecked
      : false;
  });

  const onClickHandle: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    toggleCheck();
    onClick && onClick(e);
  };

  const toggleCheck = () => {
    const newSwitchChecked = checked !== undefined ? checked : !switchChecked;
    setSwitchChecked(newSwitchChecked);
    onChange && onChange(!switchChecked);
  };

  return (
    <button
      className={classNames(
        'algae-ui-switch-button',
        disabled ? 'algae-ui-switch-button-disabled' : '',
        className
      )}
      onClick={onClickHandle}
      disabled={disabled}
    >
      <div
        className={classNames(
          'algae-ui-switch',
          switchChecked ? 'algae-ui-switch-checked' : ''
        )}
      />
    </button>
  );
};

Switch.displayName = 'Switch';

Switch.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Switch.defaultProps = {
  disabled: false
};

export default Switch;
