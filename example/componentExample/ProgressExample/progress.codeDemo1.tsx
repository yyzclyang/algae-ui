import React from 'react';
import { Progress } from 'ROOT/src';

export default () => {
  return (
    <div className="progress-list">
      <Progress percent={30} />
      <Progress percent={50} />
      <Progress percent={20} status="fail" />
      <Progress percent={70} status="success" />
      <Progress percent={50} showInfo={false} />
    </div>
  );
};
