import React from 'react';
import PropTypes from 'prop-types';
import { classNames, scopedClassMaker } from '../utils/index';
import './style/steps.scss';

const sc = scopedClassMaker('algae-ui-steps');

interface StepsProps {
  className?: string;
  children: React.ReactNode;
}

const Steps: React.FunctionComponent<StepsProps> = (props: StepsProps) => {
  const { className, children } = props;
  return <div className={classNames(sc(), sc(className))}>{children}</div>;
};
Steps.displayName = 'Steps';
Steps.propTypes = {
  className: PropTypes.string
};

export default Steps;
