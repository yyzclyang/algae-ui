import React from 'react';
import { Progress } from 'ROOT/src';

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
