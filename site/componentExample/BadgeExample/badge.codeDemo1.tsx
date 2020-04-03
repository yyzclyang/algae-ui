import React from 'react';
import { Badge, Avatar, Icon } from 'algae-ui';

export default () => {
  return (
    <div className="badge-list">
      <Badge count={5}>
        <Avatar shape="square" />
      </Badge>
      <Badge count={0} showZero>
        <Avatar shape="square" />
      </Badge>
      <Badge
        count={
          <Icon
            type="warning-circle"
            style={{ fill: '#e23c39', fontSize: '12px' }}
          />
        }
      >
        <Avatar shape="square" />
      </Badge>
    </div>
  );
};
