import React from 'react';
import { Progress } from 'ROOT/src';

export default () => {
  return (
    <div className="progress-list">
      <Progress percent={90} value="great" type="normal" />
      <Progress percent={30} value="bad" type="dashboard" />
    </div>
  );
};
