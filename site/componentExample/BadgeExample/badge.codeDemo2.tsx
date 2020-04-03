import React from 'react';
import { Badge } from 'algae-ui';

export default () => {
  return (
    <div className="badge-list">
      <Badge count={5} />
      <Badge
        count={0}
        showZero
        style={{
          background: '#FFFFFF',
          color: '#8F8F8F',
          boxShadow: '0 0 0 1px #d9d9d9 inset'
        }}
      />
      <Badge count={100} style={{ background: '#56BF14' }} />
    </div>
  );
};
