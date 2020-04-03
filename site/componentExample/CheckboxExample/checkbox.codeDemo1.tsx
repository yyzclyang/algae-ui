import React from 'react';
import { Checkbox } from 'algae-ui';

export default () => {
  return (
    <div className="checkbox-example-list">
      <Checkbox>Checkbox</Checkbox>
      <br />
      <br />
      <Checkbox indeterminate>Checkbox Indeterminate</Checkbox>
    </div>
  );
};
