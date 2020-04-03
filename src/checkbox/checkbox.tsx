import React, { useState, useEffect } from 'react';
import { classNames, scopedClassMaker } from '../utils';
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
    className,
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
        indeterminate ? sc('indeterminate') : '',
        className
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
Checkbox.defaultProps = {
  defaultChecked: false,
  indeterminate: false
};

export default Checkbox;
