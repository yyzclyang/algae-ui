import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from '../utils/classNames';
import scopedClassMaker from '../utils/scopedClassMaker';
import './style/checkbox.scss';

const sc = scopedClassMaker('algae-ui-checkbox');

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  children?: string;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = (
  props: CheckboxProps
) => {
  const { checked, defaultChecked, disabled, onChange, children } = props;
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
        disabled ? sc('disabled') : ''
      )}
    >
      <span className={sc()}>
        <input
          className={sc('input')}
          disabled={disabled}
          checked={checkboxChecked}
          onChange={checkboxOnChange}
          type="checkbox"
        />
      </span>
      {children ? <span className={sc('text')}>{children}</span> : null}
    </label>
  );
};

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.string
};
Checkbox.defaultProps = {
  defaultChecked: false
};

export default Checkbox;
