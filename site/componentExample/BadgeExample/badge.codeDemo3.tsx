import React from 'react';
import { Badge, Avatar } from 'algae-ui';

export default () => {
  return (
    <div className="badge-list">
      <Badge count={99}>
        <Avatar shape="square" />
      </Badge>
      <Badge count={100}>
        <Avatar shape="square" />
      </Badge>
      <Badge count={11} overflowCount={10}>
        <Avatar shape="square" />
      </Badge>
    </div>
  );
};
