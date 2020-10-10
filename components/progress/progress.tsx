import React from 'react';
import NormalProgress from './normalProgress';
import CircleProgress from './circleProgress';
import { classNames, scopedClassMaker } from '../utils';

const sc = scopedClassMaker('algae-ui-progress');

interface ProgressProps {
  type?: 'normal' | 'circle' | 'dashboard';
  percent: number;
  showInfo?: boolean;
  value?: string;
  status?: 'normal' | 'success' | 'fail';
  strokeLinecap?: 'square' | 'round';
  backgroundColor?: string;
  strokeColor?: string;
}

const Progress: React.FunctionComponent<ProgressProps> = (
  props: ProgressProps
) => {
  const { type, percent, status, strokeColor, ...restProps } = props;

  return (
    <span className={classNames(sc('container'))}>
      {type === 'normal' ? (
        <NormalProgress
          percent={percent > 100 ? 100 : percent < 0 ? 0 : percent}
          strokeColor={
            strokeColor !== undefined
              ? strokeColor
              : status === 'normal'
              ? '#506DFE'
              : status === 'success'
              ? '#20BAA4'
              : '#F53F4A'
          }
          status={status}
          {...restProps}
        />
      ) : (
        <CircleProgress
          percent={percent > 100 ? 100 : percent < 0 ? 0 : percent}
          strokeColor={
            strokeColor !== undefined
              ? strokeColor
              : status === 'normal'
              ? '#506DFE'
              : status === 'success'
              ? '#20BAA4'
              : '#F53F4A'
          }
          type={type}
          status={status}
          {...restProps}
        />
      )}
    </span>
  );
};

Progress.displayName = 'Progress';
Progress.defaultProps = {
  type: 'normal',
  showInfo: true,
  status: 'normal',
  strokeLinecap: 'round',
  backgroundColor: '#E5E5E5'
};

export default Progress;
