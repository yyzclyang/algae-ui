import React from 'react';
import { Icon } from 'algae-ui/lib';

export default () => (
  <div className="icon-list">
    <Icon type="alert" />
    <Icon type="github" />
    <Icon type="gift" />
    <Icon type="apple" rotate={180} />
    <Icon type="camera" style={{ fill: '#506dfe' }} />
  </div>
);
