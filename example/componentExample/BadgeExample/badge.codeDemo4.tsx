import React from 'react';
import { Badge, Avatar, Icon } from 'ROOT/src';

export default () => {
  return (
    <div className="badge-list">
      <Badge count={5} dot>
        <Avatar shape="square" />
      </Badge>
      <Badge dot>
        <Icon type="bell" />
      </Badge>
      <Badge dot style={{ background: '#56BF14' }}>
        something
      </Badge>
    </div>
  );
};
