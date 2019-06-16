import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
  const { className, name, ...restProps } = props;
  return (
    <svg className={classes('algae-ui-icon', className)} {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
