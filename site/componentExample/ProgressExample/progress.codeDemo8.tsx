import React from 'react';
import { Progress } from 'algae-ui';

export default () => {
  return (
    <div className="progress-list">
      <Progress percent={90} backgroundColor="#cccccc" strokeColor="#ffa30a" />
      <Progress
        percent={30}
        type="circle"
        backgroundColor="#cccccc"
        strokeColor="#ff721f"
      />
    </div>
  );
};
