import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from '../utils/classNames';
import scopedClassMaker from '../utils/scopedClassMaker';
import './style/checkbox.scss';

const sc = scopedClassMaker('algae-ui-checkbox');

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  children?: string;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = (
  props: CheckboxProps
) => {
  const {
    checked,
    defaultChecked,
    disabled,
    indeterminate,
    onChange,
    children,
    ...restProps
  } = props;
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(
    checked !== undefined ? checked : defaultChecked!
  );

  useEffect(() => {
    if (checked !== undefined) {
      setCheckboxChecked(checked!);
    }
  }, [checked]);

  const checkboxOnChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (disabled) {
      return;
    }
    onChange && onChange(e);
    if (checked === undefined) {
      setCheckboxChecked(e.target.checked);
    }
  };

  return (
    <label
      className={classNames(
        sc('wrapper'),
        checkboxChecked ? sc('checked') : '',
        disabled ? sc('disabled') : '',
        indeterminate ? sc('indeterminate') : ''
      )}
    >
      <span className={sc()}>
        <input
          className={sc('input')}
          disabled={disabled}
          checked={checkboxChecked}
          onChange={checkboxOnChange}
          type="checkbox"
          {...restProps}
        />
      </span>
      {children ? <span className={sc('text')}>{children}</span> : null}
    </label>
  );
};

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.string
};
Checkbox.defaultProps = {
  defaultChecked: false,
  indeterminate: false
};

export default Checkbox;
