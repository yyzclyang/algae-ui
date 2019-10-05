import React from 'react';
import { Progress } from 'ROOT/src';

export default () => {
  return (
    <div className="progress-list">
      <Progress percent={90} strokeLinecap="square" />
      <Progress percent={30} type="circle" strokeLinecap="square" />
      <Progress percent={30} type="dashboard" strokeLinecap="square" />
    </div>
  );
};
