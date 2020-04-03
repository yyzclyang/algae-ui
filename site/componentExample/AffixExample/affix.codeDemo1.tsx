import React from 'react';
import { Affix, Button } from 'algae-ui';

export default () => {
  const el = document.querySelectorAll('.site-main')[0];
  return (
    <div className="affix-example-list">
      <Affix target={() => el as HTMLElement}>
        <Button>Affix Top</Button>
      </Affix>
    </div>
  );
};
