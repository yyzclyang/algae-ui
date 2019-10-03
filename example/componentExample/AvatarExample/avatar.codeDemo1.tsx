import React from 'react';
import { Avatar } from 'ROOT/src';

export default () => {
  return (
    <div className="avatar-list">
      <div>
        <Avatar size={48} />
        <Avatar />
      </div>
      <div>
        <Avatar size={48} shape="square" />
        <Avatar shape="square" />
      </div>
    </div>
  );
};
