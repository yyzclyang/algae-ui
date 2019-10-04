import React from 'react';
import PropTypes from 'prop-types';
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
  backgroundStroke?: string;
  progressStroke?: string;
  strokeLinecap?: 'round' | 'square';
  percentage: number;
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
    backgroundStroke,
    progressStroke,
    strokeLinecap,
    percentage,
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
          stroke={backgroundStroke}
          strokeLinecap="round"
          fill="none"
          {...(type === 'dashboard'
            ? {
                strokeDasharray: arcGenerator(radius!, 1, 270),
                transform: rotateMatrixGenerator(
                  135,
                  outRadius,
                  outRadius,
                  outRadius,
                  outRadius
                )
              }
            : {})}
        />
        <circle
          cx={outRadius}
          cy={outRadius}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={progressStroke}
          strokeLinecap={strokeLinecap}
          fill="none"
          transform={
            type === 'dashboard'
              ? rotateMatrixGenerator(
                  135,
                  outRadius,
                  outRadius,
                  outRadius,
                  outRadius
                )
              : rotateMatrixGenerator(
                  -90,
                  outRadius,
                  outRadius,
                  outRadius,
                  outRadius
                )
          }
          strokeDasharray={arcGenerator(
            radius!,
            percentage,
            type === 'dashboard' ? 270 : 360
          )}
        />
      </svg>
      {showInfo &&
        (status === 'normal' ? (
          <span className={classNames(sc('text'), sc('content'))}>
            {value !== undefined ? value : `${Math.floor(percentage * 100)}%`}
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
CircleProgress.propTypes = {
  type: PropTypes.oneOf(['circle', 'dashboard']),
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  backgroundStroke: PropTypes.string,
  progressStroke: PropTypes.string,
  strokeLinecap: PropTypes.oneOf(['square', 'round']),
  percentage: PropTypes.number.isRequired
};
CircleProgress.defaultProps = {
  type: 'circle',
  radius: 88,
  strokeWidth: 12,
  backgroundStroke: '#E5E5E5',
  progressStroke: '#506DFE'
};

export default CircleProgress;
