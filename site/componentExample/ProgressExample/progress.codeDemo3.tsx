import React from 'react';
import { Progress } from 'algae-ui';

export default () => {
  return (
    <div className="progress-list">
      <Progress percent={50} type="dashboard" />
    </div>
  );
};
