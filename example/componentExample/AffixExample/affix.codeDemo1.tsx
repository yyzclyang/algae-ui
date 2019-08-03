import React from 'react';
import { Affix, Button } from 'algae-ui/lib';

export default () => {
  return (
    <div className="affix-example-list">
      <Affix>
        <Button>Affix Top</Button>
      </Affix>
    </div>
  );
};
