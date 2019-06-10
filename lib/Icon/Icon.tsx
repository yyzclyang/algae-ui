import React from 'react';
import './importIcons';
import './icon.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
  const { className, name, ...restProps } = props;
  return (
    <svg className="yu-ui-icon" {...restProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

export default Icon;
