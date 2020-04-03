import React from 'react';
import { classNames } from '../utils';
import './style/buttonGroup.scss';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = (
  props: ButtonGroupProps
) => {
  const { className, children, ...restProps } = props;

  return (
    <div
      className={classNames('algae-ui-button-group', className)}
      {...restProps}
    >
      {children}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
