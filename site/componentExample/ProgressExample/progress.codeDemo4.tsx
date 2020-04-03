import React from 'react';
import { Progress, Button, ButtonGroup } from 'algae-ui';

export default () => {
  const [value1, setValue1] = React.useState<number>(30);
  const [value2, setValue2] = React.useState<number>(50);

  return (
    <div className="progress-list">
      <Progress percent={value1} type="normal" />
      <ButtonGroup>
        <Button onClick={() => setValue1((v) => v - 10)}>-</Button>
        <Button onClick={() => setValue1((v) => v + 10)}>+</Button>
      </ButtonGroup>
      <br />
      <br />
      <Progress percent={value2} type="circle" />
      <ButtonGroup>
        <Button onClick={() => setValue2((v) => v - 10)}>-</Button>
        <Button onClick={() => setValue2((v) => v + 10)}>+</Button>
      </ButtonGroup>
    </div>
  );
};
