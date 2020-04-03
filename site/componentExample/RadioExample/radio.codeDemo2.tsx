import React, { useState } from 'react';
import { Radio, Button } from 'algae-ui';

export default () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  return (
    <div className="radio-example-list">
      <Radio disabled={disabled}>Radio Disabled</Radio>
      <br />
      <Radio checked disabled={disabled}>
        Radio Disabled
      </Radio>
      <br />
      <Button
        buttonType="primary"
        onClick={() => {
          setDisabled(!disabled);
        }}
      >
        Toggle disabled
      </Button>
    </div>
  );
};
