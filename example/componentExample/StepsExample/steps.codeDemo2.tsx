import React from 'react';
import { Steps, Step, Icon } from 'ROOT/src';

export default () => {
  return (
    <div className="steps-example-list">
      <Steps>
        <Step title="edit" status="success" icon={<Icon type="edit" />} />
        <Step title="form" status="process" icon={<Icon type="form" />} />
        <Step title="delete" status="waiting" icon={<Icon type="delete" />} />
      </Steps>
    </div>
  );
};
