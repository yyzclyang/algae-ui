import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helpers/classes';

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
      className={classes('algae-ui-icon', className)}
      {...restProps}
      style={{ ...style, ...rotateStyle }}
    >
      <use xlinkHref={`#${type}`} />
    </svg>
  );
};

export default Icon;
