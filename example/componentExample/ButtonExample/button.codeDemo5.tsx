import React from 'react';
import { Button, ButtonGroup } from 'ROOT/src';

export default () => {
  return (
    <div className="button-list">
      <div>
        <ButtonGroup>
          <Button>Button1</Button>
          <Button>Button2</Button>
          <Button>Button3</Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup>
          <Button buttonType="primary" icon="left">
            Go back
          </Button>
          <Button buttonType="primary" icon="right" iconPosition="right">
            Go forward
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup>
          <Button buttonType="success" icon="cloud" />
          <Button buttonType="success" icon="setting" />
        </ButtonGroup>
      </div>
    </div>
  );
};
