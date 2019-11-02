import React from 'react';
import PropTypes from 'prop-types';
import { classNames, scopedClassMaker } from '../utils/index';
import './style/steps.scss';

const sc = scopedClassMaker('algae-ui-steps');

interface StepsProps {
  className?: string;
  current?: number;
  status?: 'waiting' | 'process' | 'success' | 'fail';
  onChange?: (current: number) => void;
  children: React.ReactNode;
}

const Steps: React.FunctionComponent<StepsProps> = (props: StepsProps) => {
  const { className, current, status, onChange, children } = props;

  return (
    <div className={classNames(sc(), className)}>
      {React.Children.map(children, (child, index) => {
        return current! < index
          ? React.cloneElement(child as React.ReactElement, {
              status: 'waiting',
              defaultIcon: String(index + 1),
              onClick: () => {
                onChange && onChange(index);
              }
            })
          : current === index
          ? React.cloneElement(child as React.ReactElement, {
              status: status || 'process',
              defaultIcon: String(index + 1),
              onClick: () => {
                onChange && onChange(index);
              }
            })
          : React.cloneElement(child as React.ReactElement, {
              status: 'success',
              defaultIcon: String(index + 1),
              onClick: () => {
                onChange && onChange(index);
              }
            });
      })}
    </div>
  );
};
Steps.displayName = 'Steps';
Steps.propTypes = {
  className: PropTypes.string,
  current: PropTypes.number,
  status: PropTypes.oneOf(['waiting', 'process', 'success', 'fail']),
  onChange: PropTypes.func,
  children: PropTypes.node
};
Steps.defaultProps = {
  current: 0
};

export default Steps;
