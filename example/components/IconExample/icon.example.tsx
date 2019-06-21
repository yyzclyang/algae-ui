import React from 'react';
import { Icon } from 'ROOT/lib';

const IconExample: React.FunctionComponent = () => (
  <div>
    <Icon
      type="wechat"
      style={{ height: '40px', width: '40px' }}
      rotate={180}
    ></Icon>
  </div>
);

export default IconExample;
