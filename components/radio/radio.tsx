import React, { useState, useEffect } from 'react';
import { classNames } from '../utils';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
}

const Radio: React.FunctionComponent<RadioProps> = (props: RadioProps) => {
  const {
    className,
    checked,
    defaultChecked,
    disabled,
    onChange,
    children,
    style,
    ...restProps
  } = props;
  const [radioChecked, setRadioChecked] = useState<boolean>(
    checked !== undefined ? checked : defaultChecked!
  );

  useEffect(() => {
    if (checked !== undefined) {
      setRadioChecked(checked);
    }
  }, [checked]);

  const radioOnChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (disabled) {
      return;
    }
    onChange && onChange(e);
    if (checked === undefined) {
      setRadioChecked(e.target.checked);
    }
  };

  return (
    <label
      className={classNames(
        'algae-ui-radio-wrapper',
        radioChecked ? 'algae-ui-radio-checked' : '',
        disabled ? 'algae-ui-radio-disabled' : '',
        className
      )}
      style={style}
    >
      <span className={classNames('algae-ui-radio')}>
        <input
          className="algae-ui-radio-input"
          type="radio"
          checked={radioChecked}
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

Radio.displayName = 'Radio';
Radio.defaultProps = {
  defaultChecked: false,
  disabled: false
};

export default Radio;
