import React from 'react';
import { Switch, Icon } from 'algae-ui';

export default () => {
  return (
    <div className="switch-example-list">
      <Switch defaultChecked checkedEl="开" uncheckedEl="关" />
      <br />
      <br />
      <Switch defaultChecked checkedEl="1" uncheckedEl="0" />
      <br />
      <br />
      <Switch
        defaultChecked
        checkedEl={<Icon type="check" />}
        uncheckedEl={<Icon type="close" />}
      />
    </div>
  );
};
