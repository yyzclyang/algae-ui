import React from 'react';
import './importIcons';

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => (
  <span id={`${props.name}`}>
    <svg>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  </span>
);

export default Icon;
