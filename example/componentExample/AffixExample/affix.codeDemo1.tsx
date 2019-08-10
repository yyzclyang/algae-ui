import React from 'react';
import { Affix, Button } from 'ROOT/src';

export default () => {
  const el = document.querySelectorAll('.site-main')[0];
  return (
    <div className="affix-example-list">
      <Affix target={el as HTMLElement}>
        <Button>Affix Top</Button>
      </Affix>
    </div>
  );
};
