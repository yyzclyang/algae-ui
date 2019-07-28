import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../index';
import classNames from '../utils/classNames';
import './style/input.scss';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  allowClear?: boolean;
  clearFn?: React.MouseEventHandler<SVGAElement>;
  wrapperClassName?: string;
  inputAfterNode?: React.ReactNode;
}

class Input extends React.Component<InputProps> {
  static displayName = Input;
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    allowClear: PropTypes.bool,
    clearFn: PropTypes.func,
    wrapperClassName: PropTypes.string,
    inputAfterNode: PropTypes.node
  };
  static defaultProps = {
    allowClear: false
  };

  inputNode: HTMLInputElement;
  saveInputNode = (node: HTMLInputElement) => {
    this.inputNode = node;
  };

  clearIconOnClick: React.MouseEventHandler = (
    e: React.MouseEvent<SVGAElement>
  ) => {
    const { clearFn } = this.props;
    this.inputNode.focus();
    clearFn && clearFn(e);
  };

  renderInput() {
    const {
      className,
      allowClear,
      clearFn,
      wrapperClassName,
      inputAfterNode,
      style,
      ...rest
    } = this.props;
    const hasSufNode: boolean = !!allowClear;
    const inputStyle = hasSufNode ? { paddingRight: '32px' } : {};
    return (
      <span className={classNames('algae-ui-input-wrapper', wrapperClassName)}>
        <input
          type="text"
          className={classNames('algae-ui-input', className)}
          style={{ ...inputStyle, ...style }}
          ref={this.saveInputNode}
          {...rest}
        />
        {hasSufNode && (
          <span className="algae-ui-input-suffix">
            {this.props.value && (
              <Icon
                type="clear"
                className="algae-ui-input-icon"
                onClick={this.clearIconOnClick}
              />
            )}
          </span>
        )}
        {inputAfterNode && (
          <span className="algae-ui-input-after">{inputAfterNode}</span>
        )}
      </span>
    );
  }

  render() {
    return this.renderInput();
  }
}

export default Input;
