import React, { useState } from 'react';
import { Steps, Step, StatusTypes } from 'algae-ui';

export default () => {
  const [current, setCurrent] = useState<number>(1);
  const [status, setStatus] = useState<StatusTypes>('process');

  return (
    <div className="steps-example-list">
      <Steps current={current} status={status}>
        <Step
          title="success step"
          description="This is a description"
          onClick={() => {
            setCurrent(0);
            setStatus('success');
          }}
        />
        <Step
          title="process step"
          subTitle="This is subTitle"
          description="This is a description"
          onClick={() => {
            setCurrent(1);
            setStatus('process');
          }}
        />
        <Step
          title="waiting step"
          description="This is a description"
          onClick={() => {
            setCurrent(2);
            setStatus('fail');
          }}
        />
      </Steps>
    </div>
  );
};
