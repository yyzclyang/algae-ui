import React, { useState } from 'react';
import { Steps, Step, Button, message } from 'ROOT/src';

export default () => {
  const [current, setCurrent] = useState<number>(0);

  const steps = [{ title: 'First' }, { title: 'Second' }, { title: 'Last' }];

  const onClickNext = () => {
    if (current + 1 >= steps.length) {
      message.warning('已到最后了');
      return;
    }
    setCurrent(current + 1);
  };
  const onClickPrevious = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="steps-example-list">
      <Steps current={current}>
        {steps.map((step, index) => (
          <Step title={step.title} key={index} />
        ))}
      </Steps>
      <Button onClick={onClickNext} buttonType="primary">
        Next
      </Button>
      <Button onClick={onClickPrevious} disabled={current <= 0}>
        Previous
      </Button>
    </div>
  );
};
