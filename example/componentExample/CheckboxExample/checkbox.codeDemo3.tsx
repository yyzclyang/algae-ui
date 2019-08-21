import React, { useState } from 'react';
import { Checkbox, Button, ButtonGroup } from 'ROOT/src';

export default () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="checkbox-example-list">
      <Checkbox disabled={disabled} checked={checked}>
        Checkbox Disabled
      </Checkbox>
      <br />
      <br />
      <ButtonGroup>
        <Button
          buttonType="primary"
          full
          onClick={() => {
            setDisabled(!disabled);
          }}
        >
          toggle disabled
        </Button>
        <Button
          buttonType="primary"
          full
          onClick={() => {
            setChecked(!checked);
          }}
        >
          toggle checked
        </Button>
      </ButtonGroup>
    </div>
  );
};
