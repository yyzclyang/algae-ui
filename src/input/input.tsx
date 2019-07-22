import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';
import classNames from '../utils/classNames';
import './style/input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  allowClear?: boolean;
}

const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  const { className, value, onChange, allowClear, ...rest } = props;

  const [inputValue, setInputValue] = useState<string>('');

  const inputChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(value || e.target.value);
    onChange && onChange(e);
  };

  const inputClear: React.MouseEventHandler = () => {
    setInputValue('');
  };

  return (
    <div className="algae-ui-input-wrapper">
      <input
        type="text"
        className={classNames('algae-ui-input', className)}
        onChange={inputChange}
        value={inputValue}
        {...rest}
      />
      {allowClear && inputValue && (
        <Icon
          type="clear"
          className="algae-ui-input-icon"
          onClick={inputClear}
        />
      )}
    </div>
  );
};

Input.displayName = 'Input';

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  allowClear: PropTypes.bool
};

Input.defaultProps = {
  allowClear: false
};

export default Input;
