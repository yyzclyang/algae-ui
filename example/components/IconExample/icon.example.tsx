import React from 'react';
import { Icon } from 'ROOT/src';
import { Api } from '../CommonDispalyComponents';

const IconExample: React.FunctionComponent = () => (
  <div>
    <Icon
      type="wechat"
      style={{ height: '40px', width: '40px' }}
      rotate={180}
    />
    <Api
      data={[
        ['type', '图标类型。', 'string', '-'],
        [
          'style',
          <>
            设置图标的样式，例如<code>fontSize</code>和<code>color</code>。
          </>,
          'CSSProperties',
          '-'
        ],
        ['rotate', '图标旋转角度。', 'number', '-']
      ]}
    />
  </div>
);

export default IconExample;
