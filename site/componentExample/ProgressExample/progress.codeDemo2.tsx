import React from 'react';
import { Progress } from 'algae-ui';

export default () => {
  return (
    <div className="progress-list">
      <Progress percent={30} type="circle" />
      <Progress percent={50} type="circle" status="success" />
      <Progress percent={30} type="circle" status="fail" />
    </div>
  );
};
