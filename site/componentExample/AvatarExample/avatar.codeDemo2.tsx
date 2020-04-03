import React from 'react';
import { Avatar } from 'algae-ui';

export default () => {
  return (
    <div className="avatar-list">
      <Avatar />
      <Avatar>User</Avatar>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <Avatar style={{ color: 'red', background: '#FADFC9' }}>U</Avatar>
      <Avatar style={{ background: '#FADFC9' }} />
    </div>
  );
};
