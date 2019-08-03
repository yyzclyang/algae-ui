import React from 'react';
import { Affix, Button } from 'algae-ui/lib';

export default () => {
  return (
    <div className="affix-example-list">
      <Affix
        offsetTop={200}
        onChange={(isAffixed) => {
          console.log(isAffixed);
        }}
      >
        <Button>200px to affix top</Button>
      </Affix>
    </div>
  );
};
