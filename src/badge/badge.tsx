import React from 'react';
import PropTypes from 'prop-types';
import './style/badge.scss';
import { classNames, scopedClassMaker } from '../utils';

const sc = scopedClassMaker('algae-ui-badge');

interface BadgeProps {
  count?: number | React.ReactElement;
  showZero?: boolean;
  overflowCount?: number;
  dot?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Badge: React.FunctionComponent<BadgeProps> = (props: BadgeProps) => {
  const { count, showZero, overflowCount, dot, style, children } = props;

  return (
    <span className={classNames(sc('wrapper'))}>
      {children}
      {(dot || !!count || (count === 0 && showZero)) && (
        <span
          className={classNames(
            sc(),
            children !== undefined ? sc('has-children') : '',
            dot ? sc('dot') : ''
          )}
          style={{
            ...{ background: React.isValidElement(count) ? '#FFFFFF' : '' },
            ...style
          }}
        >
          {React.isValidElement(count) ? (
            count
          ) : (
            <span className={classNames(sc('content'))}>
              {dot
                ? null
                : overflowCount !== undefined &&
                  count !== undefined &&
                  count > overflowCount
                ? overflowCount + '+'
                : count}
            </span>
          )}
        </span>
      )}
    </span>
  );
};

Badge.displayName = 'Badge';

Badge.propTypes = {
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.element]),
  showZero: PropTypes.bool,
  overflowCount: PropTypes.number,
  dot: PropTypes.bool,
  children: PropTypes.node
};

Badge.defaultProps = {
  showZero: false,
  overflowCount: 99
};

export default Badge;
