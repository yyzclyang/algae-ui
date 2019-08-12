import React from 'react';
import { Affix, Button } from 'ROOT/src';

export default () => {
  const el = document.querySelectorAll('.site-main')[0];
  return (
    <div className="affix-example-list">
      <Affix
        offsetTop={200}
        target={() => el as HTMLElement}
        onChange={(isAffixed) => {
          console.log(isAffixed);
        }}
      >
        <Button>200px to affix top</Button>
      </Affix>
    </div>
  );
};
