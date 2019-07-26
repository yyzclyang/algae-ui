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

class Input extends React.Component<InputProps> {
  static displayName = Input;
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    allowClear: PropTypes.bool
  };
  static defaultProps = {
    allowClear: false
  };

  render() {
    const { className, allowClear, clearFun, ...rest } = this.props;
    return (
      <div className="algae-ui-input-wrapper">
        <input
          type="text"
          className={classNames('algae-ui-input', className)}
          {...rest}
        />
        {allowClear && (
          <Icon
            type="clear"
            className="algae-ui-input-icon"
            onClick={clearFun}
          />
        )}
      </div>
    );
  }
}

export default Input;
