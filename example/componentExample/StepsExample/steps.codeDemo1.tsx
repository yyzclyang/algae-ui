import React from 'react';
import { Steps, Step } from 'ROOT/src';

export default () => {
  return (
    <div className="steps-example-list">
      <Steps>
        <Step
          title="first step"
          description="description description description description description description"
          icon="1"
          status="waiting"
        />
        <Step
          title="first step"
          description="description"
          icon="1"
          status="pending"
        />
        <Step
          title="first step"
          description="description"
          subTitle="subtitle"
          icon="1"
          status="success"
        />
        <Step
          title="first step"
          description="description"
          icon="1"
          status="fail"
        />
      </Steps>
    </div>
  );
};
