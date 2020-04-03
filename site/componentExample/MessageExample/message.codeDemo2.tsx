import React from 'react';
import { Button, message, MessageType } from 'algae-ui';

export default () => {
  const types: MessageType[] = ['success', 'error', 'warning'];
  return (
    <div className="message-example-list">
      {types.map((type) => (
        <Button
          key={type}
          onClick={() => {
            message[type](`这是一条 ${type} 消息`);
          }}
        >
          {type}
        </Button>
      ))}
    </div>
  );
};
