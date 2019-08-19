import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from '../utils/classNames';
import './style/radio.scss';

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
      setRadioChecked(true);
    }
  };

  return (
    <label
      className={classNames(
        'algae-ui-radio-wrapper',
        radioChecked ? 'algae-ui-radio-checked' : '',
        disabled ? 'algae-ui-radio-disabled' : ''
      )}
      style={style}
    >
      <span className={classNames('algae-ui-radio', className)}>
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

Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node
};

Radio.defaultProps = {
  defaultChecked: false,
  disabled: false
};

export default Radio;
