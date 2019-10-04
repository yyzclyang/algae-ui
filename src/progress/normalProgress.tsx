import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { classNames, scopedClassMaker } from '../utils';
import './style/normalProgress.scss';

const sc = scopedClassMaker('algae-ui-progress');

interface NormalProgressProps {
  backgroundStroke?: string;
  progressStroke?: string;
  strokeLinecap?: 'round' | 'square';
  percentage: number;
  value?: string;
  showInfo?: boolean;
  status?: 'normal' | 'success' | 'fail';
}

const NormalProgress: React.FunctionComponent<NormalProgressProps> = (
  props: NormalProgressProps
) => {
  const {
    backgroundStroke,
    progressStroke,
    strokeLinecap,
    percentage,
    value,
    showInfo,
    status
  } = props;

  return (
    <div className={classNames(sc('normal'))}>
      <div
        className={classNames(sc('rail'))}
        style={{
          background: backgroundStroke
        }}
      >
        <div
          className={classNames(sc())}
          style={{
            background: progressStroke,
            width: `${percentage * 100}%`,
            borderRadius: strokeLinecap === 'round' ? '4px' : '0'
          }}
        />
      </div>
      {showInfo &&
        (status === 'normal' ? (
          <span className={classNames(sc('text'), sc('content'))}>
            {value !== undefined ? value : `${Math.floor(percentage * 100)}%`}
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

NormalProgress.propTypes = {
  backgroundStroke: PropTypes.string,
  progressStroke: PropTypes.string,
  strokeLinecap: PropTypes.oneOf(['square', 'round']),
  percentage: PropTypes.number.isRequired
};

NormalProgress.defaultProps = {
  backgroundStroke: '#E5E5E5',
  progressStroke: '#506DFE'
};

export default NormalProgress;
