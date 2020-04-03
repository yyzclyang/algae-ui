import React from 'react';
import classNames from '../utils/classNames';
import './style/textarea.scss';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  defaultValue?: string;
}

const TextArea: React.FunctionComponent<TextAreaProps> = (
  props: TextAreaProps
) => {
  const { className, defaultValue, value, ...restProps } = props;
  return (
    <textarea
      className={classNames('algae-ui-textarea', className)}
      value={value || defaultValue}
      {...restProps}
    />
  );
};

TextArea.displayName = 'TextArea';
TextArea.defaultProps = {
  cols: 32,
  rows: 4
};

export default TextArea;
