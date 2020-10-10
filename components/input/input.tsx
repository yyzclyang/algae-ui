import React from 'react';
import Icon from '../icon';
import { classNames } from '../utils';

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
    const inputEvent = Object.create(e);
    inputEvent.target = this.inputNode;
    inputEvent.currentTarget = this.inputNode;
    this.inputNode.value = '';
    this.inputOnChange(inputEvent as React.ChangeEvent<HTMLInputElement>);

    const { clearFn } = this.props;
    this.inputNode.focus();
    clearFn && clearFn(e);
  };

  inputOnChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { onChange } = this.props;
    onChange && onChange(e);
  };

  renderInput() {
    const {
      className,
      value,
      onChange,
      allowClear,
      clearFn,
      wrapperClassName,
      inputAfterNode,
      style,
      ...rest
    } = this.props;
    const hasSufNode: boolean = Boolean(allowClear);
    const inputStyle = hasSufNode ? { paddingRight: '32px' } : {};
    return (
      <span className={classNames('algae-ui-input-wrapper', wrapperClassName)}>
        <input
          type="text"
          className={classNames('algae-ui-input', className)}
          style={{ ...inputStyle, ...style }}
          ref={this.saveInputNode}
          value={value}
          onChange={this.inputOnChange}
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
