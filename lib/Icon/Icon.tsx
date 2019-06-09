import React from 'react';
import wechat from './icons/wechat.svg'

console.log(wechat)

interface IconProps {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => (<span>{ props.name }</span>);

export default Icon;
