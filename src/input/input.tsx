import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';
import classNames from '../utils/classNames';
import './style/input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  allowClear?: boolean;
  clearFn?: React.MouseEventHandler<SVGAElement>;
}

class Input extends React.Component<InputProps> {
  static displayName = Input;
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    allowClear: PropTypes.bool,
    clearFn: PropTypes.func
  };
  static defaultProps = {
    allowClear: false
  };

  inputNode: HTMLInputElement;
  saveInputNode = (node: HTMLInputElement) => {
    this.inputNode = node;
  };

  clearIconClick: React.MouseEventHandler = (
    e: React.MouseEvent<SVGAElement>
  ) => {
    const { clearFn } = this.props;
    this.inputNode.focus();
    clearFn && clearFn(e);
  };

  renderInput() {
    const { className, allowClear, clearFn, ...rest } = this.props;
    const hasSufNode: boolean = !!allowClear;
    const inputStyle = hasSufNode ? { paddingRight: '32px' } : {};
    return (
      <span className="algae-ui-input-wrapper">
        <input
          type="text"
          className={classNames('algae-ui-input', className)}
          style={{ ...inputStyle }}
          ref={this.saveInputNode}
          {...rest}
        />
        {hasSufNode && (
          <span className="algae-ui-input-suffix">
            {this.props.value && (
              <Icon
                type="clear"
                className="algae-ui-input-icon"
                onClick={this.clearIconClick}
              />
            )}
          </span>
        )}
      </span>
    );
  }

  render() {
    return this.renderInput();
  }
}

export default Input;
