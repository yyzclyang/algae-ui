import React from 'react';
import { Button, message } from 'ROOT/src';

export default () => {
  return (
    <div className="message-example-list">
      <Button
        onClick={() => {
          message.success(
            'This is a prompt message for success, and it will disappear in 10 seconds',
            10000
          );
        }}
      >
        Customized display duration
      </Button>
    </div>
  );
};
