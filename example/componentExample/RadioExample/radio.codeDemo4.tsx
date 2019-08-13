import React, { useState } from 'react';
import { Radio, RadioGroup } from 'ROOT/src';

export default () => {
  const [value, setValue] = useState<string>('1');
  const radioStyle = {
    display: 'block'
  };
  return (
    <div className="radio-example-list">
      <RadioGroup
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
          console.log(e.currentTarget.value);
        }}
      >
        <Radio style={radioStyle} value="1">
          Radio
        </Radio>
        <Radio style={radioStyle} value="2">
          Radio
        </Radio>
        <Radio style={radioStyle} value="3">
          Radio
        </Radio>
      </RadioGroup>
    </div>
  );
};
