import React from 'react';
import { Progress } from 'ROOT/src';

export default () => {
  return (
    <div className="progress-list">
      <Progress percent={50} type="dashboard" />
    </div>
  );
};
