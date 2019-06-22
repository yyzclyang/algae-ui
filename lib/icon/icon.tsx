import React from 'react';
import './importIcons';
import './icon.scss';
import classNames from '../utils/classNames';

interface IconProps extends React.SVGAttributes<SVGElement> {
  type: string;
  style?: React.CSSProperties;
  rotate?: number;
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
  const { className, type, style, rotate, ...restProps } = props;
  const rotateStyle = rotate ? { transform: `rotate(${rotate}deg)` } : {};
  return (
    <svg
      className={classNames('algae-ui-icon', className)}
      style={{ ...style, ...rotateStyle }}
      {...restProps}
    >
      <use xlinkHref={`#${type}`} />
    </svg>
  );
};

Icon.displayName = 'Icon';

export default Icon;
