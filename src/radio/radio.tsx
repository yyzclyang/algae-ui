import React, { useState } from 'react';
import classNames from '../utils/classNames';
import './style/radio.scss';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
}

const Radio: React.FunctionComponent<RadioProps> = (props: RadioProps) => {
  const {
    className,
    checked,
    disabled,
    onChange,
    children,
    ...restProps
  } = props;
  const [radioChecked, setRadioChecked] = useState<boolean>(
    checked !== undefined ? checked : false
  );

  const radioOnChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRadioChecked(checked !== undefined ? checked : true);
    onChange && onChange(e);
  };

  return (
    <label
      className={classNames(
        'algae-ui-radio-wrapper',
        radioChecked ? 'algae-ui-radio-checked' : '',
        disabled ? 'algae-ui-radio-disabled' : ''
      )}
    >
      <span className={classNames('algae-ui-radio', className)}>
        <input
          className="algae-ui-radio-input"
          type="radio"
          disabled={disabled}
          onChange={radioOnChange}
          {...restProps}
        />
        <span className="algae-ui-radio-inner" />
      </span>
      {children ? (
        <span className="algae-ui-radio-text">{children}</span>
      ) : null}
    </label>
  );
};

export default Radio;
