import React, { useState } from 'react';
import { Rate } from 'algae-ui';

export default () => {
  const [value, setValue] = useState<number>(2);
  const tips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  return (
    <div className="rate-example-list">
      <div className="rate-example">
        <Rate
          value={value}
          allowHalf
          onChange={(value) => {
            setValue(value);
          }}
          tips={tips}
        />
        <span className="tips">{tips[Math.ceil(value) - 1]}</span>
      </div>
    </div>
  );
};
