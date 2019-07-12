import React from 'react';
import { Button } from 'ROOT/src';

export default () => {
  return (
    <div className="button-list ghost">
      <Button buttonType="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button buttonType="success" ghost>
        Success
      </Button>
      <Button buttonType="danger" ghost>
        Danger
      </Button>
    </div>
  );
};
