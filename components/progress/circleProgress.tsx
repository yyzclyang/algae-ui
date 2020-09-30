import React from 'react';
import Icon from '../icon';
import {
  classNames,
  scopedClassMaker,
  rotateMatrixGenerator,
  arcGenerator
} from '../utils';
import './style/circleProgress.scss';

const sc = scopedClassMaker('algae-ui-progress');

interface CircleProgressProps {
  type?: 'circle' | 'dashboard';
  radius?: number;
  strokeWidth?: number;
  backgroundColor?: string;
  strokeColor?: string;
  strokeLinecap?: 'round' | 'square';
  percent: number;
  value?: string;
  showInfo?: boolean;
  status?: 'normal' | 'success' | 'fail';
}

const CircleProgress: React.FunctionComponent<CircleProgressProps> = (
  props: CircleProgressProps
) => {
  const {
    type,
    radius,
    strokeWidth,
    backgroundColor,
    strokeColor,
    strokeLinecap,
    percent,
    value,
    showInfo,
    status
  } = props;

  const outRadius = radius! + strokeWidth!;

  return (
    <div
      className={classNames(
        sc('circle'),
        type === 'dashboard' ? sc('dashboard') : ''
      )}
    >
      <svg width="120" height="120" viewBox="0 0 200 200">
        <circle
          cx={outRadius}
          cy={outRadius}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={backgroundColor}
          strokeLinecap={strokeLinecap}
          fill="none"
          {...(type === 'dashboard'
            ? {
                strokeDasharray: arcGenerator(radius!, 1, 270),
                transform: rotateMatrixGenerator(
                  135,
                  { x: outRadius, y: outRadius },
                  { x: outRadius, y: outRadius }
                )
              }
            : {})}
        />
        <circle
          cx={outRadius}
          cy={outRadius}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={strokeColor}
          strokeLinecap={strokeLinecap}
          fill="none"
          transform={
            type === 'dashboard'
              ? rotateMatrixGenerator(
                  135,
                  { x: outRadius, y: outRadius },
                  { x: outRadius, y: outRadius }
                )
              : rotateMatrixGenerator(
                  -90,
                  { x: outRadius, y: outRadius },
                  { x: outRadius, y: outRadius }
                )
          }
          strokeDasharray={arcGenerator(
            radius!,
            percent / 100,
            type === 'dashboard' ? 270 : 360
          )}
        />
      </svg>
      {showInfo &&
        (status === 'normal' ? (
          <span className={classNames(sc('text'), sc('content'))}>
            {value !== undefined ? value : `${Math.floor(percent)}%`}
          </span>
        ) : status === 'success' ? (
          <span className={classNames(sc('icon'), sc('content'))}>
            <Icon
              type="check"
              style={{
                fill: '#52c41a'
              }}
            />
          </span>
        ) : (
          <span className={classNames(sc('icon'), sc('content'))}>
            <Icon
              type="close"
              style={{
                fill: '#f5222d'
              }}
            />
          </span>
        ))}
    </div>
  );
};

CircleProgress.displayName = 'CircleProgress';
CircleProgress.defaultProps = {
  type: 'circle',
  radius: 88,
  strokeWidth: 12,
  backgroundColor: '#E5E5E5',
  strokeColor: '#506DFE'
};

export default CircleProgress;
