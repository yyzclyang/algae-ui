import React from 'react';
import { Steps, Step } from 'ROOT/src';

export default () => {
  return (
    <div className="steps-example-list">
      <Steps direction="vertical" current={1}>
        <Step title="success step" description="This is a description" />
        <Step
          title="process step"
          subTitle="This is subTitle"
          description="This is a description"
        />
        <Step title="waiting step" description="This is a description" />
      </Steps>
    </div>
  );
};
