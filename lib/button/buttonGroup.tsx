import React from 'react';
import PropTypes from 'prop-types';
import './style/buttonGroup.scss';
import { classNames } from '../utils';

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

ButtonGroup.propTypes = {
  children: PropTypes.node
};

export default ButtonGroup;
