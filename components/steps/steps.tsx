import React from 'react';
import { StatusTypes } from './step';
import { classNames, scopedClassMaker } from '../utils';

const sc = scopedClassMaker('algae-ui-steps');

interface StepsProps {
  className?: string;
  current?: number;
  status?: StatusTypes;
  direction?: 'horizontal' | 'vertical';
  onChange?: (current: number) => void;
  children: React.ReactNode;
}

const Steps: React.FunctionComponent<StepsProps> = (props: StepsProps) => {
  const { className, current, status, direction, onChange, children } = props;

  return (
    <div className={classNames(sc(), sc(direction), className)}>
      {React.Children.map(children, (child, index) => {
        return React.isValidElement(child)
          ? index < current!
            ? React.cloneElement(child, {
                status: 'success',
                icon: String(index + 1),
                disabled: !(onChange || child.props.onClick),
                ...child.props,
                onClick: (e: React.MouseEvent<HTMLDivElement>) => {
                  child.props.onClick && child.props.onClick(e);
                  onChange && onChange(index);
                }
              })
            : index === current
            ? React.cloneElement(child, {
                status: status || 'process',
                icon: String(index + 1),
                disabled: !(onChange || child.props.onClick),
                ...child.props,
                onClick: (e: React.MouseEvent<HTMLDivElement>) => {
                  child.props.onClick && child.props.onClick(e);
                  onChange && onChange(index);
                },
                className: `algae-ui-step-current${
                  child.props.className ? ` ${child.props.className}` : ''
                }`
              })
            : React.cloneElement(child, {
                status: 'waiting',
                icon: String(index + 1),
                disabled: !(onChange || child.props.onClick),
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
Steps.defaultProps = {
  current: 0,
  direction: 'horizontal'
};

export default Steps;
