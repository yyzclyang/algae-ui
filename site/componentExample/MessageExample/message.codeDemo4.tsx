import React from 'react';
import { Button, message } from 'algae-ui';

export default () => {
  return (
    <div className="message-example-list">
      <Button
        onClick={() => {
          const destroy = message.loading('这是一条加载中消息', 0);
          setTimeout(destroy, 3000);
        }}
      >
        loading message
      </Button>
    </div>
  );
};
