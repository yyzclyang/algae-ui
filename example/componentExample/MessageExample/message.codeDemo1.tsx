import React from 'react';
import { Button, message } from 'ROOT/src';

export default () => {
  return (
    <div className="message-example-list">
      <Button
        buttonType="primary"
        onClick={() => {
          message.info('这是一条普通消息');
        }}
      >
        normal message
      </Button>
    </div>
  );
};
