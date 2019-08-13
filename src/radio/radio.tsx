import React, { useState } from 'react';
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
    ...restProps
  } = props;
  const [radioChecked, setRadioChecked] = useState<boolean>(
    checked !== undefined
      ? checked
      : defaultChecked !== undefined
      ? defaultChecked
      : false
  );

  const radioOnChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange && onChange(e);
    setRadioChecked(true);
  };

  return (
    <label
      className={classNames(
        'algae-ui-radio-wrapper',
        (checked !== undefined
        ? checked
        : radioChecked)
          ? 'algae-ui-radio-checked'
          : '',
        disabled ? 'algae-ui-radio-disabled' : ''
      )}
    >
      <span className={classNames('algae-ui-radio', className)}>
        <input
          className="algae-ui-radio-input"
          type="radio"
          checked={checked !== undefined ? checked : radioChecked}
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
  disabled: false
};

export default Radio;
