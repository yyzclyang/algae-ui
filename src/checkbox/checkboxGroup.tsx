import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from '../utils/classNames';
import scopedClassMaker from '../utils/scopedClassMaker';
import Checkbox from './checkbox';

const sc = scopedClassMaker('algae-ui-checkbox-group');

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

interface CheckboxGroupProps {
  className?: string;
  value?: string[];
  name?: string;
  disabled?: boolean;
  options?: Array<Option | string>;
  children?: React.ReactNode;
  onChange?: (checkedList: string[]) => void;
}

const CheckboxGroup: React.FunctionComponent<CheckboxGroupProps> = (
  props: CheckboxGroupProps
) => {
  const {
    className,
    value: checkboxGroupValueArray,
    name,
    disabled,
    options,
    onChange,
    children
  } = props;

  const [checkboxCheckedList, setCheckboxCheckedList] = useState<string[]>(
    checkboxGroupValueArray !== undefined ? checkboxGroupValueArray : []
  );

  useEffect(() => {
    setCheckboxCheckedList(checkboxGroupValueArray || []);
  }, [checkboxGroupValueArray]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent
  ) => {
    const currentValue = (e.target as HTMLInputElement).value || '';
    const currentCheckedListSet = new Set(checkboxCheckedList);
    if (currentCheckedListSet.has(currentValue)) {
      currentCheckedListSet.delete(currentValue);
    } else {
      currentCheckedListSet.add(currentValue);
    }
    onChange && onChange(Array.from(currentCheckedListSet));
  };

  return (
    <div
      className={classNames(sc(), disabled ? sc('disabled') : '', className)}
    >
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(
              child,
              Object.assign(
                {},
                {
                  checked:
                    child.props.value !== undefined &&
                    checkboxCheckedList.includes(child.props.value),
                  onChange: handleChange
                },
                name ? { name } : {},
                disabled ? { disabled: true } : {}
              )
            )
          : child;
      })}
      {options &&
        options.map((item) => {
          return typeof item !== 'string' ? (
            <Checkbox
              key={Math.random()}
              value={item.value}
              checked={checkboxCheckedList.includes(item.value)}
              disabled={
                disabled
                  ? true
                  : item.disabled !== undefined
                  ? item.disabled
                  : false
              }
              onChange={handleChange}
            >
              {item.label}
            </Checkbox>
          ) : (
            <Checkbox
              key={Math.random()}
              value={item}
              checked={checkboxCheckedList.includes(item)}
              disabled={disabled}
              onChange={handleChange}
            >
              {item}
            </Checkbox>
          );
        })}
    </div>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

CheckboxGroup.propTypes = {
  className: PropTypes.string,
  value: PropTypes.array,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  options: PropTypes.array
};

export default CheckboxGroup;
