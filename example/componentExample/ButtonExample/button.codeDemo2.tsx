import React from 'react';
import { Button, Icon } from 'algae-ui/lib';

export default () => {
  return (
    <div className="button-list">
      <div>
        <Button buttonType="primary" icon="setting">
          Setting
        </Button>
        <Button buttonType="primary">
          <Icon type="setting" />
        </Button>
        <Button buttonType="success" icon="setting" iconPosition="right">
          Setting
        </Button>
      </div>
      <div>
        <Button buttonType="primary" ghost icon="setting">
          Setting
        </Button>
        <Button buttonType="primary" ghost>
          <Icon type="setting" />
        </Button>
        <Button buttonType="success" ghost icon="setting" iconPosition="right">
          Setting
        </Button>
      </div>
    </div>
  );
};
