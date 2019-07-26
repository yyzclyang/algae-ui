import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';
import classNames from '../utils/classNames';
import './style/input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  allowClear?: boolean;
  clearFun?: React.MouseEventHandler<SVGAElement>;
}

const Input: React.FunctionComponent<InputProps> = (props: InputProps) => {
  const { className, allowClear, clearFun, ...rest } = props;

  return (
    <div className="algae-ui-input-wrapper">
      <input
        type="text"
        className={classNames('algae-ui-input', className)}
        {...rest}
      />
      {allowClear && (
        <Icon type="clear" className="algae-ui-input-icon" onClick={clearFun} />
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
