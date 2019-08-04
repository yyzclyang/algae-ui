import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import classNames from '../utils/classNames';
import './style/switch.scss';

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (arg1?: boolean) => void;
  onClick?: () => void;
  className?: string;
}

const Switch: React.FunctionComponent<SwitchProps> = (props: SwitchProps) => {
  const { className } = props;
  const [switchChecked, setSwitchChecked] = useState<boolean>(false);
  return (
    <button
      className={classNames('algae-ui-switch-button', className)}
      onClick={(e) => {
        setSwitchChecked(!switchChecked);
      }}
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

export default Switch;
