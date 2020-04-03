import React from 'react';
import { Switch } from 'algae-ui';

export default () => {
  return (
    <div className="switch-example-list">
      <Switch
        defaultChecked
        onChange={(checkStatus) => {
          console.log(checkStatus);
        }}
      />
    </div>
  );
};
