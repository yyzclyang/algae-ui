import React from 'react';
import PropTypes from 'prop-types';
import { classNames, scopedClassMaker } from '../utils/index';
import Icon from '../icon';
import './style/step.scss';

const sc = scopedClassMaker('algae-ui-step');

export type StatusTypes = 'waiting' | 'process' | 'success' | 'fail';

interface StepProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactElement | string;
  title: string;
  subTitle?: string;
  description?: string;
  defaultStatus?: StatusTypes;
  status?: StatusTypes;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Step: React.FunctionComponent<StepProps> = (props: StepProps) => {
  const {
    className,
    style,
    icon,
    title,
    subTitle,
    description,
    defaultStatus,
    disabled,
    onClick
  } = props;

  const status = props.status || defaultStatus;

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (disabled) {
      return;
    }
    onClick && onClick(e);
  };

  return (
    <div className={sc('wrapper')}>
      <div
        className={classNames(sc(), sc(status), className)}
        onClick={handleClick}
        style={style}
      >
        <div className={classNames(sc('icon-wrapper'))}>
          {React.isValidElement(icon) ? (
            icon
          ) : status === 'success' ? (
            <Icon type="check-circle" />
          ) : status === 'fail' ? (
            <Icon type="close-circle" />
          ) : (
            <span className={classNames(sc('icon'))}>{icon}</span>
          )}
        </div>
        <div className={classNames(sc('content'))}>
          <div className={classNames(sc('title'))}>
            {title}
            {subTitle && (
              <span className={classNames(sc('subTitle'))}>{subTitle}</span>
            )}
          </div>
          <p className={classNames(sc('description'))}>{description}</p>
        </div>
      </div>
    </div>
  );
};

Step.displayName = 'Step';
Step.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.oneOf(['waiting', 'process', 'success', 'fail']),
  defaultStatus: PropTypes.oneOf(['waiting', 'process', 'success', 'fail']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
Step.defaultProps = {
  defaultStatus: 'waiting'
};

export default Step;
