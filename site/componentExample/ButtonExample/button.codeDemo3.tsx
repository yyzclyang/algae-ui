import React from 'react';
import { Button } from 'algae-ui';

export default () => {
  return (
    <div className="button-list">
      <div>
        <Button buttonType="primary">Primary</Button>
        <Button buttonType="primary" disabled>
          Disabled Primary
        </Button>
      </div>
      <div>
        <Button>Default</Button>
        <Button disabled>Disabled Default</Button>
      </div>
      <div>
        <Button buttonType="success">Success</Button>
        <Button buttonType="success" disabled>
          Disabled Success
        </Button>
      </div>
      <div>
        <Button buttonType="danger">Danger</Button>
        <Button buttonType="danger" disabled>
          Disabled Danger
        </Button>
      </div>
    </div>
  );
};
