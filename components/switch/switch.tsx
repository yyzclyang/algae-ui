import React, { useState, useEffect } from 'react';
import { Icon } from '../icon';
import { classNames } from '../utils';
import './style/switch.scss';

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onChange?: (arg1?: boolean) => void;
  onClick?: React.MouseEventHandler;
  className?: string;
  checkedEl?: string | React.ReactElement;
  uncheckedEl?: string | React.ReactElement;
}

const Switch: React.FunctionComponent<SwitchProps> = (props: SwitchProps) => {
  const {
    className,
    disabled,
    loading,
    defaultChecked,
    checked,
    onClick,
    onChange,
    checkedEl,
    uncheckedEl
  } = props;
  const [switchChecked, setSwitchChecked] = useState<boolean>(
    checked !== undefined ? checked : defaultChecked!
  );

  useEffect(() => {
    if (checked !== undefined) {
      setSwitchChecked(checked);
      onChange && onChange(checked);
    }
  }, [checked]);

  const onClickHandle: React.MouseEventHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (disabled) {
      return;
    }
    toggleCheck();
    onClick && onClick(e);
  };

  const toggleCheck = () => {
    const newSwitchChecked = checked === undefined ? !switchChecked : !checked;
    if (checked === undefined) {
      setSwitchChecked(newSwitchChecked);
    }
    onChange && onChange(newSwitchChecked);
  };

  const renderNode = (
    node?: string | React.ReactElement
  ): string | React.ReactElement => {
    if (!node) {
      return '';
    }
    if (typeof node === 'string') {
      return node;
    } else {
      return React.cloneElement(node, {
        style: { height: '12px', width: '12px' }
      });
    }
  };

  return (
    <button
      className={classNames(
        'algae-ui-switch',
        disabled ? 'algae-ui-switch-disabled' : '',
        switchChecked ? 'algae-ui-switch-checked' : '',
        className
      )}
      onClick={onClickHandle}
      disabled={disabled}
    >
      <div className={classNames('algae-ui-switch-animation-node')}>
        {loading ? <Icon type="loading" /> : ''}
      </div>
      <span className="algae-ui-switch-inner">
        {switchChecked
          ? renderNode(checkedEl) || ''
          : renderNode(uncheckedEl) || ''}
      </span>
    </button>
  );
};

Switch.displayName = 'Switch';
Switch.defaultProps = {
  defaultChecked: false,
  disabled: false,
  loading: false
};

export default Switch;
