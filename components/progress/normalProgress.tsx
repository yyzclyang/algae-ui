import React from 'react';
import Icon from '../icon';
import { classNames, scopedClassMaker } from '../utils';

const sc = scopedClassMaker('algae-ui-progress');

interface NormalProgressProps {
  backgroundColor?: string;
  strokeColor?: string;
  strokeLinecap?: 'round' | 'square';
  percent: number;
  value?: string;
  showInfo?: boolean;
  status?: 'normal' | 'success' | 'fail';
}

const NormalProgress: React.FunctionComponent<NormalProgressProps> = (
  props: NormalProgressProps
) => {
  const {
    backgroundColor,
    strokeColor,
    strokeLinecap,
    percent,
    value,
    showInfo,
    status
  } = props;

  return (
    <div className={classNames(sc('normal'))}>
      <div
        className={classNames(sc('rail'))}
        style={{
          background: backgroundColor
        }}
      >
        <div
          className={classNames(sc())}
          style={{
            background: strokeColor,
            width: `${percent}%`,
            borderRadius: strokeLinecap === 'round' ? '4px' : '0'
          }}
        />
      </div>
      {showInfo &&
        (status === 'normal' ? (
          <span className={classNames(sc('text'), sc('content'))}>
            {value !== undefined ? value : `${Math.floor(percent)}%`}
          </span>
        ) : status === 'success' ? (
          <span className={classNames(sc('icon'), sc('content'))}>
            <Icon
              type="check-circle"
              style={{
                background: '#52c41a'
              }}
            />
          </span>
        ) : (
          <span className={classNames(sc('icon'), sc('content'))}>
            <Icon
              type="close-circle"
              style={{
                background: '#f5222d'
              }}
            />
          </span>
        ))}
    </div>
  );
};

NormalProgress.displayName = 'NormalProgress';
NormalProgress.defaultProps = {
  backgroundColor: '#E5E5E5',
  strokeColor: '#506DFE'
};

export default NormalProgress;
