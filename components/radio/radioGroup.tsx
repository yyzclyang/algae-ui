import React from 'react';
import { classNames } from '../utils';
import Radio from './radio';

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
interface RadioGroupProps {
  className?: string;
  value?: string;
  name?: string;
  disabled?: boolean;
  options?: Array<Option | string>;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const RadioGroup: React.FunctionComponent<RadioGroupProps> = (
  props: RadioGroupProps
) => {
  const {
    className,
    value: radioGroupValue,
    name,
    disabled,
    options,
    onChange,
    children
  } = props;

  return (
    <div
      className={classNames(
        'algae-ui-radio-group',
        disabled ? 'algae-ui-radio-group-disabled' : '',
        className
      )}
    >
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(
              child,
              Object.assign(
                {},
                {
                  checked:
                    radioGroupValue !== undefined &&
                    child.props.value !== undefined &&
                    radioGroupValue === child.props.value,
                  onChange
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
            <Radio
              key={Math.random()}
              value={item.value}
              checked={
                radioGroupValue !== undefined && radioGroupValue === item.value
              }
              disabled={
                disabled
                  ? true
                  : item.disabled !== undefined
                  ? item.disabled
                  : false
              }
              onChange={onChange}
            >
              {item.label}
            </Radio>
          ) : (
            <Radio
              key={Math.random()}
              value={item}
              checked={
                radioGroupValue !== undefined && radioGroupValue === item
              }
              disabled={disabled}
              onChange={onChange}
            >
              {item}
            </Radio>
          );
        })}
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
