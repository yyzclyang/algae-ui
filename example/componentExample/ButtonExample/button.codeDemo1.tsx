import React from 'react';
import { Button } from 'ROOT/src';

export default () => {
  return (
    <div className="button-list">
      <Button buttonType="primary">Primary</Button>
      <Button>Default</Button>
      <Button buttonType="success">Success</Button>
      <Button buttonType="danger">Danger</Button>
    </div>
  );
};
