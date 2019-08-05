import React, { useState } from 'react';
import { Switch, Button } from 'ROOT/src';

export default () => {
  const [disabled, setDisabled] = useState<boolean>(true);
  return (
    <div className="switch-example-list">
      <Switch defaultChecked disabled={disabled} />
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
