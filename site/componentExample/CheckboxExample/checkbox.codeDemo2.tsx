import React from 'react';
import { Checkbox } from 'algae-ui';

export default () => {
  return (
    <div className="checkbox-example-list">
      <Checkbox disabled>Checkbox Disabled</Checkbox>
      <br />
      <br />
      <Checkbox checked disabled>
        Checkbox Checked Disabled
      </Checkbox>
      <br />
      <br />
      <Checkbox indeterminate disabled>
        Checkbox Indeterminate Disabled
      </Checkbox>
    </div>
  );
};
