import React, { useState } from 'react';
import { Button } from 'ROOT/src';

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [iconLoading, setIconLoading] = useState<boolean>(false);

  return (
    <div className="button-list">
      <div>
        <Button buttonType="primary" loading>
          Loading
        </Button>
        <Button icon="setting" loading>
          Loading
        </Button>
      </div>
      <div>
        <Button
          buttonType="primary"
          loading={loading}
          onClick={() => {
            setLoading(true);
          }}
        >
          Click me !
        </Button>
        <Button
          icon="setting"
          loading={iconLoading}
          onClick={() => {
            setIconLoading(true);
          }}
        >
          Click me !
        </Button>
      </div>
      <div>
        <Button buttonType="primary" loading />
        <Button loading />
      </div>
    </div>
  );
};
