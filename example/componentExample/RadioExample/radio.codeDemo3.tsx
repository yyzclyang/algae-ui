import React, { useState } from 'react';
import { Radio, RadioGroup } from 'ROOT/src';

export default () => {
  const [value, setValue] = useState<string>('1');
  return (
    <div className="radio-example-list">
      <RadioGroup
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      >
        <Radio value="1">Radio</Radio>
        <Radio value="2">Radio</Radio>
        <Radio value="3">Radio</Radio>
      </RadioGroup>
    </div>
  );
};
