import React from 'react';
import PropTypes from 'prop-types';
import { classNames, scopedClassMaker } from '../utils/index';
import './style/steps.scss';
import { StatusTypes } from './step';

const sc = scopedClassMaker('algae-ui-steps');

interface StepsProps {
  className?: string;
  current?: number;
  status?: StatusTypes;
  onChange?: (current: number) => void;
  children: React.ReactNode;
}

const Steps: React.FunctionComponent<StepsProps> = (props: StepsProps) => {
  const { className, current, status, onChange, children } = props;

  return (
    <div className={classNames(sc(), className)}>
      {React.Children.map(children, (child, index) => {
        return React.isValidElement(child)
          ? current! < index
            ? React.cloneElement(child, {
                status: 'waiting',
                icon: String(index + 1),
                ...child.props,
                onClick: (e: React.MouseEvent<HTMLDivElement>) => {
                  child.props.onClick && child.props.onClick(e);
                  onChange && onChange(index);
                }
              })
            : current === index
            ? React.cloneElement(child, {
                status: status || 'process',
                icon: String(index + 1),
                ...child.props,
                onClick: (e: React.MouseEvent<HTMLDivElement>) => {
                  child.props.onClick && child.props.onClick(e);
                  onChange && onChange(index);
                }
              })
            : React.cloneElement(child, {
                status: 'success',
                icon: String(index + 1),
                ...child.props,
                onClick: (e: React.MouseEvent<HTMLDivElement>) => {
                  child.props.onClick && child.props.onClick(e);
                  onChange && onChange(index);
                }
              })
          : child;
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
